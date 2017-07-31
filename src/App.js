import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import ShowDate from './components/ShowDate';

import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import SignInPage from './components/SignInPage';
import AddWorkDiv from './components/AddWorkDiv';
import Header from './components/Header';

class App extends Component {  

  render() {
    return (
      <div className="App">

        <div id="upper_line"></div>
        
        <Header />

        <div id="nav_bar">
          <ShowDate />
        </div>

        <div id="line"></div>

        <div id="screen">

          <div id="opacBox2">

            <div id="renderPage">

              <Router>
                <div>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/register" component={RegistrationPage} />
                  <Route path="/signin" component={SignInPage} />
                  <Route path="/home" component={AddWorkDiv} />
                </div>
              </Router>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;