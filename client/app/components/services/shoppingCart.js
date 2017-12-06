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
		test: () => {
			console.log('IT WORKS, ADD SOME STUFF BRO');
		},
		addProduct: (product, quantity) => {
			if (service.cart.length >= 1) {
				for (i = 0; i < service.cart.length; i++) {
					if (product.id === [i].id) {
						[i].qty = [i].qty + quantity;
					}
				}
			} else {
				service.cart.push({
					id: product.id,
					qty: qty,
				});
			}
			console.log(service.cart);
		}
	}
	return service;
}

ShoppingCart.$inject = ['$http'];
export default shoppingCartModule;
