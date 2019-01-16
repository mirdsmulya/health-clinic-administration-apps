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

class DataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			//datas: Object.assign({}, this.props.datas),
			datas: this.props.datas,
			logicButton: true
		};
		debugger;
		this.onEntry = this.onEntry.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
		const datasConstant = this.props.datas;

	}

	componentWillMount() {
		let dataId = this.props.id;
		let datas = this.props.datas;
		debugger;
		if (dataId) {
			let data = datas.filter(data => data.id == dataId);
			if (data) {
				debugger;
				this.props.onentry.addAntrian(data)
				.then((redirect) => {this.context.router.push('/antrian');
				return redirect; });
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.datas !== nextProps.datas) {
			this.setState({datas: Object.assign({}, nextProps.datas)});
		}
		debugger;
	}

	logicButton() {
		if (this.state.logicButton)
			return <button className="btn btn-info">Masukan Antrian</button>;
				return <button classNmae="btn btn-danger">Dalam Antrian</button>;
	}
	onEntry(event) {
		event.preventDefault();
		if (this.state.logicButton == true) {
			this.setState({logicButton: false});
		}
		else {
			this.setState({logicButton: true});
		}
		debugger;
	}

	searchHandler(event) {
		const dataS = this.props.datas;
		let searchState = event.target.value.toLowerCase(),
		displayedDatas = dataS.filter((data) => {
			let searchValue = data.name.toLowerCase();
			return searchValue.indexOf(searchState) !== -1;
		//	debugger;
	});
		this.setState({datas: displayedDatas});
		//this.props.actions.searchHandler(displayedDatas);
		debugger;
	}

	render() {

		let datast = this.props.datas; // for debugging purpose
		let dt = this.state.datas; // for debugging purpose
		let logicButtp = this.state.logicButton; // for debugging purpose
		//const {datas} = this.props;
		debugger;
		return(
			<div>
			<h1>Data Pasien</h1>
			<Link to="datas" className="btn btn-primary btn-lg">Tambah</Link>
			<DataSearch onChange={this.searchHandler} />
			<DataList datas={this.state.datas} onEntry={this.onEntry} logicButton={this.state.logicButton} />
			</div>

		);
	}
}

DataPage.propTypes = {
	actions: PropTypes.object.isRequired,
	datas: PropTypes.array.isRequired,
	onentry: PropTypes.object.isRequired,
	dataId: PropTypes.string,
	logicButton: PropTypes.func
 };



function mapStateToProps(state, ownProps) {
	const dataId = ownProps.params.id;
	const datas = state.datas;


	debugger;
	return {
		datas: state.datas,
		antrian: state.antrian,
		id: dataId
		//datas: datas
	};

}

function mapDispatchToProps(dispatch) {
	let logicButton = true;

	return {
		//createData: data => dispatch(dataAction.createData(data)),
		actions: bindActionCreators(dataAction, dispatch),
		onentry: bindActionCreators(antrianAction, dispatch)

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
