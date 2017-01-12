import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import ProcessList from './ProcessList';
import processes from './redux/reducer';
import './index.css';

const store = createStore(processes);

ReactDOM.render(
  <Provider store={store}>
    <ProcessList />
  </Provider>,
  document.getElementById('root')
);
