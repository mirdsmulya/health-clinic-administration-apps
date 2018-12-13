import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as dataAction from '../../actions/dataAction';

class ManageDataPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return(

    );
  }
}
ManageDataPage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    state: state

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default ManageDataPage(mapStateToProps, mapDispatchToProps)(ManageDataPage);
