import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import InputComponent from './InputComponent';

import {firebaseApp} from '../firebase';

export default class RegistrationPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valid : true
    }
    
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  validity(someArg) {
    this.setState({
      valid : someArg
    })
  }

  handleOnSubmit(e) {

    /* e.preventDefault(); */

    if (this.state.valid === false) {
      alert("Cannot register with this Username!");
    }
    else if (this.state.valid === true) {
      
      let userName = document.getElementById('userName').value;
      let userKey = document.getElementById('key').value;

      if(userName === "" || userKey === "")
      {
          alert("User Name or Key is missing...!");
      }
      else
      {
        localStorage.setItem(userKey,userName);
        alert("Congrats! You are successfully Registered");
          /* firebaseApp.auth().createUserWithEmailAndPassword(userName,userKey).catch(error => {
          console.log('Error : ', error); 
            
          })
          */
      }
    }
  }

  render() {
      return (
        <div className="pageDiv">
          <h3 id="heading">Sign Up</h3>

          <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="userName">ENTER USERNAME</label>
              <br />
              <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="userName" id="userName" initialBorderColor="darkgrey" focusBorderColor="orange" validity={this.validity.bind(this)} />
              <br />
              <label htmlFor="key">ENTER KEY</label>
              <br />
              <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="password" name="key" id="key" initialBorderColor="darkgrey" focusBorderColor="orange" />
              <br/>
              <button id="sign_up" type="submit">REGISTER</button>
          </form>

          <div id="btn">
            <Link to="/signin"><button className="navigation-button">I already have an account</button></Link>
          </div>  
        </div>
      )
    }

}