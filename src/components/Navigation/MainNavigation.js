import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <NavLink exact to="/"><img src="./assets/CoastDiagnosticsLogo.png" alt="Coast Diagnostics" style={{maxHeight: "45px" ,maxWidth: "300px"}} /></NavLink>    
        </div>
        <nav className="main-navigation__items">
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
    </header>   
)

export default MainNavigation;
