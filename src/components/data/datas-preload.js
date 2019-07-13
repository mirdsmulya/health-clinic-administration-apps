import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import * as antrianAction from '../../actions/antrianAction';
import {bindActionCreators} from 'redux';
import DataList from './DataList';
import DataSearch from './DataSearch';
//import DataApi from '../../api/mockDataPropApi';
//import {browserHistory} from 'react-router';
import DataApi from '../../api/mockDataPropApi';
import toastr from 'toastr';


class DatasPreload extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
			//datas: Object.assign({}, this.props.datas),
			datas: this.props.datas,
			logicButton: true,
			className: true
		};



    const datasConstant = this.props.datas;

  }

  componentWillMount() {
    if (this.props.result.length !== 0) {
      this.context.router.push('/data');
      toastr.warning('Data Pasien Sudah Terdaftar');
    } else {
      this.props.onentry.addAntrian(this.props.data)
      .then((redirect) => {this.context.router.push('/antrian');
      toastr.success('Data Berhasil Terdaftar');
      return redirect; });

    }

    debugger;

  }





  render() {
    return(
      <div>
      <h1>Data Pasien</h1>
      <Link to="datas" className="btn btn-primary btn-lg">Tambah</Link>
      <DataSearch onChange={this.searchHandler} />
      <DataList datas={this.state.datas}
                onEntry={null}
                logicButton={this.state.logicButton}
                className={this.className}
        />

      </div>


    );
  }



}

DatasPreload.propTypes = {
	actions: PropTypes.object.isRequired,
	datas: PropTypes.array.isRequired,
	onentry: PropTypes.object.isRequired,
	dataId: PropTypes.string,
	logicButton: PropTypes.func,
  data: PropTypes.object.isRequired,
  result: PropTypes.array
 };

 DatasPreload.contextTypes = {
   router: PropTypes.object
 };

 function getDataById(datas, id) {
   const data = datas.filter(data => data.id == id);
   data.status = !data.status;
   if (data) return data[0];
   debugger;
   return null;

 }

 function dataCheck(antrian, id) {
   debugger;
    let result = antrian.filter(data => data.id == id);
    if (result) return false;
    return true;

 }

function mapStateToProps(state, ownProps) {
	const id = ownProps.params.id;
  const datas = Object.assign([], state.datas);
  //const datas = state.datas;
  const antrian = state.antrian;
  //let data = datas.filter(data => data.id == dataId);
  let data = getDataById(datas, id);

  let result = antrian.filter(data => data.id == id);



	debugger;
	return {
		datas: state.datas,
		antrian: state.antrian,
		id: id,
    data: data,
    result: result

		//datas: datas
	};

}

function mapDispatchToProps(dispatch) {

	return {
		//createData: data => dispatch(dataAction.createData(data)),
		actions: bindActionCreators(dataAction, dispatch),
		onentry: bindActionCreators(antrianAction, dispatch)

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasPreload);
