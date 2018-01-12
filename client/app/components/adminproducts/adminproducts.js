import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminProductsComponent from './adminProducts.component';

let adminProductsModule = angular.module('adminProducts', [
	uiRouter
])

	.component('adminProducts', adminProductsComponent)

	.name;

export default adminProductsModule;
