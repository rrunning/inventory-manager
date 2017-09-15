import angular from 'angular';
import ProductsService from './productsService';

let commonModule = angular.module('about.services', [
	ProductsService,
])
	.name;

export default commonModule;
