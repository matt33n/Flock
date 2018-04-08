import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import CheckboxExampleCheckbox from './checkbox.js';
import { Checkbox } from 'semantic-ui-react';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';
import JotformEmbed from 'react-jotform-embed'
import './index.css';

import background from "../../assets/images/background.png"
import molly from "../../assets/images/molly.png"

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

const SignUpPage = ({ history }) =>
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
          <img src={molly} alt={"molly"}/>
        </div>
    <h1>Create an account</h1>
    <SignUpForm history={history} />
    </div>
    </div>
    </div>
    </div>



  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className = "ui middle aligned form">
      <div className = "ui stacked element" style = {formStyle}>
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />

        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <div style = {inputStyle}>
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <button disabled={isInvalid} type="submit" className = "ui button">
          Sign Up
        </button>
        </div>
        { error && <p>{error.message}</p> }
      </form>


    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
