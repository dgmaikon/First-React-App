import React from 'react';
import ReactDOM from 'react-dom/client';

//default import
import fname from './name.js';

import pi, { triplePi, doublePi } from './math.js';

//global import
import * as calc from './calculator.js';
import * as copy from './copyright.js';


/* import {add, subtract, multiply, divide}; */ //import function by function

const root = ReactDOM.createRoot(document.getElementById('root'));
const names = ReactDOM.createRoot(document.getElementById('names'));
const math = ReactDOM.createRoot(document.getElementById('math'));
const copyright = ReactDOM.createRoot(document.getElementById('copyright'));

root.render(
  <ul>
    <h2>Numbers</h2>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

names.render(
  <div>
    <h1>Hello {fname}</h1>
    <p>Your Luck number is {Math.floor(Math.random() * 10)}</p>
  </div>
);

math.render(
  <ul>
 <h2>Pi</h2>
  <li>{pi}</li>
  <li>{doublePi()}</li>
  <li>{triplePi()}</li>
 </ul>,
 document.getElementById("math")
 );

 copyright.render(
  <div>
    <h1>Created by { copy.yourname }</h1>
    <p>Copyright { copy.year }</p>

    <div>
      <img alt='picsum' src={ copy.img + "?grayscale"} />
      <img className='food-img' alt='' src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
      <img className='food-img' alt='' src='https://thumbs.dreamstime.com/b/junk-food-concept-unhealthy-food-background-fast-food-sugar-burger-sweets-chips-chocolate-donuts-soda-junk-food-concept-137097176.jpg' />   
      <img className='food-img' alt='' src='https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg' />
    </div>

  </div>,
  document.getElementById("copyright")
);