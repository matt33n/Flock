import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import elyse from "../../assets/images/elyse.png"
import background from "../../assets/images/background.png"

var sectionStyle = {
  width: "100%" ,
  height: "900px",
  backgroundImage: `url(${background})`
};

var formStyle = {
  margin: "5px"
}

var inputStyle = {
  marginBottom:"5px"
}

const PasswordForgetPage = () =>
  <div style = { sectionStyle }>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div> 
      <div className="ui middle aligned center aligned page grid">
       <div className="column">
        <div className = "ui middle aligned centered card">
        <div className = "image">
          <img src={elyse} alt={"elyse"}/>
        </div>
    <h1>Reset Password</h1>
    <PasswordForgetForm />
    </div>
    </div>
    </div>
    </div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit} className = "ui middle aligned form" style = {formStyle}>
      <div style={inputStyle}>
        <input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <button disabled={isInvalid} type="submit" className = "ui button">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
