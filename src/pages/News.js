import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

import wlox from '../assets/wlox-thumbnail.jpg';
import testingInAction from '../assets/testingInAction.jpg';
import './News.css';

class NewsPage extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                <h1>The News Page</h1>
                <main role="main">
                    <div className="triangle" id="aboutTriangle1">
                        <h2 className="triangle">News &amp; Articles</h2>
                    </div>
                    <section id="news">
                        <div className="container">
                            <article>
                                <div className="blog">
                                    <h3 className="post-title">Coast Diagnostics in the News: COVID Antibody Testing</h3>
                                    <span className="date">January 5th, 2021</span><br />
                                        <div className="blog-main">
                                            <div className="post-summary">
                                                <p>COVID Antibody Testing is now available at Coast Diagnostics at 4674 Airport Boulevard, Suite C in Mobile, Alabama. Call <a href="tel:251-459-8405">251-459-8405</a>.<br /></p>
                                            </div>                                     
                                            <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                            <a className="button readmore" href="./news/covid-antibody-testing.html" title="Read More...">Read More...</a>

                                            
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="blog">             
                                    <h3 className="post-title">Labs Under Strain Of Large Covid Test Load</h3>
                                    <span className="date" >July 15th, 2020</span><br />
                                    <div className="blog-main">
                                        <div className="post-summary">
                                            <p>More tests means more work for the laboratories that process them. In Mobile, Coast Diagnostics processes coronavirus tests for about 35 South Mississippi clinics. Even with a 24-7 operation, they remain at their capacity.</p>
                                            <p>“There’s a demand right now that is higher than the supply,” said Coast Diagnostics CEO Brian Ward.</p>
                                            <p>Coast Diagnostics in Mobile processes between 2,500 and 3,500 COVID swab tests a day from clinics in four states. They have expanded their facility and hired 55 new people in the last two months, but the demand doesn’t decrease. It brings into question whether there should be better controls on who gets tested and when.<br /></p>
                                        </div>
                                        <div className='blog-extra'></div>
                                        <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                        <a className="button readmore" href="./news/under-strain.html" title="Read More...">Read More...</a>
                                   
                                        <img src={wlox}alt="WLOX Mobile, AL - July 15, 2020" className="newsFeatureImg" />
                                        <div className="spacer"></div>
                                    
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="blog">
                                        <h3 className="post-title">COVID-19 Testing Now Available From Coast Diagnostics</h3>
                                        <span className="date">June 23rd, 2020</span><br />
                                    <div className="blog-main">
                                        <div className="post-summary">
                                            <p>Coast Diagnostics is now offering lab testing for COVID-19 and COVID-19 anti-bodies. In this difficult time for public health as well as the health of individual patients, Coast Diagnostics is proud to bring its industry-leading standards of quality, accuracy, and timeliness to the COVID-19 testing sphere.<br /><br />Please contact us today about your COVID-19 testing needs.<br /></p>
                                        </div>
                                        <div className='blog-extra'></div>
                                        <div className="break"><p><br /></p></div>
                                            <div className="half-spacer"></div>
                                        <a className="button readmore" href="https://coastdiagnostics.com/news/covid-19-testing-now-available-from-coast-diagnostics" title="Read More...">Read More... <br /></a>
                                        <br />
                                        <img src={testingInAction}alt="Testing In Action" style={{float:"right"}} className="newsFeatureImg" />
                                        <div className="spacer"></div>
                                
                             
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )}
}

export default NewsPage;