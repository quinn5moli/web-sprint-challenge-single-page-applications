import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <Link id ='home' to='/'>Home</Link>
            <Link id='order-pizza' to='/pizza'>Order Here</Link>
        </div>
    )
}

export default Nav;