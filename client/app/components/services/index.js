import angular from 'angular';
import ProductsService from './productsService';
import Authentication from './authentication';
import History from './history';

let commonModule = angular.module('about.services', [
	ProductsService,
	Authentication,
	History,
])
	.name;

export default commonModule;
