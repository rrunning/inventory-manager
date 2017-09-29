import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';

const productsModule = angular.module('products', [
	uiRouter
])

	.component('products', productsComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('products', {
				url: '/products',
				component: 'products',
				resolve: {
					productList: (ProductsService) => {
						return ProductsService.fetchProducts().then(response => {
							return response.data;
						});
					},
				}
			});
	})

	.name;

export default productsModule;
