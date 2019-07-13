import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import DataForm from './DataForm';
import HistoryList from './HistoryList';
import HistoryListRow from './HistoryListRow';
import HistoryListInput from './HistoryListInput';
import DataApi from '../../api/mockDataPropApi';
import DataPage from './DataPage';
import Toastr from 'toastr';

export class ManageDataPage extends React.Component {
  static willTransitionFrom(transition, component) {
    if (component.state.dirty && !confirm('Data ini belum di simpan, anda yakin ingin meninggalkannya?')) {
      transition.abort();
    }
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, this.props.data),
      error: {},
      med: Object.assign({}, this.props.med),
      medicalHistory: Object.assign({}, this.props.medicalHistory),
      formPass: false,
      delButton: false,
      dirty: false,
    //gender: [{input:"Pria"},{input:"Wanita"}]
      gender: Object.assign([], this.props.gender)
    };
    debugger;
    this.updateDataState = this.updateDataState.bind(this);
    this.onSave = this.onSave.bind(this);
    this.addHistory = this.addHistory.bind(this);
    this.updateMedState = this.updateMedState.bind(this);
    this.deleteHistory = this.deleteHistory.bind(this);
    this.validForm = this.validForm.bind(this);
    this.validHistory = this.validHistory.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    if (this.props.id == undefined) {
      this.setState({delButton: true});
    }
    if (this.props.errorPage) {
      this.context.router.push('/notFoundPage');
    }
  }

  updateDataState(event) {
    if (!this.state.dirty) {
      this.setState({dirty: true});
    }
    const field = event.target.name;
    let data = Object.assign({}, this.state.data);
    data[field] = event.target.value;
    return this.setState({data: data});
  }

  updateMedState(event) {
    const field = event.target.name;
    let med = Object.assign({}, this.state.med);
    med[field] = event.target.value;
    return this.setState({med: med});

  }

  onSave(event) {
    let dataId = this.props.params.id;
    let data = this.state.data;
    let id;
    let dataStat = this.validForm();
    if (dataStat) {
      event.preventDefault();
      if (confirm('Yakin simpan data ini?') == true) {
      this.props.actions.saveData(this.state.data);
      Toastr.success('Data Tersimpan');
      this.setState({dirty: false});
      } else {null;}
    } else {
      event.preventDefault();
      Toastr.warning('Data Belum Lengkap');
    }
  }

  onDelete(event) {
    let id = this.props.id;
    if (confirm('Hapus data ini?')  == true ) {
      event.preventDefault();
      this.props.actions.deleteData(this.props.id)
      .then(Toastr.success('Data Berhasil Dihapus'));
      this.context.router.push('/datas');
      this.setState({data: this.props.initialData});
    } else {event.preventDefault();}
  }

  addHistory(event) {
    let id = this.props.params.id;

    if (id) {
      this.validHistory();
    } else{
      this.props.actions.loadDatas()
      .then(this.validHistory);
    }

  }

  deleteHistory(event) {
    event.preventDefault();
    let id = this.props.params.id;

  }

  validForm() {
    let data = Object.assign({}, this.state.data);
    if (data.name.length > 0 &&
        data.age.length > 0 &&
        data.address.length > 0 &&
        data.gender.length > 0) return true;
        return false;
  }

  validHistory() {
    let med = Object.assign({}, this.state.med);
    let data = Object.assign({}, this.state.data);
    if (med.date.length > 0 &&
        med.diagnose.length > 0 &&
        med.therapy.length > 0) {
          !confirm('Yakin simpan data ini?');
          data = data.medicalHistory.splice(0,0, med);
          this.props.actions.saveData(data);
          //.then(this.setState({medicalHistory: this.props.medicalHistory}));
          this.setState({med: this.props.initialMed});
          Toastr.success('Data Berhasil Tersimpan');
          debugger;
        } else {
          Toastr.warning('Data Riwayat Belum Terisi Dengan Lengkap');
        }
  }

  render() {

    let stat= this.state.delButton;
    let gend= this.state.gender;
    debugger;
    return(
      <div>
      <div>
      <DataForm
        data={this.state.data}
        onChange={this.updateDataState}
        errors={this.state.errors}
        onSave={this.onSave}
        onDelete={this.onDelete}
        buttonStatus={this.state.delButton}
        options={this.state.gender}/>
    </div>
    <div className="margin-top">
      <HistoryList medicalHistory={this.props.medicalHistory}
                med={this.state.med}
                onChange={this.updateMedState}
                addHistory={this.addHistory}
                hapusRiwayat={this.deleteHistory}
                buttonStatus={this.state.delButton} />
      </div>
    </div>
    );
  }
}

ManageDataPage.propTypes = {
  data: PropTypes.object ,
  datas: PropTypes.array ,
  medicalHistory: PropTypes.array ,
  med: PropTypes.object ,
  actions: PropTypes.object ,
  alertNotification: PropTypes.func,
  errorPage: React.PropTypes.function ,
  initialMed: PropTypes.object,
  params: PropTypes.object,
  id:PropTypes.object,
  initialData: PropTypes.object,
  delButton: React.PropTypes.array ,
  gender: PropTypes.object
};

ManageDataPage.contextTypes = {
  router: PropTypes.object
};

export function getDateNumber() {
  let d = new Date();
  d = d.getDate() +"/"+(d.getMonth() + 1) +"/"+ d.getFullYear();
  return d;
}
export function getDataById(datas, id) {
  const data = datas.filter(data => data.id == id);
  if (data) return data[0];
  debugger;
  return null;
}

export function mapStateToProps(state, ownProps) {

  let data = {id:'',name:'', gender:'', age:'', address:'', medicalHistory:[]};
  let med = {date:'', diagnose:'', therapy:''};
  const initialData = data;
  let errorPage;
  let initialMed = med;
  const dataId = ownProps.params.id;
  let medicalHistory = [];
  let gender = [{input:"Pria"},{input:"Wanita"}];
  if (dataId && state.datas.length > 0) {
    data = getDataById(state.datas, dataId);
    med.date = String(getDateNumber());
    if (!data) {
      errorPage = true;
    } else {medicalHistory =  data.medicalHistory;}
  } else {
    if (dataId) {
      errorPage = true;
    }
  }
  debugger;
  return {
    data: data,
    datas: state.datas,
    medicalHistory: medicalHistory,
    med: med,
    id: dataId,
    initialMed: initialMed,
    initialData: initialData,
    errorPage: errorPage,
    gender: gender
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dataAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDataPage);
