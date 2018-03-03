import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { testAction } from './actionCreators'
import storeData from './store'
import registerServiceWorker from './registerServiceWorker';

let store = storeData({});

store.dispatch(testAction('Success'));

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,document.getElementById('root'));
registerServiceWorker();
