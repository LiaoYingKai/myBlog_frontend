import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './reduxs'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Layout from './layout';
import './style.scss';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,
	composeEnhancers(
		applyMiddleware(logger, epicMiddleware)
	)
);

epicMiddleware.run(rootEpic);

function App() {
	return (
		<Provider store={store}>
			<Layout/>
		</Provider>
	);
}

ReactDOM.render(<App/>, document.getElementById('App'));
