import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function dataReducer(state = initialState.datas, action) {
  debugger;
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return action.datas;
    case types.CREATE_DATA_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.data)
      ];
    case types.UPDATE_DATA_SUCCESS:
      return [
        ...state.filter(data => data.id !== action.data.id),
        Object.assign({}, action.data)
      ];
    case types.ADD_MEDICAL_HIST_SUCCESS:
      return [
        ...state.filter(data => data.id !== action.data.id),
        Object.assign({}, action.data)
      ];
    case types.DISPLAYED_DATAS_HANDLER:
      return action.datas;
      /*
      return [
        ...state.filter(data => data.id == action.data.id),
        null
      ]; */

    default:
      return state;
  }

}



/*

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS":
      return [...state,
          Object.assign({}, action.datas)
      ];
      default:
        return state;
  }
}
*/
