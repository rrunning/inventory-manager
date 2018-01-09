import angular from 'angular';
import uiRouter from 'angular-ui-router';
import administratorComponent from './administrator.component';

let administratorModule = angular.module('administrator', [
	uiRouter
])

	.component('administrator', administratorComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('administrator', {
				url: '/administrator',
				component: 'administrator',
				resolve: {
					productList: (ProductsService) => {
						return ProductsService.fetchProducts().then(response => {
							return response.data;
						});
					},
				},
			});
	})


	.name;

export default administratorModule;
