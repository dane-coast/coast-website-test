import React from 'react';
import './Footer.css'

const footer = () => (
    <div>
        <footer>
            <div className="container">
            <div className="flex-container">
                <div className="contact">
                    <a href="/contact"><strong>Contact Us</strong><br /></a>
                    <div className="tabbed">
                        4674 Airport Blvd, Suite C<br />
                        Mobile, AL  36608<br />
                        <b>Phone:</b> <a href="tel:251-459-8405">251-459-8405</a><br />
                        <b>Fax:</b> <a href="fax:251-316-3574">251-316-3574</a><br />
                        <a href="mailto: info@coastdiagnostics.com">info@coastdiagnostics.com</a>
                    </div>
                {/* <a href="contact.html" title="Email Coast Diagnostics">info@coastdiagnostics.com</a> */}
                </div>
                <div className="services">
                <strong>Customer Service</strong><br />
                    <div className="tabbed">
                        <a href="/contact" title="Contact Coast Diagnostics">Contact Us</a><br />
                        <a href="https://coastdiagnostics.com/information/ordering-and-payment" title="Ordering &amp; Payment">Ordering &amp; Payment</a>

                    </div>
                </div>
                <div className="information">
                    <strong>Information</strong><br />
                    <div className="tabbed">
                        <a href="https://coastdiagnostics.com/information/privacy-policy" title="Privacy Policy">Privacy Policy</a><br />
                        <a href="https://coastdiagnostics.com/information/terms-of-service" title="Terms Of Service">Terms Of Service</a><br />
                        <a href="https://coastdiagnostics.com/information/non-discrimination-notice" title="Non-Discrimination Notice">Non-Discrimination Notice</a><br />

                    </div>
                </div>
                <div className="small-spacer"></div>
                
            </div>
            <div className="copyright" style={{width:"100%",textAlign:"left", fontSize:".7rem"}}>
                © Coast Diagnostics - 2020.  All rights reserved.
            </div>
            </div>
        </footer>
    </div>
);

export default footer;