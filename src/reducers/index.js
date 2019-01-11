import { combineReducers } from 'redux';
import datas from './dataReducer';
import antrian from './antrianReducer';

const rootReducer = combineReducers({
  datas
  ,antrian
});

export default rootReducer;
