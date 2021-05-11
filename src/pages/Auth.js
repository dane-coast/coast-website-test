import React, { Component } from 'react';

import './Auth.css';
import AuthContext from '../context/auth-context';
import ModalContacts from '../components/Modal/ModalContacts'
import Backdrop from '../components/Backdrop/Backdrop';

class AuthPage extends Component {

    state = {
        isLogin: true,
        backdrop: false,
        showContacts: false,
        contacts: '',
        offset: 0
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }
    switchModeHandler = () => {
        this.setState(prevState => {
            return {
                isLogin: !prevState.isLogin
            };
        })
    }


    nextHandler = () => {
        let currentOffset = this.state.offset;
        const newOffset = currentOffset + 5;
        console.log(newOffset)
        this.setState({offset: newOffset},
            () => {this.showContactsHandler()});
        console.log(this.state.offset)

        this.setState({contacts: ''})
        
    }
    
    showContactsHandler = () => {
        this.setState({backdrop: true})
        this.setState({showContacts: true})
        console.log(this.state.offset)

        const requestBody = {
            query: `
            query {
                contacts(limit:5 offset:${this.state.offset}) {
                  name
                  email
                  message
                }
              }
                `
        };
        // 'https://mighty-coast-19334.herokuapp.com/graphql'
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if (res.status !== 200 && res.status !==210) {
                throw new Error('Failed')
            }
            return res.json();
        })
        .then(resData => {
            console.log('resData')
            console.log(resData);
            const contacts = resData.data.contacts
            this.setState({contacts: contacts, isLoading: false})
            console.log(this.state.contacts)
            // this.fetchTests();
        })
        .catch(err => {
            console.log(err)
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;
    
        if (email.trim().length === 0 || password.trim().length === 0){
            return;
        }

        let requestBody = {
            query: `
                query {
                    login(email:"${email}", password: "${password}" ) {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        };

        if (!this.state.isLogin) {
            requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email: "${email}", password: "${password}"}) {
                            _id
                            email
                        }
                    }
                `
            };
        }


        console.log(email, password);



        // use fetch to send data -> could also use axios or other
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status !== 200 && res.status !==21) {
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

        })
        .catch(err => {
            console.log(err)
        })
        // ...
    };

    backdropClickHandler = () => {
        // can add more functionality here
        this.setState({backdrop: false});
        this.setState({showContacts: false});
        this.setState({offset: 0})
        // this.setState({searchThis: ''});
      };
    


    render() {
        return (
        <div>
            {this.state.backdrop && <Backdrop click={this.backdropClickHandler} />}
            <div className="flex-container">
                <h2>{!this.state.isLogin ? 'Signup' : 'Login'}</h2>
                <div></div>
            </div>
            <form className="auth-form" onSubmit={this.submitHandler}>
                <div className="form-control">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" ref={this.emailEl} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={this.passwordEl}/>
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
                </div>
            </form>
            <div className='flex-container hide-later'>
                <div className='fake-button' onClick={this.showContactsHandler}>Show contacts</div>
                {this.state.showContacts && <ModalContacts title="a long title" contacts={this.state.contacts} onNext={this.nextHandler} />}
            </div>
        </div>
        )
    }
}

export default AuthPage;