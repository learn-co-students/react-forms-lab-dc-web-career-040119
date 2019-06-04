import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleFormUpdates = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.state.username && this.state.password ? this.props.handleLogin(event) : null
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleFormUpdates}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleFormUpdates}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
