import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore ,applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import myReducer from './myReducer/index';
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './saga/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware=createSagaMiddleware();
const store=createStore(
  myReducer,
  composeEnhancer(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
