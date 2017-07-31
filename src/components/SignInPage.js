import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {firebaseApp} from '../firebase';

import InputComponent from './InputComponent';

export default class SignInPage extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  handleOnSubmit(e) {

    e.preventDefault();

    let firebaseErrors = {
      error1 : "The password is invalid or the user does not have a password.",
      error2 : "The email address is badly formatted.",
      error3 : "Password should be at least 6 characters",
      error4 : "There is no user record corresponding to this identifier. The user may have been deleted."
    };
    let errorMessage;
    let userName = document.getElementById('userNameS').value;
    let userKey = document.getElementById('keyS').value;
    let x = document.getElementById('errorMessage');
    
    firebaseApp.auth().signInWithEmailAndPassword(userName,userKey).then(()=> {
      x.innerHTML = "Congrats! Sign In Successful"
      x.style.setProperty("display","block");
      x.style.borderColor = "darkgreen";
      x.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
      x.style.color = "darkgreen";
      document.getElementById('userNameS').focus();
      document.getElementById('userNameS').value = "";
      document.getElementById('keyS').value = "";

      setTimeout(hideMessage, 2000);

      <Link to="/home" replace />
      
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
        x.innerHTML = "Invalid Password"
        x.style.setProperty("display","block")
        document.getElementById('keyS').value = "";
        document.getElementById('keyS').focus();
      }
      else if (errorMessage === firebaseErrors.error2) {
        x.innerHTML = "Invalid Email"
        x.style.setProperty("display","block")
        document.getElementById('keyS').value = "";
        document.getElementById('userNameS').focus();
      }
      else if (errorMessage === firebaseErrors.error3) {
        x.innerHTML = 'Short Password';
        x.style.setProperty("display","block")
        document.getElementById('keyS').value = "";
        document.getElementById('keyS').focus();
      }
      else if (errorMessage === firebaseErrors.error4) {
        x.innerHTML = 'User does not exist';
        x.style.setProperty("display","block")
        document.getElementById('UserNameS').value = "";
        document.getElementById('keyS').value = "";
        document.getElementById('UserNameS').focus();
      }
    })
  }

  render() {
    return (
      <div className="pageDiv">
        <h3 id="heading">Sign In</h3>

        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="userName">ENTER USERNAME</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="email" name="userName" id="userNameS" initialBorderColor="darkgrey" focusBorderColor="orange" />
          <br />
          <label htmlFor="key">ENTER KEY</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="password" name="userName" id="keyS" initialBorderColor="darkgrey" focusBorderColor="orange" />
          <br/>
          <button id="sign_up" type="submit">SIGN IN</button>
        </form>

        <p id="errorMessage" className="hide"></p>

        <div id="btn">
          <Link to="/register"><button className="navigation-button">I want to create new account</button></Link>
        </div>

      </div>
    )
  }
}