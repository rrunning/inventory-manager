import angular from 'angular';
import ProductsService from './productsService';
import Authentication from './authentication';

let commonModule = angular.module('about.services', [
	ProductsService,
	Authentication,
])
	.name;

export default commonModule;
