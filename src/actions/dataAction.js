import DataApi from '../api/mockDataPropApi';
import AntrianApi from '../api/mockAntrianApi';
import * as types from './actionTypes';

export function loadDataSuccess(datas) {
  return { type: types.LOAD_DATA_SUCCESS, datas};
}
export function updateDataSuccess(data) {
  return { type: types.UPDATE_DATA_SUCCESS, data};
}
export function createDataSuccess(data) {
  return { type: types.CREATE_DATA_SUCCESS, data};
}
export function addMedicalHistorySuccess(data) {
  return { type: types.ADD_MEDICAL_HIST_SUCCESS, data};
}
export function displaySearch(datas) {
  return { type: types.DISPLAYED_DATAS_HANDLER, datas};
}
export function updateAntrianData(data) {
  return { type: types.UPDATE_DATA_ANTRIAN, data};
}



export function loadDatas() {
  return function(dispatch) {
    return DataApi.getAllDatas().then(datas => {
      dispatch(loadDataSuccess(datas));
      debugger;
    }).catch(error => {
      throw(error);
    });
  };

}

export function saveData(data) {
  return function(dispatch) {
    debugger;
    return DataApi.saveData(data).then(savedData => {
      data.id ? dispatch(updateDataSuccess(savedData)) :
      dispatch(createDataSuccess(savedData));
    }),
      AntrianApi.antrianUpdate(data).then(antrianUpdated =>{
          dispatch(updateAntrianData(antrianUpdated));
    }).catch(error => {
      throw(error);
    });
  }

}

export function addHistory(data) {
  return function(dispatch) {
    return DataApi.saveData(data).then(addedData => {
      dispatch(addMedicalHistorySuccess(addedData));
      debugger;
    }).catch(error => {
      throw(error);
    });
  };

}

export function searchHandler(datas) {
  return function(dispatch) {
    return DataApi.displayedDatas(datas).then(displayed => {
      dispatch(displaySearch(displayed));

    }).catch(error => {
      throw(error);
    });
  };
}
