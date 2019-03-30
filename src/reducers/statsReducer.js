import * as type from '../actions/actionTypes';
import initialState from './initialState';


debugger;
export default function statsReducer(state = initialState.stats, action) {
  switch (action.type) {
    case type.LOAD_STATS_DATA:
      return action.stats;
    case type.LOAD_SPECIFIC_DATA_STATS:
      return [
        ...state.filter(data => data.year == action.data.year),
        null
      ];
    default:
      return state;
  }
}
