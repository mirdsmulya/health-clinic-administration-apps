import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import {bindActionCreators} from 'redux';
import DataList from './DataList';
import DataSearch from './DataSearch';
//import DataApi from '../../api/mockDataPropApi';
//import {browserHistory} from 'react-router';
import DataApi from '../../api/mockDataPropApi';

class DataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			//datas: Object.assign({}, this.props.datas)
			datas: this.props.datas
		};
		debugger;
		this.onEntry = this.onEntry.bind(this);

	}

	componentWillMount() {
		DataApi.getAllDatas()
		.then((data)=> {this.setState({datas: data })});
		//this.setState({datas: DataApi.getAllDatas()})
	}

	dataRow(data, index) {
		return <div key={index}>{data.name}</div>;
	}

	onEntry(event) {
		event.preventDefault();
		//DataApi.entranceAdd(DataList(data));

	}
	render() {
		let datast = this.props.datas;
		let dt = this.state.datas;
		//const {datas} = this.props;
		debugger;
		return(
			<div>
			<h1>Data Pasien</h1>
			<Link to="datas" className="btn btn-primary btn-lg">Tambah</Link>
			<DataSearch />
			<DataList datas={this.state.datas} onEntry={this.onEntry} />
			</div>

		);
	}
}

DataPage.propTypes = {
	//dispatch: PropTypes.func.isRequired,
	//datas: PropTypes.array.isRequired,
	//createData: PropTypes.func.isRequired,
	actions: PropTypes.object.isRequired,
	datas: PropTypes.array.isRequired
 };


function mapStateToProps(state, ownProps) {
	//let datas = DataApi.getAllDatas();
	debugger;
	return {
		datas: state.datas
		//datas: datas
	};



}

function mapDispatchToProps(dispatch) {
	return {
		//createData: data => dispatch(dataAction.createData(data)),
		actions: bindActionCreators(dataAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
