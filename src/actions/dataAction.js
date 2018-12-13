import dataApi from '../api/mockDataPropApi';
import * as types from './actionTypes';

export function loadDataSuccess(datas) {
  return { type: types.LOAD_DATA_SUCCESS, datas};
}
export function loadDatas() {
  return function(dispatch) {
    return dataApi.getAllDatas().then(datas => {
      dispatch(loadDataSuccess(datas));
    }).catch(error => {
      throw(error);
    });
  };

}
