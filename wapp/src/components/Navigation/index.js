import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
   <div class="ui four item menu">
    <a class = "item active"><Link to={routes.LANDING}>Landing</Link></a>
    <a class = "item"><Link to={routes.HOME}>Home</Link></a>
    <a class = "item"><Link to={routes.ACCOUNT}>Account</Link></a>
    <a class = "item"><SignOutButton /></a>
  </div>
  

const NavigationNonAuth = () =>
  <div class="ui two item menu">
    <a class = "item active"><Link to={routes.LANDING}>Landing</Link></a>
    <a class = "item"><Link to={routes.SIGN_IN}>Sign In</Link></a>
  </div>

export default Navigation;
