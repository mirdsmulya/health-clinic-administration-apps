import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import CanvasJSChart from '../../../tools/canvasjs/canvasjs.react';
//var CanvasJSReact = require('../../../tools/canvasjs/canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Statistik Jumlah Pasien Tahun 2018"
			},
			axisY: {
				title: "Jumlah Pasien",
				includeZero: false,
				suffix: ""
			},
			axisX: {
				title: "Bulan",
				prefix: "Bulan ",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 }
				]
			}]
		}
		return (
		<div className="statsPadding">
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		//	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default StatsPage;
