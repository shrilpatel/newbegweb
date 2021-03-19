import React, { Component,} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Jumbotron} from 'react-bootstrap';
import {HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Mentorship} from './components/Mentorship';
import {Resources} from './components/Resources';
import {Employment} from './components/Employment';
import {MobileApp} from './components/MobileApp';
import {SignIn} from './components/SignIn';
import {Home} from './components/Home';
import { NavigationBar } from './components/NavigationBar';
import { Helmet } from 'react-helmet';
import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
      <div>
        <Helmet>
          <title> New Beginnings </title>
        </Helmet>
      </div>
      <Jumbotron fluid className = "jumbo-main"/>
      
      <NavigationBar/>
      <div className = "space20"></div>
      <Container fluid className = 'container'>
        <Router>

         <Route path = "/" exact component = {Home} />
         <Route path = "/mentorship" exact component = {Mentorship} />
         <Route path = "/resources" exact component = {Resources} />
         <Route path = "/employment" exact component = {Employment} />
         <Route path = "/mobileapp" exact component = {MobileApp} />
         <Route path = "/signin" exact component = {SignIn} />
         
        </Router>
      </Container>

      </>
    );
  }
}

export default App;
