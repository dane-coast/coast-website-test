import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';

import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import LabServicesPage from './pages/LabServices';
import NewsPage from './pages/News';
import CareersPage from './pages/Careers';
import HomePage from './pages/Home';
import './App2.css';
import Hero from './components/Hero/Hero';


class App2 extends React.Component {
  render() {
    return (
          <BrowserRouter>
            <React.Fragment>
              <MainNavigation />
              <div className="coast-body">
                  <div id="coast-body">
                      <Hero />
                        <Switch>
                            <Route path="/" component={HomePage} exact/>
                            <Route path="/about-us" component={AboutUsPage} />
                            <Route path="/careers" component={CareersPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/lab-services" component={LabServicesPage} />
                            <Route path="/news" component={NewsPage} />
                        </Switch>
                  </div>
              
              </div>
            </React.Fragment>
            
          </BrowserRouter>
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
