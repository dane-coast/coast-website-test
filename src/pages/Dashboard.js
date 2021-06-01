import React, { Component } from 'react';

import './Auth.css';
import AuthContext from '../context/auth-context';
import ModalContacts from '../components/Modal/ModalContacts'
import Backdrop from '../components/Backdrop/Backdrop';
import Spinner from '../components/Spinner/Spinner';
import CreateUser from '../components/CreateUser/CreateUser';

import { NavLink } from 'react-router-dom';


class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {

    return (
      <div className="dashboard">
        <h2>
          Dashboard
        </h2>
        <CreateUser />
      </div>
    )
  }
}

export default DashboardPage;