import React, {PropTypes} from 'react';
import {Route, Link} from 'react-router';
import { connect } from 'react-redux';
import * as dataAction from '../../actions/dataAction';

class DataPage extends React.Component {
	constructor(props, context) {
		super(props, context);

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
		alert('Saving ${this.state.data.name}');
		this.props.dispatch(dataAction.createData(this.state.data));

	}

	dataRow(data, index) {
		return <div key={index}>{data.name}</div>;
	}

	//{this.props.data.map(this.dataRow)}
	render() {
		return(
			<div>
			<h1>Data Pasien</h1>
			<h2>Nama Pasien</h2>
			{this.props.datas.map(this.dataRow)}
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

			);
	}
}

DataPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	datas: PropTypes.array.isRequired

};

function mapStateToProps(state, ownProps) {
	return {
		datas: state.datas
	};

}


export default connect(mapStateToProps)(DataPage);
//export default DataPage;
