import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'Welcome My memo';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

module.hot.accept();