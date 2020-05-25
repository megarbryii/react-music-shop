import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-wrapper'>
            <div className='nav-link-wrapper'>
                <NavLink exact to='/' activeClassName='page-active'>Home</NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/music' activeClassName='page-active'>Music</NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/shop' activeClassName='page-active'>Shop</NavLink>
            </div>

            <div className='nav-link-wrapper'>
                <NavLink exact to='/about' activeClassName='page-active'>About</NavLink>
            </div>
        </div>
    )
}

export default NavBar;