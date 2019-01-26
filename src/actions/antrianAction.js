import AntrianApi from '../api/mockAntrianApi';
import * as types from './actionTypes';
import DataApi from '../api/mockDataPropApi';


export function loadAntrianSuccess(antrian) {
  return { type: types.LOAD_ANTRIAN_SUCCESS, antrian};
}
export function addAntrianSuccess(data) {
  return { type: types.ADD_ANTRIAN_SUCCESS, data };
}
export function deleteAntrianSuccess(antrian) {
  return { type: types.DELETE_ANTRIAN_SUCCESS, antrian };
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
    return AntrianApi.saveAntrian(data).then(dataSaved => {
      dispatch(addAntrianSuccess(dataSaved));
    }).catch(error => {
      throw(error);
    });
  };
}

export function endAntrian(dataId) {
  return function(dispatch) {
    return AntrianApi.deleteAntrian(dataId).then(antrian => {
      dispatch(deleteAntrianSuccess(antrian));
    })
  }
}
