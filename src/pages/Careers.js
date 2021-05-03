import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

class CareersPage extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                <h1>The Careers Page</h1>
            </React.Fragment>
        )}
}

export default CareersPage;