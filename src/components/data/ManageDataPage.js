import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import DataForm from './DataForm';
import HistoryList from './HistoryList';
import HistoryListRow from './HistoryListRow';
import HistoryListInput from './HistoryListInput';
import DataApi from '../../api/mockDataPropApi';
//import Router from 'react-router';
import DataPage from './DataPage';
import Toastr from 'toastr';


class ManageDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, this.props.data),
      error: {},
      med: Object.assign({}, this.props.med),
      medicalHistory: Object.assign({}, this.props.medicalHistory),
      formPass: false
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
    //this.props.actions.loadDatas();
    if (this.state.data) {
      this.setState({medicalHistory: {}});
    }

    //this.setState({data: this.props.data});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({medicalHistory: Object.assign({}, nextProps.medicalHistory)});
  }

  updateDataState(event) {
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
    event.preventDefault();
    if (confirm('Yakin simpan data ini?') == true) {
      this.validForm();
    } else {
      event.preventDefault();
      null;
    }

    //this.context.router.push('/data');
    //let id = this.props.data.id;

    /*
    if (dataId) {
      this.context.router.push('/data');
    } else {
      this.context.router.push('/datas/'+ id);
    }
    //this.setState({datas: this.props.datas});
    debugger;
    */

  }
  onDelete(event) {
    let id = this.props.id;

    if (id) {
      if (confirm('Hapus data ini?')  == true ) {
        event.preventDefault();
        this.props.actions.deleteData(this.props.id)
        .then(Toastr.success('Data Berhasil Dihapus'));
        this.context.router.push('/datas');
        this.setState({data: this.props.initialData})
        //.then(this.context.router.push('/data'));

      } else {
        event.preventDefault();

        }

      }
      else {
        event.preventDefault();
        Toastr.warning('Belum ada data yang terismpan');
      }












    /*
    if (confirm('Hapus data ini?')  == true && id == true) {
      event.preventDefault();
      this.props.actions.deleteData(this.props.id)
      .then(Toastr.success('Data Berhasil Dihapus'));
      this.context.router.push('/datas');
      this.setState({data: this.props.initialData})
      //.then(this.context.router.push('/data'));

    } else {
      event.preventDefault();
      if (id == false) {
        Toastr.warning('Belum ada data yang terismpan');
      }

    }
    */

  }

  addHistory(event) {
    let id = this.props.params.id;

    if (id) {
      this.validHistory();
    } else{
      this.props.actions.loadDatas()
      .then(this.validHistory)
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
        data.gender.length > 0) {
      !
      this.props.actions.saveData(this.state.data);
      Toastr.success('Data Tersimpan');
      debugger;
    } else {
      Toastr.warning('Data Belum Lengkap');
    }
    return data.id;

  //  debugger;

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
    //debugger;
    return(

      <div>
      <DataForm
        data={this.state.data}
        onChange={this.updateDataState}
        errors={this.state.errors}
        onSave={this.onSave}
        onDelete={this.onDelete}
        />
      <HistoryList medicalHistory={this.props.medicalHistory}
                med={this.state.med}
                onChange={this.updateMedState}
                addHistory={this.addHistory}
                hapusRiwayat={this.deleteHistory}
                />

      </div>

    );

  }
}
ManageDataPage.propTypes = {
  data: PropTypes.object.isRequired,
  datas: PropTypes.array.isRequired,
  medicalHistory: PropTypes.array.isRequired,
  med: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  alertNotification: PropTypes.func
};

ManageDataPage.contextTypes = {
  router: PropTypes.object
};


function getDateNumber() {
  let d = new Date();
  d = d.getDate() +"/"+(d.getMonth() + 1) +"/"+ d.getFullYear();

  return d;
}
function getDataById(datas, id) {
  const data = datas.filter(data => data.id == id);
  if (data) return data[0];
  debugger;
  return null;

}

function mapStateToProps(state, ownProps) {

  let data = {id:'',name:'', gender:'', age:'', address:'', medicalHistory:[]};
  let med = {date:'', diagnose:'', therapy:''};
  let initialData = data;
  med.date = String(getDateNumber());
  let initialMed = med;
  const dataId = ownProps.params.id;
  let medicalHistory;
  if (dataId && state.datas.length > 0) {
    data = getDataById(state.datas, dataId);

  }
  debugger;

  if (state.datas.length > 0 && data.name == '') {
    medicalHistory = [];
    //medicalHistory =  data.medicalHistory;
    debugger;
  } else {
    medicalHistory =  data.medicalHistory;

    debugger;

  }

  return {
    data: data,
    datas: state.datas,
    medicalHistory: medicalHistory,
    med: med,
    id: dataId,
    initialMed: initialMed,
    initialData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dataAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageDataPage);


/*


*/
