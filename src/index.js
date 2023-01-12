import React from 'react';
import ReactDOM from 'react-dom/client';

//Default import
import App from './components/App';

//Import default and conditional
/* import pi, { triplePi, doublePi, SumNum } from './math.js'; */

//Import global
/* import * as calculator from './calculator.js'; */


/* import {add, subtract, multiply, divide}; */ //import function by function

//Const for render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>

    <App />

  </div>,
  document.getElementById("root")
);