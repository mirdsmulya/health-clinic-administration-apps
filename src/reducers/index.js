import { combineReducers } from 'redux';
import datas from './dataReducer';
import antrian from './antrianReducer';
import stats from './statsReducer';

debugger;
const rootReducer = combineReducers({
  datas,
  antrian,
  stats
});


export default rootReducer;
