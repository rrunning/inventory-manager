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
	// 			resolve: {
	// 				firstJoke: (Norris) => {
	// 					return Norris.grabJoke().then(response => {
	// 						return response.data.value.joke;
	// 					});
	// 				}
				// }
			});
	})

	.name;

export default productsModule;
