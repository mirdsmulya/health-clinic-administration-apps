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
      yearPicked: "2017",
      stats: Object.assign({}, this.props.stats),
      yearList: Object.assign([], this.props.yearList)
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

    const yearPicked = event.target.value;
    this.setState({yearPicked: yearPicked});
    let stats = Object.assign([], this.state.stats);
    let statResult = this.filterStats(yearPicked, stats);
    this.setState({stat: statResult});
    debugger;
  }

  filterStats(yearPicked, stats) {
    debugger;
    if (yearPicked) {
      let result = stats.find( data => data.year == yearPicked );
      return result;
    }
  }

  render() {
    let year = this.state.yearPicked;
    let years = this.state.yearList;
    let stat = this.state.stat;
    debugger;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Statistik Jumlah Pasien Tahun " + year
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


			}]
		};
		return (
		<div className="statsPadding">

      <StatsFilter
        value={this.state.yearPicked}
        onChange={this.updateFilterState}
        options = {this.state.yearList}
        />


			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		//	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

    </div>
		);
	}
}
//export default StatsPage;

StatsPage.propTypes = {
  actions: React.PropTypes.object,
  stats: React.PropTypes.array,
  stat: React.PropTypes.object,
  yearList: React.PropTypes.array
};

export function yearFilter(stats, yearPicked) {
  debugger;
  let result;
  if (stats) {
    result = stats.find( data => data.year == yearPicked );
    return result;
  }
}

export function createYearList(stats) {
  let result;
  let temp = [];
  result = stats.find(data => {
     temp.push({input: data.year});
  });
  debugger;
  return temp;

}

export function mapStateToProps(state, ownProps) {

  let initialYearPicked = 2017;
  let stat = yearFilter(state.stats, initialYearPicked);
  let yearList = createYearList(state.stats);
  //stat = stat.data;
  debugger;

  return {
    yearList: yearList,
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
