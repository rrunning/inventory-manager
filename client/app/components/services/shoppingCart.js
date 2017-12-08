import angular from 'angular';

let shoppingCartModule = angular.module('about.shoppingCart', [])
	.factory('ShoppingCart', ShoppingCart)
	.name;

function ShoppingCart($http) {
	const service = {
		cart: [
		],
		transaction: {
			type: {
				id: null,
				description: null,
			},
			date: 'date',
			note: 'note string',
			altersId: 'number id of any transaction that this one alters',
			subTransactions: [
				{
					id: 'productId',
					qty: 'number'
				}
			],
		},
		alreadyExistsInCart:(product) => {
			for (let i = 0; i <= service.cart.length; i++) {
				if (product.id === service.cart[i].id) {
					return true;
				} else {
					return false;
				}
			}
		},
		addProduct:(product, quantity) => {
			let isInCart = alreadyExistsInCart(product);
			if (isInCart) {
				// if true - run adjust quantity function
			} else {
				// if false - run addToCart function
			}
			console.log(service.cart);
		}
	}
	return service;
}

ShoppingCart.$inject = ['$http'];
export default shoppingCartModule;
