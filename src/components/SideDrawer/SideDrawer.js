import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './SideDrawer.css'

const SideDrawer = (props) => {
    // let drawerClasses = [
    //     'side-drawer'
    // ]
    // if (props.show){
    //     drawerClasses = ['side-drawer', 'open']
    // }
    
    const loadSideDrawer = () => {
        console.log(props)
        if (props.show){
            return ['side-drawer', 'open']
        }
        else {
            return ['side-drawer']
        }

    }

    const updateSideDrawer = () => {
        setDrawerClasses(['side-drawer'])
    }
    

    const [drawerClasses, setDrawerClasses] = useState(loadSideDrawer());




    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li onClick={updateSideDrawer}>
                    <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li onClick={updateSideDrawer}>
                    <NavLink to="/lab-services">Lab Services</NavLink>
                </li>
                <li onClick={updateSideDrawer}>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li onClick={updateSideDrawer}>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li onClick={updateSideDrawer}>
                    <NavLink to="/careers">Careers</NavLink>
                </li>
                <li onClick={updateSideDrawer}>
                        <NavLink to="/login">Login</NavLink>
                </li>
                <li className="spacer"></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
