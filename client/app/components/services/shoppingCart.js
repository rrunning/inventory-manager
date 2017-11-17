import angular from 'angular';

let shoppingCartModule = angular.module('about.shoppingCart', [])
	.factory('ShoppingCart', ShoppingCart)
	.name;

function ShoppingCart($http) {
	const service = {
		cart: {},
		test: () => {
			console.log('IT WORKS, ADD SOME STUFF BRO');
		},
	}
	return service;
}

ShoppingCart.$inject = ['$http'];
export default shoppingCartModule;
