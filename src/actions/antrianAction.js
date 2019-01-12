import AntrianApi from '../api/mockAntrianApi';
import * as types from './actionTypes';
import DataApi from '../api/mockDataPropApi';


export function loadAntrianSuccess(antrian) {
  return { type: types.LOAD_ANTRIAN_SUCCESS, antrian};
}
export function addAntrianSuccess(data) {
  return { type: types.ADD_ANTRIAN_SUCCESS, data };
}
export function deleteAntrianSuccess(data) {
  return { type: types.LOAD_ANTRIAN_SUCCESS, data };
}


export function loadAntrian() {
  return function(dispatch) {
    debugger;
    return AntrianApi.getAllAntrian().then(antrian => {
    //return DataApi.getAllDatas().then(datas => {
      dispatch(loadAntrianSuccess(antrian));
    }).catch(error => {
      throw(error);
    });
  };

}

export function addAntrian(data) {
  return function(dispatch) {
    return AntrianApi.saveAntrian(data).then(data => {
      dispatch(addAntrianSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}
