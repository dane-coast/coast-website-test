import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideDrawer.css'

const SideDrawer = (props) => (
    <nav className="side-drawer">
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
        </ul>
    </nav>
)

export default SideDrawer;
