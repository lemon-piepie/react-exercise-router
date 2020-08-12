import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink , Link, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import AboutUsPage from '../pages/AboutUsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "header">
          <NavLink to = "/about" className = "about" >About Us</NavLink>
          <NavLink to = "/profile" className = "profile" >My Profile</NavLink>
          <NavLink to = "/" className = "home">Home</NavLink>
        </div>
        <Switch>
          <Route exact path = "/" component = {HomePage}></Route>
          <Route exact path = "/profile" component = {ProfilePage}></Route>
          <Route exact path = "/about" component = {AboutUsPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
