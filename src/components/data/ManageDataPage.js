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
      error: {},
      med: Object.assign({}, this.props.med)
    };
    debugger;
    //let test = this.state.data;
    this.updateDataState = this.updateDataState.bind(this);
    this.onSave = this.onSave.bind(this);
    this.addHistory = this.addHistory.bind(this);
    this.updateMedState = this.updateMedState.bind(this);
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
    let data = Object.assign({}, this.state.data);
    DataApi.saveData(data)
    .then((redirect) => {this.context.router.push('/data');
    return redirect; });

    debugger;
    //this.setState({data: DataApi.saveData(data)});

  }

  addHistory(event) {
    let id = this.props.params.id;
    event.preventDefault();
    let data = Object.assign({}, this.state.data);
    let med = Object.assign({}, this.state.med);

    DataApi.addHistory(data, med)
    .then((redirect) => {this.context.router.push('/data'+ id)});
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
  med: PropTypes.object.isRequired


};

ManageDataPage.contextTypes = {
  router: PropTypes.object
};

function getDataById(datas, id) {
  const data = datas.filter(data => data.id == id);
  if (data) return data[0];
  return null;

}

function mapStateToProps(state, ownProps) {

  let data = {id:'',name:'', gender:'', age:'', address:'', medicalHistory:[]};
  //let dataMed = data.medicalHistory;
  let med = {date:'', diagnose:'', therapy:''};

  const dataId = ownProps.params.id;
  //const datas = DataApi.getAllDatas().then(k => getDataById(datas, dataId));
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


//<HistoryListInput data = {this.state.data} onChange={this.updateDataState}/>
