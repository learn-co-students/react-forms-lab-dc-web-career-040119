import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal : ""
    };
  }

  handleChange = event => {

    let updateInput = event.target.value
    this.setState({
      inputVal : updateInput,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.inputVal} onChange={event => this.handleChange(event)}/>
        <br />
        {this.props.maxChars - this.state.inputVal.length}
      </div>
    );
  }
}

export default TwitterMessage;
