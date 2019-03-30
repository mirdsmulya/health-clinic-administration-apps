import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import CanvasJSChart from '../../../tools/canvasjs/canvasjs.react';
import * as statsAction from '../../actions/statsAction';
import SelectInput from '../common/SelectInput';
import StatsFilter from './StatsFilter';
//var CanvasJSReact = require('../../../tools/canvasjs/canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stat: Object.assign({}, this.props.stat),
      yearPicked: Object.assign({}, this.props.yearPicked)
    };
    debugger;
    this.updateFilterState = this.updateFilterState.bind(this);
  }



  /**
  componentWillMount() {
    //this.props.actions.loadStatsData();
  }
  **/

  updateFilterState(event) {
    debugger;
    const value = event.target.value;
    this.setState({yearPicked: value});
    //let yearPicked = Object.assign({}, this.state.yearPicked);
    //let stats = yearFilter(this.props.stats, yearPicked);
    //this.setState({stat: stats});



    //this.props.actions.loadSpecificStats(field);
  }

  render() {
    let year = this.state.yearPicked;
    debugger;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
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
        dataPoints: this.state.stat.data

      /**
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
        **/
			}]
		};
		return (
    <div>
		<div className="statsPadding">
      <StatsFilter
        stats={this.state.yearPicked}
        onChange={this.updateFilterState}/>

			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		//	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

    </div>
		);
	}
}
//export default StatsPage;

StatsPage.propTypes = {
  actions: React.PropTypes.func,
  stats: React.PropTypes.object
};

export function yearFilter(stats, yearPicked) {
  debugger;
  let result;
  if (stats) {
    result = stats.find( data => data.year == yearPicked );
    return result;
  }
}

export function mapStateToProps(state, ownProps) {
  debugger;
  let initialYearPicked = 2017;
  let yearPicked;
  let stat = yearFilter(state.stats, initialYearPicked);
  //stat = stat.data;
  debugger;

  return {
    stat: stat,
    stats : state.stats,
    yearPicked: initialYearPicked
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(statsAction, dispatch)
    //action:bindActionCreators(statAction, dispatch)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
