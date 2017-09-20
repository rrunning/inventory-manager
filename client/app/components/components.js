import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Products from './products/products';
import SignUp from './sign-up/sign-up';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Products,
  SignUp
])

.name;

export default componentModule;
