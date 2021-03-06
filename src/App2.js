import React, { Component } from 'react';
// import ReactDOM from ‘react-dom’;
import { BrowserRouter, Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import './css/styles2.css';
import './css/bulma.css';
import './css/font.css';
import MainNavigation from './components/Navigation/MainNavigation';
import "@fontsource/metropolis";

import { setCurrentUser } from './redux/User/user.action'

import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import LabServicesPage from './pages/LabServices';
import NewsPage from './pages/News';
import CareersPage from './pages/Careers';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import Footer from './components/Footer/Footer';
import NewEntry from './pages/NewEntry';
import AddNewsBlog from './pages/addNewsBlog';
import Store from './pages/Store';
import Store2 from './pages/Store2'
import DashboardPage from './pages/Dashboard'

import './App2.css';
// import Hero from './components/Hero/Hero';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

// ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App2 /></Router>, document.getElementById('root'));  


class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    }
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    // can add more functionality here
    this.setState({ sideDrawerOpen: false });
  };

  sideLinkClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    const { currentUser } = this.props
    // let sideDrawer;
    let backdrop;
    // console.log(this.state.sideDrawerOpen)

    if (this.state.sideDrawerOpen) {
      // sideDrawer= <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className='the-root' style={{ height: "100%" }}>
        <BrowserRouter>
          <React.Fragment>
            <MainNavigation drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer click={this.sideLinkClickHandler} show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="coast-body">
              <div id="coast-body">
                <div className="vertical-flex">
                  <Switch>
                    <Redirect from='/coast-website-test/' to='/' />
                    <Redirect from='/home/' to='/' />
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about-us" component={AboutUsPage} />
                    <Route path="/careers" component={CareersPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/lab-services" component={LabServicesPage} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/login" component={AuthPage} />
                    <Route path="/editnews" component={NewEntry} />
                    <Route path="/addnews" component={AddNewsBlog} />
                    <Route path="/store" component={Store} />
                    <Route path='/store2' component={Store2} />
                    <Route path='/dashboard' component={DashboardPage} />
                  </Switch>
                </div>
                <div className="spacer"></div>
                {/* <Hero /> */}

                <Footer />
              </div>
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App2);
