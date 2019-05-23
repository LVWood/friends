import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <div className="header-wrapper">
            <div className="nav-menu">
                <NavLink className="nav-item" exact to="/">Home</NavLink>
                <NavLink className="nav-item" to="/friend-form">Add A Friend</NavLink>
                <NavLink className="nav-item" to="/friend-list">View Friends</NavLink>
            </div>
        </div>
        
    )
}

export default NavBar;