import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import locationMap from '../assets/CoastTerritoriesMap.png';
import './News.css';

class AboutUsPage extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                <main role="main">
                    <div className="triangle" id="aboutTriangle1">
                        <h2 className="triangle">Industry Leading Reference &amp; Research Laboratory</h2>
                    </div>
                    <section className="aboutContent">
                        <div className="container">
                            <p>Coast Diagnostics is an industry-leading medical lab based in Mobile, Alabama. It delivers a full range of affordable, timely, and accurate diagnostic testing services, including COVID-19 Testing, Hematology, Coagulation, Blood Chemistry, Urinanalysis, Microbiology Testing, Pathology, and Next Generation Sequencing.<br /><br />Our software is easy to use and facilitates the testing and reporting process for physicians and clinics. With affordable pricing and a focus on accuracy, speed, and patient experience, Coast Diagnostics has become the medical lab partner of choice across the Southeast. <br /></p>
                            <br />
                            <div className="card" style={{opacity:"0.80"}}>
                                <header style={{backgroundColor:"#042464"}}>
                                    <p className="card-header-title is-centered" style={{color:"#fff", fontSize:"2rem", letterSpacing:"3px"}}>
                                        Coast Diagnostics Labs
                                    </p>
                                </header>
                                <div className="columns" style={{padding:"2.5rem"}}>
                                    <div className="column is-two-thirds has-text-centered">
                                        <div className="card-image">
                                            <figure className="image has-text-centered" style={{margin:"0 auto"}}>
                                                <img src={locationMap} alt="Territories &amp; Locations" style={{maxWidth:"726px"} } />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="column" style={{backgroundColor:"#efefef", marginLeft:"2rem"}}>
                                        <div className="card-content">
                                            <div className="content">

                                                <p className="title is-6" style={{color:"#042464"}}>LAB LOCATIONS</p>
                                                <ul>
                                                    <li>Mobile, AL</li>
                                                    <li>Baton Rouge, LA</li>
                                                    <li>New Orleans, LA</li>
                                                    <li>Jackson, MS</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
<div className="triangle" id="aboutTriangle3">
    <h2 className="triangle">Recent News</h2>
</div>
<div className="container newsListing">
            <article>
            <div className="blog">
                    <h3 className="postTitle">Coast Diagnostics in the News: COVID Antibody Testing</h3>
                    <span className="date">January 5th, 2021</span><br />
                <div className="blog-main">
                    <div className="post-summary"><p>COVID Antibody Testing is now available at Coast Diagnostics at 4674 Airport Boulevard, Suite C in Mobile, Alabama. Call <a href="tel:251-459-8405">251-459-8405</a></p></div>
                    <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                    <a className="button" href="https://coastdiagnostics.com/news/coast-diagnostics-in-the-news-covid-antibody-testing" title="Read More..." style={{backgroundColor:"#0059aa",color:"#fff", fontSize:".9rem"}}>Read More... </a>
                </div>
                            </div>

        </article>
</div>
    </main>
        
            </React.Fragment>
            );
    }
}

export default AboutUsPage;