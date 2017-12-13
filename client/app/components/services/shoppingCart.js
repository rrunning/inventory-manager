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
		isCartEmpty:() => {
			if(service.cart.length < 1) {
				return true;
			}	else {
				return false;
			}
		},
		alreadyExistsInCart:(product) => {
			console.log(product);
			for (let i = 0; i <= service.cart.length; i++) {
				if (product.id === service.cart[i].id) {
					return true;
				} else {
					return false;
				}
			}
		},
		adjustQuantity: () => {

		},
		addProduct:(product, quantity) => {
			if (!service.isCartEmpty()) {
				let isInCart = service.alreadyExistsInCart(product);
				if (isInCart) {
					// if true - run adjust quantity function
				} else {
					// if false - run addToCart function
				}
			} else {
				// push item into cart
				service.cart.push({id: product.id, qty: quantity})
			}
			console.log(service.cart);
		}
	}
	return service;
}

ShoppingCart.$inject = ['$http'];
export default shoppingCartModule;
