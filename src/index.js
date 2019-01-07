import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provider from './container/Provider';
import Consumer from './container/Consumer';


import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Consumer>        
        <App /> 
      </Consumer>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);