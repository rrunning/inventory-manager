import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productdetailsComponent from './productdetails.component';

const productdetailsModule = angular.module('productdetails', [
	uiRouter
])

	.component('productdetails', productdetailsComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('productdetails', {
				url: '/productdetails',
				component: 'productdetails',
			});
	})

	.name;

export default productdetailsModule;
