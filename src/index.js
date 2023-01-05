import React from 'react';
import ReactDOM from 'react-dom/client';
import * as calc from './calculator.js';
import fname, {number} from './name.js';

/* import {add, subtract, multiply, divide}; */ //import function by function

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = ReactDOM.createRoot(document.getElementById('name'));

root.render(
  <ul>
    <h2>Pi</h2>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>
);

name.render(
  <div>
    <h1>Hello {fname}</h1>
    <p>Your Luck number is {number}</p>
  </div>,
  document.getElementById("name")
);