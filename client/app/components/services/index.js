import angular from 'angular';
import ProductsService from './productsService';
import Authentication from './authentication';
import History from './history';
import ShoppingCart from './shoppingCart';
import Admin from './admin';

let commonModule = angular.module('about.services', [
	ProductsService,
	Authentication,
	History,
	ShoppingCart,
	Admin,
])
	.name;

export default commonModule;
