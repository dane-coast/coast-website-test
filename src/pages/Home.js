import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import clia from '../assets/clia.jpg';
import cola from '../assets/cola.jpg';
import testingInAction from '../assets/testingInAction.jpg';


class HomePage extends Component {
    render() {
        return(
            <React.Fragment>
                <Hero currentPage={this.props.location}/>
                  <main role="main">
                    <section className="homeIntro">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-half">
                                    
                                    <p></p><p><strong>Coast Diagnostics</strong> is a <strong>COLA</strong> and <strong>CLIA-licensed</strong> full-service laboratory that ranks as the premier provider of comprehensive lab services in the Southeast. Based in Mobile, Alabama, Coast Diagnostics offers industry-leading quality, reliability, and accuracy in its lab services. <br /><br />Specialties include COVID-19 testing, Hematology, Coagulation, Chemistry, Urinalysis, Microbiology, Pathology, and Next Generation Sequencing. Coast Diagnostics uses state of the art platforms that allow Coast to stay on the cutting edge testing services focused on preventative diagnostic laboratory services for patients and providers.</p><p></p>
                                </div>
                                <div className="column">
                                    <img src={testingInAction} className="introImage" alt="Industry Leading Quality And Service" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="homeCerts">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-half" style={{textAlign:"right"}}>
                                    <img src={clia} alt="CLIA Certified" />
                                </div>
                                <div className="column" style={{textAlign:"center"}}>
                                    <img src={cola}alt="COLA Accredited" />
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    <div className="triangle">
                        <h2 className="triangle">Robust Capability</h2>
                    </div>
                    <div className="container">
                        <p>Coast offers an extended test menu of both <strong>routine and cutting edge testing</strong>. Coast uses advanced information technology for producing research and delivering results. At our core, we believe in working closely with healthcare providers in our region and offer a dedicated team of specialists who share our <strong>"community first" values</strong> in providing our services to you. <br /></p>

                    </div>
                    <div className="QIA">
                        <h2>Instant Scheduling.  Quick Turnarounds.  Accurate Results.</h2>
                    </div>
                    <div className="container mission">
                        <h2>Our Mission.  Our Promise.</h2>
                        <p>We work to ensure the <strong>utmost convenience in diagnostic testing</strong> by providing instant scheduling for your convenience, expedited turnarounds, and ensuring the most accurate test results possible. We exist to provide this <strong>world-class service to our community</strong> and our core values align with making sure everyone has access to affordable AND highly accurate diagnostic testing.<br /></p>

                    </div>
                </main>
                    
            </React.Fragment>
      
                    
        );

    }
}

export default HomePage;