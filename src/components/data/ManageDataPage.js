import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import DataForm from './DataForm';
import HistoryList from './HistoryList';

class ManageDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Object.assign({}, this.props.data),
      error: {}
    };
    this.updateDataState = this.updateDataState.bind(this);
    this.manageTitle = this.manageTitle.bind(this);
  }

  updateDataState(event) {
    const field = event.target.name;
    let data = Object.assign({}, this.state.data);
    data[field] = event.target.value;
    return this.setState({data: data});

  }
  manageTitle() {
    return <h1>Hai</h1>;

  }

  render() {
    return(

      <div>
      <manageTitle />
      {this.manageTitle}
      <DataForm
        allDatas= {this.props.datas}
        data={this.state.data}
        onChange={this.updateDataState}
        errors={this.state.errors}
      />
    <HistoryList />
  </div>

    );
  }
}
ManageDataPage.propTypes = {
  data: PropTypes.object.isRequired,
  datas: PropTypes.array.isRequired

};

function mapStateToProps(state, ownProps) {
  let data = {id:'', age:'', address:'', lastArrived:'', medicalHistory:''};
  const dataFormattedForDropdown = state.datas.map(data => {
    return {
      value: data.id,
      text: data.firstName + " " + data.lastName
    };
  });

  return {
    data: data,
    datas: dataFormattedForDropdown

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dataAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageDataPage);
