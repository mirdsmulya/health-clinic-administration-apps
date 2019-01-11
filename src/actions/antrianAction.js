import AntrianApi from '../api/mockAntrianApi';
import * as types from './actionTypes';


export function loadAntrianSuccess(antrian) {
  return { type: types.LOAD_ANTRIAN_SUCCESS, antrian};
}
export function addAntrianSuccess(data) {
  return { type: types.ADD_ANTRIAN_SUCCESS, data };
}
export function deleteAntrianSuccess(data) {
  return { type: types.LOAD_ANTRIAN_SUCCESS, data };
}


export function loadDatas() {
  return function(dispatch) {
    return AntrianApi.getAllAntrian().then(antrian => {
      dispatch(loadAntrianSuccess(antrian))
    })
  }

}

export function addAntrian(data) {
  return function(dispatch) {
    return AntrianApi.saveAntrian(data).then(data => {
      dispatch(addAntrianSuccess(data))
    })
  }
}
