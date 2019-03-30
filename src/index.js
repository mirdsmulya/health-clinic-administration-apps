
import 'babel-polyfill';
import React from 'react';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadDatas} from './actions/dataAction';
import {loadAntrian} from './actions/antrianAction';
import {loadStats} from './actions/statsAction';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadDatas());
store.dispatch(loadAntrian());
store.dispatch(loadStats());



render(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>,
	document.getElementById('app')
);
