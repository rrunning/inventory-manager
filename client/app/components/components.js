import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Products from './products/products';
import SignUp from './sign-up/sign-up';
import OrderHistory from './order-history/order-history';
import Login from './login/login';
import Productdetails from './productdetails/productdetails';
import Cart from './cart/cart';
import Administrator from './administrator/administrator';
import Dashboard from './dashboard/dashboard';
import AdminProducts from './adminProducts/adminProducts';
import AdminTransactions from './adminTransactions/adminTransactions';
import TransactionDetails from './transactionDetails/transactionDetails';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Products,
  SignUp,
  OrderHistory,
  Login,
  Productdetails,
  Cart,
  Administrator,
  Dashboard,
  AdminProducts,
  AdminTransactions,
  TransactionDetails,
])

.name;

export default componentModule;
