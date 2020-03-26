import React from 'react';
import Login from '../Login/index.js';
import Feed from '../Feed/index.js';
import LikedPosts from '../Feed/LikedPosts.js';
import FriendPosts from '../Feed/FriendPosts.js';
import FollowingPosts from '../Feed/FollowingPosts.js';
import SignUp from '../SignUp/index.js';
import SignUpNotification from '../SignUp/SignupNotification.js';
import SignUpValidation from '../SignUp/SignupValidation.js';
import Users from '../Users/index.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HOCWrapper from '../../HOC';
import store from "../../store";
import {loginAction} from "../../store/actions/loginAction";
import User from '../User/index.js'

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(loginAction(token))
}


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={ HOCWrapper(Login) }/> 
        <Route exact path="/feed" component={ HOCWrapper(Feed) }/>
        {/* <Route exact path="/" component={ Login }/> 
        <Route exact path="/feed" component={ Feed }/> */}
        <Route exact path="/signup" component={ SignUp }/>
        <Route exact path="/signup_notification" component={ SignUpNotification }/>
        <Route exact path="/signup_validation" component={ SignUpValidation }/>
        <Route exact path="/users" component={ Users }/>
        <Route exact path='/user/:id' component={ User } />
        <Route exact path='/liked' component={ LikedPosts } />
        <Route exact path='/friends' component={ FriendPosts } />
        <Route exact path='/following' component={ FollowingPosts } />
      </Switch>
    </Router>
  );
}

export default App;

