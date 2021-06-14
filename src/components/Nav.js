import React from 'react';
import {Link} from 'route-reactor-dom';

export default function Nav(props) {
    return(
        <div>
            <Link id ='home' to='/'>Home</Link>
            <Link id='order-pizza' to='/pizz'>Order Here</Link>
        </div>
    )
}
