import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import background from "../../assets/images/background.png"
import HistoryPage from "../History"

import './index.css';

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${background})`
};

const App = () =>
  <Router>
    <div className="app" >
    <script type="text/javascript" src="https://form.jotform.com/jsform/80959032488164"></script>
      {/*}
      <Navigation />
      */}
      

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.HISTORY} component={() => <HistoryPage/>} />

      

    </div>
  </Router>

export default withAuthentication(App);
