import angular from 'angular';
import uiRouter from 'angular-ui-router';
import administratorComponent from './administrator.component';

let administratorModule = angular.module('administrator', [
	uiRouter
])

	.component('administrator', administratorComponent)

	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise('/administrator/products');
		$stateProvider
			.state('administrator', {
				url: '/administrator',
				// component: 'administrator',
				abstract: true,
				resolve: {
					productList: (ProductsService) => {
						return ProductsService.fetchProducts().then(response => {
							return response.data;
						});
					},
					transactionList: (Admin) => {
						return Admin.transactionSummary().then(response => {
							console.log(response.data);
							return response.data;
						})
					},
				},
			})
			.state('administrator.adminProducts', {
				url: '/products',
				component: 'adminProducts',
			})
			.state('administrator.adminTransactions', {
				url: '/transactions',
				component: 'adminTransactions',
			});
	})


	.name;

export default administratorModule;
