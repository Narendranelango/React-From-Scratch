import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CForms from './Controlledforms';
import Calculator from './calculator';
import Todo from './todo';
import './App.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
