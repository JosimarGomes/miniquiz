import React, { Component } from 'react';
import Routes from './configs/routes';
import { Provider } from 'react-redux';
import store from './configs/store';

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
		    <Routes/>
		</Provider>		
    );
  }
}