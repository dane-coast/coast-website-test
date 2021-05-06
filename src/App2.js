import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './css/styles2.css';
import './css/bulma.css';
import './css/font.css';
import MainNavigation from './components/Navigation/MainNavigation';

import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import LabServicesPage from './pages/LabServices';
import NewsPage from './pages/News';
import CareersPage from './pages/Careers';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import Footer from './components/Footer/Footer'

import './App2.css';
// import Hero from './components/Hero/Hero';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App2 extends React.Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    // can add more functionality here
    this.setState({sideDrawerOpen: false});
  };

  render() {
    // let sideDrawer;
    let backdrop;
    // console.log(this.state.sideDrawerOpen)

    if (this.state.sideDrawerOpen) {
      // sideDrawer= <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
        <div style={{height: "100%"}}>
          <BrowserRouter>
            <React.Fragment>
              <MainNavigation drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              <div className="coast-body">
                  <div id="coast-body">
                      {/* <Hero /> */}
                        <Switch>
                            <Redirect from='/coast-website-test/' to='/' />
                            <Route path="/" component={HomePage} exact/>
                            <Route path="/about-us" component={AboutUsPage} />
                            <Route path="/careers" component={CareersPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/lab-services" component={LabServicesPage} />
                            <Route path="/news" component={NewsPage} />
                            <Route path="/login" component={AuthPage} />
                        </Switch>
                        
                  </div>
                <Footer />
              </div>
            </React.Fragment>
          </BrowserRouter>
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

export default App2;
