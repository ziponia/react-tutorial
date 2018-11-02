import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/App';
import { Provider } from 'react-redux';

import store from '../redux/store';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default Root;