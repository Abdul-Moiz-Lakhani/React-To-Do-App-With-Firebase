import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import InputComponent from './InputComponent';

export default class SignInPage extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  handleOnSubmit(e) {

    e.preventDefault();

    let flag = true;

    let userName = document.getElementById('userNameS').value;
    let userKey = document.getElementById('keyS').value;

    if(userName === "" || userKey === "")
    {
      alert("User Name or Key is missing...!");
    }
    else if(localStorage.length === 0)
    {
      alert("Nothing in record. Please Register First");
    }
    else
    {
      for (var i = 0; i < localStorage.length; i++)
      {
        var key   = localStorage.key(i);
        var value = localStorage.getItem(key);

        if(userName === value && userKey === key)
        {
          alert("Welcome! You are successfully Signed In");

          flag = false;

          document.getElementById('userNameS').value = "";
          document.getElementById('keyS').value = "";

          break;
        }
      }

      if(flag === true)
      {
        alert("User Name or Key is Incorrect! \nOR You are not registered \n\nNote: To register click I want to to create new account." );
        
        document.getElementById('userNameS').value = "";
        document.getElementById('keyS').value = "";
      }
    }
  }

  render() {
    return (
      <div className="pageDiv">
        <h3 id="heading">Sign In</h3>

        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="userName">ENTER USERNAME</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="userName" id="userNameS" initialBorderColor="darkgrey" focusBorderColor="orange" />
          <br />
          <label htmlFor="key">ENTER KEY</label>
          <br />
          <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="password" name="userName" id="keyS" initialBorderColor="darkgrey" focusBorderColor="orange" />
          <br/>
          <button id="sign_up" type="submit">SIGN IN</button>
        </form>

        <div id="btn">
          <Link to="/register"><button className="navigation-button">I want to create new account</button></Link>
        </div>

      </div>
    )
  }
}