import React, {PropTypes} from 'react';
import DataList from '../data/DataList';
import AntrianList from './AntrianList';
import * as dataAction from '../../actions/dataAction';
import * as antrianAction from '../../actions/antrianAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

class AntrianPreload extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    this.props.onentry.endAntrian(this.props.id)
    .then((redirect) => {this.context.router.push('/antrian');
    toastr.success('Antrian Selesai');
    return redirect; });
    debugger;


    //this.props.actions.loadDatas();
    debugger;
    //this.props.onentry.loadAntrian();

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

AntrianPreload.propTypes = {
  antrian: PropTypes.array.isRequired,
  id: PropTypes.object,
  onentry: PropTypes.func

};

AntrianPreload.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let datas= state.datas;
  let antrian= state.antrian;
  let id = ownProps.params.id;
  //let data = getDataById(state.antrian, id)
  debugger;

	return {
		datas: state.datas,
		antrian: state.antrian,
    //data: data,
    id : id

	};

}


function mapDispatchToProps(dispatch) {
	return {

		actions: bindActionCreators(dataAction, dispatch),
		onentry: bindActionCreators(antrianAction, dispatch)

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AntrianPreload);
