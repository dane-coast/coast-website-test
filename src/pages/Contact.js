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
        const msg = {
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
        }

        const requestBody = {
        query: `
            mutation {
            sendContactMessage(contactInput: {name:"${msg.name}", email:"${msg.email}", message: "${msg.message}"}){
                _id
                name
                email
                message
                }
            }
        `
            
        }
        fetch('https://mighty-coast-19334.herokuapp.com/graphql' , {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.data.status === "sent") {
            alert("Message Sent");
            this.setState({ name: "", email: "", message: "", status: "Submit" });
            } else if (response.data.status === "failed") {
            alert("Message Failed");
            }
        });
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