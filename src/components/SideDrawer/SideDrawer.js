import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideDrawer.css'

const SideDrawer = (props) => {
    let drawerClasses = [
        'side-drawer'
    ]
    if (props.show){
        drawerClasses = ['side-drawer', 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/lab-services">Lab Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                        <NavLink to="/login">Login</NavLink>
                </li>
                <li className="spacer"></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
