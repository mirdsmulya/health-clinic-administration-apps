import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import DataPage from './components/data/DataPage';
import ManageDataPage from './components/data/ManageDataPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />
		<Route path="data" component={DataPage} />

	</Route>
);

//<Route path="manageData" path="data/:id" component={ManageDataPage} />
