import * as type from '../actions/actionTypes';
import initialState from './initialState';


export default function antrianReducer(state= initialState.antrian, action) {
  switch (action.type) {
    case type.LOAD_ANTRIAN_SUCCESS:
      return action.antrian;
    case type.ADD_ANTRIAN_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.data)
      ];
    case type.ANTRIAN_WAS_ENDS:
      return [
        ...state.filter(data => data.id !== action.data.id),
        null
      ];
    case type.UPDATE_DATA_ANTRIAN:
      return action.antrian;
    case type.DELETE_ANTRIAN_SUCCESS:
      return action.antrian;


    default:
      return state;

  }
}
