import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

class AboutUsPage extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                <h1>The About Us Page</h1>           
            </React.Fragment>
            );
    }
}

export default AboutUsPage;