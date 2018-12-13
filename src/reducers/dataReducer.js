import * as types from '../actions/actionTypes';


export default function dataReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return action.datas;
      default:
        return state;
  }
}
