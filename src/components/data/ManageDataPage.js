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


class ManageDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, this.props.data),
      //data: {},
      error: {}
    };
    let test = this.state.data;
    debugger;
    this.updateDataState = this.updateDataState.bind(this);
    this.manageTitle = this.manageTitle.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    let dataId = this.props.params.id;
    //this.setState({data: data});


    //this.setState({data: DataApi.getDataById(dataId)});
    debugger;
  }

  updateDataState(event) {
    const field = event.target.name;
    let data = Object.assign({}, this.state.data);
    data[field] = event.target.value;
    return this.setState({data: data});

  }
  onSave(event) {
    event.preventDefault();
    let data = Object.assign({}, this.state.data);
    DataApi.saveData(data);
    //this.setState({data: DataApi.saveData(data)});

  }



  manageTitle() {
    return <h1>Hai</h1>;

  }

  render() {

    debugger;

    return(

      <div>

      <manageTitle />

      <DataForm
        data={this.state.data}
        onChange={this.updateDataState}
        errors={this.state.errors}
        onSave={this.onSave}
        options={this.props.gender}
      />
    <HistoryList medicalHistory={this.props.medicalHistory}
                data={this.state.data}
                onChange={this.updateDataState}
                />

  </div>

    );

  }
}
ManageDataPage.propTypes = {
  data: PropTypes.object.isRequired,
  datas: PropTypes.array.isRequired,
  medicalHistory: PropTypes.object.isRequired


};

function getDataById(datas, id) {
  const data = datas.filter(data => data.id == id);
  debugger;
  if (data) return data[0];
  return null;

}

function mapStateToProps(state, ownProps) {

  let data = {id:'',name:'', gender:'', age:'', address:'', medicalHistory:[]};

  const dataId = ownProps.params.id;
  //const datas = DataApi.getAllDatas().then(k => getDataById(datas, dataId));
  let gender = ['Pria', 'Wanita'];
  if (dataId) {
    data = getDataById(state.datas, dataId);

  }

  let medicalHistory = data.medicalHistory;
  const dataFormattedForDropdown = state.datas.map(data => {
    return {
      value: data.id,
      text: data.firstName + " " + data.lastName
    };
  });

  return {
    data: data,
    datas: state.datas,
    medicalHistory: medicalHistory,
    gender: gender
    //datas: dataFormattedForDropdown

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dataAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageDataPage);


//<HistoryListInput data = {this.state.data} onChange={this.updateDataState}/>
