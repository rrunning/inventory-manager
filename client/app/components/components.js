import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Products from './products/products';
import SignUp from './sign-up/sign-up';
import Login from './login/login';
import Productdetails from './productdetails/productdetails';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Products,
  SignUp,
  Login,
  Productdetails
])

.name;

export default componentModule;
