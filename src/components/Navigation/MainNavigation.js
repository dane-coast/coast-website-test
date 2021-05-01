import React from 'react';
import { NavLink } from 'react-router-dom';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './MainNavigation.css';

const MainNavigation = props => (
    <header >
        <nav className="main-navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="main-navigation__logo">
                <NavLink exact to="/"><img src="./assets/CoastDiagnosticsLogo.png" alt="Coast Diagnostics" style={{maxHeight: "45px" ,maxWidth: "300px"}} /></NavLink>    
            </div>
            <div className="spacer" />
            <div className="main-navigation__items">
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
            </div>     
        </nav>
    </header>   
)

export default MainNavigation;
