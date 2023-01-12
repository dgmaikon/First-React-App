import React from "react";
import {yourname, year, img, greeting, customStyle} from '../copyright';

const Copyright = () => {
    return (
        <div>
            <div>
                <img alt='picsum' src={ img + "?grayscale"} />
                <img className='food-img' alt='' src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
                <img className='food-img' alt='' src='https://thumbs.dreamstime.com/b/junk-food-concept-unhealthy-food-background-fast-food-sugar-burger-sweets-chips-chocolate-donuts-soda-junk-food-concept-137097176.jpg' />   
                <img className='food-img' alt='' src='https://media.self.com/photos/622912847b959736301bfb91/4:3/w_2560%2Cc_limit/GettyImages-1301412050.jpg' />
            </div>

            <p className='heading' style={customStyle}>{greeting} {yourname}</p>
            <h1>Created by { yourname } </h1>
            <p>Copyright { year } </p>
        </div>
    );
}

export default Copyright;