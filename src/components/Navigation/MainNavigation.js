import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/CoastDiagnosticsLogo.png';

import {connect} from 'react-redux'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './MainNavigation.css';

const MainNavigation = props => (
    <header >
        <nav className="main-navigation">
            <div className="main-navigation__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="main-navigation__logo">
                <NavLink exact to="/"><img src={logo} alt="Coast Diagnostics" style={{maxHeight: "45px" ,maxWidth: "300px"}} /></NavLink>    
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
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>     
        </nav>
    </header>   
)

MainNavigation.defaultProps = {
  currentUser: null
}

const mapStateToProps = ({ user })=> ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(MainNavigation);
