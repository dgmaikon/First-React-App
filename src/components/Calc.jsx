import React from "react";
import * as calculator from '../calculator.js';

 const Calc = () => {
    return (
            <ul>
                <h2 className="calc">Calculator</h2>

                <li>{calculator.add(1, 2)}</li>
                <li>{calculator.multiply(2, 3)}</li>
                <li>{calculator.subtract(7, 2)}</li>
                <li>{calculator.divide(5, 2)}</li>
            </ul>
    );
}

export default Calc;