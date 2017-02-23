import React from 'react';
import ReactDOM from 'react-dom';
import AContainer from './containers/AContainer';

// Get Random Users //
import { getUsers } from './utils/randomUserApi.js'
getUsers().then(userData => {

  ReactDOM.render(
    <div></div>,
    document.getElementById('root')
  );

}).catch(error => {
  console.error(error.stack)
});
