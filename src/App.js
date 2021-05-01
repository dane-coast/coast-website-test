import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="coastBody" className="has-navbar-fixed-top">
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
            <div id="topBar">
                <div className="columns">
                    <div className="column has-text-left">
                    </div>
                    <div className="column has-text-right">
                        <a className="button portalLogin" title="Account Enrollment" href="https://coastdiagnostics.com/clients/account-enrollment">Account Enrollment</a>
                        <a className="button portalLogin" title="Order Supplies" href="https://coastdiagnostics.com/clients/supply-request">Order Supplies</a>
                        <a className="button portalLogin" title="Partner Portal Login" href="https://coastorchard.netsmartcloud.com/" target="_blank">Partner Portal</a>
                        <a className="button portalLogin" title="Pay Invoice" href="https://portal.icheckgateway.com/CoastDiagnosticsLLC/Login.aspx" target="_blank">Pay Invoice</a>
                    </div>
                </div>
            </div>


            <div className="navbar-brand">
                <a className="navbar-item" href="https://coastdiagnostics.com/" title="Coast Diagnostics">
                  <img src="./assets/CoastDiagnosticsLogo.png" alt="Coast Diagnostics" style={{maxHeight: "80px" ,maxWidth: "300px"}} />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="MainMenu">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="MainMenu" className="navbar-menu">
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                  <a className="navbar-item coast-menu-item" href="about-us.html" title="About Coast Diagnostics">About</a>
                  <div className="has-dropdown is-hoverable navbar-item">
                    <a className="navbar-item navbar-link is-arrowless coast-menu-item" href="lab-services.html" title="Lab Services">Lab Services</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5507" title="COVID-19 Testing">COVID-19 Testing</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5497" title="Hematology">Hematology</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5490" title="Coagulation">Coagulation</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5500" title="Chemistry">Chemistry</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5503" title="Urinalysis">Urinalysis</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5512" title="Microbiology/Molecular">Microbiology/Molecular</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5515" title="Pathology">Pathology</a>
                        <a className="navbar-item coast-menu-item" href="lab-services.html#5518" title="Next Generation Sequencing">Next Generation Sequencing</a>
                    </div>
                  </div>
                  <a className="navbar-item coast-menu-item" href="news.html" title="News From Coast Diagnostics">News</a>
                  <a className="navbar-item coast-menu-item" href="https://coastdiagnostics.com/careers" title="Careers">Careers</a>
                  <a className="navbar-item coast-menu-item" href="contact.html" title="Contact Coast Diagnostics">Contact</a>
                </div>
            </div>

          </nav>
          <section className="hero">
            <div className="hero-body">
              <div className="container level">
                <div id="hero-content" className="level-item has-text-centered">
                  <h1 className="level-item has-text-centered">
                    Industry Leading Quality and Service
                  </h1>
                </div>
              </div>
              <video className="is-hidden-mobile" poster="" id="bgvid" playsInline="" autoPlay="" muted="" loop="">
                <source src="./assets/coast-diagnostics-hero.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
          <main role="main">
            <section className="homeIntro">
              <div className="container">
                <div className="columns">
                  <div className="column is-half">
                    <h2 className="introHeading">Industry Leading Quality And Service</h2>
                      <p></p>
                      <p>Coast Diagnostics is a COLA and CLIA-licensed full-service laboratory that ranks as the premier provider of comprehensive lab services in the Southeast. Based in Mobile, Alabama, Coast Diagnostics offers industry-leading quality, reliability, and accuracy in its lab services. 
                      <br />
                      <br />
                      Specialties include COVID-19 testing, Hematology, Coagulation, Chemistry, Urinalysis, Microbiology, Pathology, and Next Generation Sequencing. Coast Diagnostics uses state of the art platforms that allow Coast to stay on the cutting edge testing services focused on preventative diagnostic laboratory services for patients and providers.
                      </p>
                      <p></p>
                    </div>
                    <div className="column">
                        <img src="./assets/testingInAction.jpg" className="introImage" alt="Industry Leading Quality And Service" />
                    </div>
                </div>
              </div>
            </section>
            <section className="homeCerts">
              <div className="container">
                <div className="columns">
                  <div className="column is-half" style={{
                    textAlign: "right"}}>
                    <img src="./assets/clia.jpg" alt="CLIA Certified" />
                  </div>
                  <div className="column">
                    <img src="./assets/cola.jpg" alt="COLA Accredited" />
                  </div>
                </div>    
              </div>
            </section>
            <div className="triangle">
              <h2 className="triangle">Robust Capability</h2>
            </div>
            <div className="container">
                <p>Coast offers an extended test menu of both <strong>routine and cutting edge testing</strong>. Coast uses advanced information technology for producing research and delivering results. At our core, we believe in working closely with healthcare providers in our region and offer a dedicated team of specialists who share our <strong>"community first" values</strong> in providing our services to you. <br />
                </p>
            </div>
            <div className="QIA">
                <h2>Instant Scheduling.  Quick Turnarounds.  Accurate Results.</h2>
            </div>
            <div className="container mission">
                <h2>Our Mission.  Our Promise.</h2>
                <p>We work to ensure the <strong>utmost convenience in diagnostic testing</strong> by providing instant scheduling for your convenience, expedited turnarounds, and ensuring the most accurate test results possible. We exist to provide this <strong>world-class service to our community</strong> and our core values align with making sure everyone has access to affordable AND highly accurate diagnostic testing.<br />
                </p>

            </div>
          </main>
      <footer>
        <div className="container">
          <div className="columns">
            <div className="column">
              <strong>Contact Us</strong><br />
              4674 Airport Blvd, Suite C<br />
              Mobile, AL  36608<br />
              <b>Phone:</b> 251-459-8405<br />
              <b>Fax:</b> 251-316-3574<br />
              <a href="contact.html" title="Email Coast Diagnostics">info@coastdiagnostics.com</a>
            </div>
            <div className="column">
              <strong>Customer Service</strong><br />
              <a href="contact.html" title="Contact Coast Diagnostics">Contact Us</a><br />
              <a href="https://coastdiagnostics.com/information/ordering-and-payment" title="Ordering &amp; Payment">Ordering &amp; Payment</a>
            </div>
            <div className="column">
              <strong>Information</strong><br />
              <a href="https://coastdiagnostics.com/information/privacy-policy" title="Privacy Policy">Privacy Policy</a><br />
              <a href="https://coastdiagnostics.com/information/terms-of-service" title="Terms Of Service">Terms Of Service</a><br />
              <a href="https://coastdiagnostics.com/information/non-discrimination-notice" title="Non-Discrimination Notice">Non-Discrimination Notice</a><br />
            </div>
            <div className="column">            
            </div>
          </div>
          <div className="copyright" style={{width:"100%",textAlign: "left", fontSize:".7rem"}} >
            © Coast Diagnostics - 2020.  All rights reserved.
          </div>
        </div>
      </footer>
    </div>
    <script type="text/javascript"> 
        
    </script>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
