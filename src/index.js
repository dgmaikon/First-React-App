import React from 'react';
import ReactDOM from 'react-dom/client';
import * as calc from './calculator.js';

/* import {add, subtract, multiply, divide}; */ //import function by function

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>
);