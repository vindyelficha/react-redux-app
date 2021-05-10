import React from 'react';
import {NavLink} from 'react-router-dom'

const SginedInLinks =() =>{
    return(
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink ligthen-1'>NN</NavLink></li>
        </ul>
    )
}

export default SginedInLinks;