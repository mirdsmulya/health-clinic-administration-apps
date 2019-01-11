import React, {PropTypes} from 'react';
import DataList from '../data/DataList';
import AntrianList from './AntrianList';
import * as dataAction from '../../actions/dataAction';
import * as antrianAction from '../../actions/antrianAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


class ListAntrian extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.onentry.loadDatas()

  }
  render() {
    return(
      <div>
        <h1> </h1>
        <h2>Daftar Antrian Pasien</h2>
        <AntrianList antrian={this.props.antrian}/>

      </div>

    );
  }
}

ListAntrian.propTypes = {
  antrian: PropTypes.array.isRequired

};


function mapStateToProps(state, ownProps) {
  let datas= state.datas;
  let antrian= state.antrian;
  debugger;

	return {
		datas: state.datas,
		antrian: state.antrian

	};

}


function mapDispatchToProps(dispatch) {
	return {

		actions: bindActionCreators(dataAction, dispatch),
		onentry: bindActionCreators(antrianAction, dispatch)

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAntrian);
