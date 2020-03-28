import React from 'react';
import Login from '../Login/index.js';
import Feed from '../Feed/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOCWrapper from '../../HOC';
import store from "../../store";
import { loginAction } from "../../store/actions/loginAction";
import User from '../User/index.js'

// fetches the token from the localStorage and saves it in the state
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
if (token) {
  store.dispatch(loginAction(token))
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HOCWrapper(Login) }/> 
        <Route exact path="/feed" component={ HOCWrapper(Feed) }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;