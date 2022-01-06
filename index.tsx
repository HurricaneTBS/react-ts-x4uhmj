import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import store from './src/store';
import { Provider } from 'react-redux';
import Root from './src/components/root';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
