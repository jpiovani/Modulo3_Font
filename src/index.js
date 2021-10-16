import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controller from './Controller/Controller'
import * as serviceWorker from './serviceWorker';
//Importa o store
import store from './Modulo/store';
//Importa o Provider do React Redux
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* Adicionar o Provider com o store importado*/}
    <Provider store={store}>
      <Controller />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();