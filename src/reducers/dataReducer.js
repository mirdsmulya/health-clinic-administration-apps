import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function dataReducer(state = initialState.datas, action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return action.datas;
      default:
        return state;
  }
}
