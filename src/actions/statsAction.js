import StatsApi from '../api/mockStatsApi';
import * as types from './actionTypes';


export function loadStatsData(stats) {
  return { type: types.LOAD_STATS_DATA, stats};
}
export function loadSpecificStatsData(stats) {
  return { type: types.LOAD_SPECIFIC_DATA_STATS, stats };
}

export function loadStats() {
  return function(dispatch) {
    return StatsApi.getAllStats().then(stats => {
      dispatch(loadStatsData(stats));
      debugger;
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSpecificStats(year) {
  return function(dispatch) {
    return StatsApi.displayStats(year).then(stats => {
      dispatch(loadSpecificStatsData(stats));
    }).catch(error => {
      throw(error);
    });
  };
}
