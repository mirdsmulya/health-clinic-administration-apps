import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';
import {bindActionCreators} from 'redux';
import DataList from './DataList';

class DataPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	dataRow(data, index) {
		return <div key={index}>{data.name}</div>;
	}

	render() {
		const {datas} = this.props;
		return(
			<div>
			<h1>Data Pasien</h1>
			<DataList datas={datas} />
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
	return {
		datas: state.datas
	};

}

function mapDispatchToProps(dispatch) {
	return {
		//createData: data => dispatch(dataAction.createData(data)),
		actions: bindActionCreators(dataAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
//export default DataPage;

/*
		this.state = {
			data: {name: ""}
		};
		this.ifDataChange = this.ifDataChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	ifDataChange(event) {
		const data = this.state.data;
		data.name = event.target.value;
		//alert({this.state.data.name});
		this.setState({data: data});
	}

	onClickSave() {
		//alert('Saving ${this.state.data.name}');
		//this.props.createData(this.state.data);
		this.props.actions.createData(this.state.data);

	}
*/



/*
<h2>Tambahkan Data</h2>
<input
	type="text"
	onChange={this.ifDataChange}
	value={this.state.data.name} />

<input
	type="submit"
	value="Save"
	onClick={this.onClickSave} />
</div>
*/
