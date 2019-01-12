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


class ManageDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, this.props.data),
      error: {},
      med: Object.assign({}, this.props.med),
      //datas: Object.assign({}, DataApi.getAllDatas())
      medicalHistory: Object.assign({}, this.props.medicalHistory)
    };
    debugger;

    this.updateDataState = this.updateDataState.bind(this);
    this.onSave = this.onSave.bind(this);
    this.addHistory = this.addHistory.bind(this);
    this.updateMedState = this.updateMedState.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadDatas();
    //this.setState({data: this.props.data});
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
    event.preventDefault();
    this.props.actions.saveData(this.state.data)
    .then((redirect) => {this.context.router.push('/data');
    return redirect; });

    debugger;
    //this.setState({data: DataApi.saveData(data)});

  }

  addHistory(event) {
    let id = this.props.params.id;
    event.preventDefault();
    let data = Object.assign({}, this.props.data);
    let med = Object.assign({}, this.state.med);
    data = data.medicalHistory.splice(0,0, med);
    this.props.actions.saveData(data)
    .then(load => {this.props.actions.loadDatas(); return load; })
    //.then(set => {this.setState({medicalHistory: this.props.medicalHistory});
    //return set; });

    //.then((redirect) => {this.context.router.push('/data/'+ id);
    //return redirect; });
  }

  render() {
    //debugger;
    return(

      <div>

      <manageTitle />

      <DataForm
        data={this.state.data}
        onChange={this.updateDataState}
        errors={this.state.errors}
        onSave={this.onSave}
        />
      <HistoryList medicalHistory={this.props.medicalHistory}
                med={this.state.med}
                onChange={this.updateMedState}
                addHistory={this.addHistory}
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
  actions: PropTypes.object.isRequired


};

ManageDataPage.contextTypes = {
  router: PropTypes.object
};


function getAllDatas() {
  DataApi.getAllDatas();
}

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
  med.date = String(getDateNumber());
  const dataId = ownProps.params.id;
  if (dataId && state.datas.length > 0) {
    //let dataS = getAllDatas().then(getDataById(datasS, data))
    data = getDataById(state.datas, dataId);
  }
  debugger;
  let medicalHistory;
  if (state.datas.length > 0) {
    medicalHistory =  data.medicalHistory;
  } else {
    medicalHistory = [];

  }

  return {
    data: data,
    datas: state.datas,
    medicalHistory: medicalHistory,
    med: med
    //datas: dataFormattedForDropdown
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
