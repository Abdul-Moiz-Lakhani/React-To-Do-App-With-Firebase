import React, {Component} from 'react';

export default class InputComponent extends Component {

  constructor() {
    super();
      
    this.state = {
      borderColor : "",
      validity : ""
    }
        
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount(){
      this.initialBorderColor = this.props.initialBorderColor;
      this.focusBorderColor = this.props.focusBorderColor;
      this.setState({borderColor: this.props.initialBorderColor})
  }

  handleOnFocus() {
      this.setState({borderColor : this.focusBorderColor});
  }

  handleOnBlur(e) {
      this.setState({
        borderColor : this.initialBorderColor
      });

      var validity = this.props.validity;

      var flag = true;
      
      if (e.target.id === 'userName') {

        for (let i = 0; i < localStorage.length; i++)
        {
            let x = localStorage.key(i);
            let val = localStorage.getItem(x);

            let uName = document.getElementById('userName').value;
          
            if (uName === val)
            {
                alert("This Username already exists. Please choose different.");
                flag = false;  
            }
        }

        if (!flag) {
          this.setState({
            validity : false
          }, () => {
            validity(this.state.validity)
          }) 
        }
      }
  }

  render() {

    let borderStyle = {
      borderBottomWidth: "2px", 
      borderBottomStyle:"solid", 
      transition : "all 1s",
      transitionTimingFunction : "ease-out", 
      borderBottomColor: this.state.borderColor
    }
    
    return (
        <div className={this.props.divClassName} style={borderStyle}>
          <input className={this.props.inputFieldClassName} type={this.props.type} name={this.props.name} ref={this.props.id} id={this.props.id} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} placeholder="Enter Here" />
        </div>
    )
  }
}