import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default function HomePage() {
  return (
    <>
    <p>Put logo here</p>
    <Router>
        <div>
            <ul>
                <li><Link to="/logIn"> Log in</Link></li>
                <li><Link to="/signUp"> sign up</Link></li>
            </ul>
        </div>

        <Switch>
            <Route exact path="/">
                <h1>Welcom!</h1>
            </Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signUp" component={SignUpPage}></Route>
        </Switch>
    </Router>
    </>
  )
}
