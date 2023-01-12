import React from "react";
import pi, { doublePi, triplePi, SumNum} from '../math.js';

const Math = () => {
    return (
        <ul>
            <h2 className='pi'>Pi</h2>

            <li>{pi}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
            <li>{SumNum()}</li>
        </ul>
    );
}
    
export default Math;