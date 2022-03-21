import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default function Home() {

  return (
    <>
    <p>Put logo here</p>
    <Router>
        <div>
            <ul>
            <li><Link to="/"> Home</Link></li>
                <li><Link to="/login"> Log in</Link></li>
                <li><Link to="/signup"> sign up</Link></li>
            </ul>
        </div>

        <Switch>
            <Route exact path="/">
                <h1>Welcome!</h1>
            </Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
        </Switch>
    </Router>
    </>
  )
}
