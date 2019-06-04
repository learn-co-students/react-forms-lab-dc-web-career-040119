import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleTextChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // debugger
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleTextChange} />
        <i>Remaining Characters: {this.props.maxChars - this.state.message.length}</i>
      </div>
    );
  }
}

export default TwitterMessage;
