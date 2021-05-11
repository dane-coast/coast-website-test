import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

import axios from "axios";

import './Contact.css'


class ContactPage extends Component {

    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: "",
          status: "Submit"
        };   
      } 

    handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
        this.setState({ name: event.target.value });
    } else if (field === "email") {
        this.setState({ email: event.target.value });
    } else if (field === "message") {
        this.setState({ message: event.target.value });
    }
    }

    handleSubmit(event) {
        event.preventDefault();  
        this.setState({ status: "Sending" });  
   
        console.log(this.state.email)

        const requestBody = {
        query: `
            mutation {
            sendContactMessage(contactInput: {name: "${this.state.name}", email: "${this.state.email}", message: "${this.state.message}"}){
                _id
                name
                email
                message
                }
            }
        `
            
        }   // http://localhost:8000/graphql
        fetch('https://mighty-coast-19334.herokuapp.com/graphql' , {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 && res.status !==210) {
                throw new Error('Failed')
            }
            return res.json();
        }).then(resData => {
            console.log(resData);
            // this.fetchEvents();
            this.setState({email: ''});
            this.setState({name: ''});
            this.setState({message: ''})
            return resData

        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        let buttonText = this.state.status;
    
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                <div className="flex-container">
                <h2>Contact Us</h2>
                <div></div>
                 </div>
                
                <form onSubmit={this.handleSubmit.bind(this)} method="POST" className='contact-form'>
                    <div className='form-control'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <div className='form-control'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <div className='form-control'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={this.state.message}
                        rows="4"
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                    </div>
                    <div className='form-actions'>
                        <button type="submit">{buttonText}</button>
                    </div>
                </form>      
            );

            </React.Fragment>
        )};
}

export default ContactPage;