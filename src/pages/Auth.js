import React, { Component } from 'react';

import './Auth.css';
import AuthContext from '../context/auth-context';
import ModalContacts from '../components/Modal/ModalContacts'
import Backdrop from '../components/Backdrop/Backdrop';
import Spinner from '../components/Spinner/Spinner';

import { NavLink } from 'react-router-dom';

const { REACT_APP_BACKEND_LINK } = process.env

class AuthPage extends Component {

  // state = {
  //   isLogin: true,
  //   backdrop: false,
  //   showContacts: false,
  //   contacts: '',
  //   offset: 0,
  //   isLoading: false,
  //   userName: '',
  //   passWord: ''
  // };

  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      isLogin: true,
      backdrop: false,
      showContacts: false,
      contacts: '',
      offset: 0,
      isLoading: false,
    };
  }
  switchModeHandler = () => {
    this.setState(prevState => {
      return {
        isLogin: !prevState.isLogin
      };
    })
  }

  handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    // console.log(e.target)
    console.log(name)
    this.setState({ [name]: value });
    console.log(this.state[name])

  };

  nextHandler = () => {
    let currentOffset = this.state.offset;
    const newOffset = currentOffset + 5;
    console.log(newOffset)
    this.setState({
      offset: newOffset,
      backdrop: false,
      showContacts: false
    },
      () => {

        this.showContactsHandler()
      });
    console.log(this.state.offset)

    this.setState({ contacts: '' })

  }

  showContactsHandler = () => {
    console.log(this.state.offset)
    this.setState({ isLoading: true })


    const requestBody = {
      query: `
            query {
                contacts(limit:5 offset:${this.state.offset}) {
                  name
                  message
                  _id
                  createdAt
                }
              }
                `
    };
    // 'https://mighty-coast-19334.herokuapp.com/graphql'
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 210) {
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log('resData')
        console.log(resData);
        const contacts = resData.data.contacts
        this.setState({ contacts: contacts, isLoading: false })
        this.setState({ backdrop: true })
        this.setState({ showContacts: true })
        console.log(this.state.contacts)
        // this.fetchTests();
      })
      .catch(err => {
        console.log(err)
      })
  }

  submitHandler = async (event) => {
    event.preventDefault();
    const { userName, password } = this.state;

    if (userName.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
                query {
                    login(userName:"${userName}", password: "${password}" ) {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
    };
    console.log(this.state.isLogin)
    console.log(userName)
    if (!this.state.isLogin) {
      requestBody = {
        query: `
                    mutation {
                        createUser(userInput: {userName: "${userName}", password: "${password}"}) {
                            _id
                            userName
                        }
                    }
                `
      };
    }


    // console.log(userName, password);



    // use fetch to send data -> could also use axios or other
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 21) {
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        // if(this.state.isLogin) { ....or ->
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          )

        }
        this.userNameEl.current.value = ''

      })
      .catch(err => {
        console.log(err)
      })
    this.setState({ userName: '', password: '' })
    // ...
  };

  backdropClickHandler = () => {
    // can add more functionality here
    this.setState({ backdrop: false });
    this.setState({ showContacts: false });
    this.setState({ offset: 0 })
    // this.setState({searchThis: ''});
  };



  render() {
    const { userName, password } = this.state
    return (
      <div>
        {this.state.backdrop && <Backdrop click={this.backdropClickHandler} />}
        <div className="flex-container">
          <h2>{!this.state.isLogin ? 'Signup' : 'Login'}</h2>
          <div></div>
        </div>
        <form className="auth-form" onSubmit={this.submitHandler}>
          <div className="form-control">
            <label htmlFor="userName">User Name</label>
            <input type="userName" id="userName" value={userName} onChange={this.handleChange} label='UserName' name='userName' required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={this.handleChange} name='password' label='Password' required />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
          </div>
        </form>
        {this.state.isLoading && <Spinner />}
        <div className='flex-container hide-later'>
          <div className='fake-button' onClick={this.showContactsHandler}>Show contacts</div>
          {this.state.showContacts && <ModalContacts title="a long title" contacts={this.state.contacts} onNext={this.nextHandler} loading={this.state.isLoading} />}
        </div>
        <ul>
          <li>
            <NavLink to="/addnews">Add news blog</NavLink>
          </li>
          <li>
            <NavLink to="/editnews">Edit news page</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store page</NavLink>
          </li>
          <li>
            <NavLink to="/store2">Store2 page</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default AuthPage;