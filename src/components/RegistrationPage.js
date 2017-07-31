import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import InputComponent from './InputComponent';

import {firebaseApp} from '../firebase';

export default class RegistrationPage extends Component {

  constructor(props) {
    super(props);
    
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {

    e.preventDefault(); 

    let firebaseErrors = {
      error1 : "The email address is already in use by another account.",
      error2 : "The email address is badly formatted."
    };
    let errorMessage;
    let userName = document.getElementById('userName').value;
    let userKey = document.getElementById('key').value;
    let x = document.getElementById('errorMessage');
    
    firebaseApp.auth().createUserWithEmailAndPassword(userName,userKey).then(() => {
      x.innerHTML = "Congrats! Sign Up Successful"
      x.style.setProperty("display","block");
      x.style.borderColor = "darkgreen";
      x.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
      x.style.color = "darkgreen";
      document.getElementById('userName').focus();
      document.getElementById('userName').value = "";
      document.getElementById('key').value = "";

      setTimeout(hideMessage, 2000);

      function hideMessage()
      {
        x.style.setProperty("display","none");
        x.style.borderColor = "red";
        x.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        x.style.color = "red";
      }
    }).catch(error => {
      errorMessage =  error.message;
      console.log(error.message)
      if (errorMessage === firebaseErrors.error1) {
        x.innerHTML = "Already an account with this Email"
        x.style.setProperty("display","block")
        document.getElementById('userName').focus();
        document.getElementById('key').value = "";
      }
      else if (errorMessage === firebaseErrors.error2) {
        x.innerHTML = "Invalid Email"
        x.style.setProperty("display","block")
        document.getElementById('key').value = "";
        document.getElementById('userName').focus();
      }
    })
  }

  render() {
      return (
        <div className="pageDiv">
          <h3 id="heading">Sign Up</h3>

          <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="userName">ENTER EMAIL</label>
              <br />
              <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="userName" id="userName" initialBorderColor="darkgrey" focusBorderColor="orange" />
              <br />
              <label htmlFor="key">ENTER PASSWORD</label>
              <br />
              <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="password" name="key" id="key" initialBorderColor="darkgrey" focusBorderColor="orange" />
              <br/>
              <button id="sign_up" type="submit">REGISTER</button>
          </form>

          <p id="errorMessage" className="hide"></p>

          <div id="btn">
            <Link to="/signin"><button className="navigation-button">I already have an account</button></Link>
          </div>  
        </div>
      )
    }

}