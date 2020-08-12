import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, NavLink , Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import AboutUsPage from '../pages/AboutUsPage';
import Products from '../pages/Products';
import Product from '../pages/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "header">
          <NavLink to = "/about" className = "about" >About Us</NavLink>
          <NavLink to = "/profile" className = "profile" >My Profile</NavLink>
          <NavLink to = "/products" className = "products">Products</NavLink>
          <NavLink to = "/"  exact className = "home">Home</NavLink>
        </div>
        <Switch>
          <Route exact path = "/" component = {HomePage}></Route>
          <Route exact path = "/profile" component = {ProfilePage}></Route>
          <Route exact path = "/about" component = {AboutUsPage}></Route>
          <Route exact path = "/products" component = {Products}></Route>
          <Route exact path = "/products/:id" component = {Product}></Route>
          <Route exact path = "/goods" component = {Products}></Route>
          <Route path = "*" component = {HomePage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
