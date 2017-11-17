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
		addProduct: (product, qty) => {
			if (service.cart[product.id]) {
				service.cart[product.id].qty += qty;
			} else {
				service.cart[product.id] = { product, qty };
				console.log(service.cart);
			}
		}
	}
	return service;
}

ShoppingCart.$inject = ['$http'];
export default shoppingCartModule;
