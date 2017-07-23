import React, { Component } from 'react';

import InputComponent from './InputComponent';

export default class AddWorkDiv extends Component {

  render() {
    return (
      <div id="addWork_div">
                                
        <h3 id="greet">Hello,</h3>
        <h2 id="greetName">Abdul Moiz</h2>
        <h2 id="welcome">Welcome to To Do App</h2>

        <form>
            <div id="label">
                <label htmlFor="workName">ENTER WORK TO DO BELOW</label>
                <br />
                <InputComponent inputFieldClassName="inputStyle" divClassName="userInputBox" type="text" name="workName" id="getWork" initialBorderColor="darkgrey" focusBorderColor="orange" />
            </div>

            <button id="addbtn" className="buttonStyle" type="submit">Add to List</button>
        </form>

      </div>
    )
  }
}