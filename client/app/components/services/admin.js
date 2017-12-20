import angular from 'angular';

let adminModule = angular.module('about.admin', [])
	.factory('Admin', Admin)
	.name;

function Admin() {
	const service = {
		cart: $localStorage.cart || {},
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
		alreadyExistsInCart: (product) => {
			// console.log(product);
			return !!service.cart[product.id];
		},
		adjustQuantity: (product, quantity) => {
			const prodId = product.id;
			const oldQty = Number(service.cart[prodId].qty);
			const newQty = Number(quantity) + oldQty;
			return newQty;
		},
		addProduct: (product, quantity) => {
			const prodId = product.id;
			if (service.alreadyExistsInCart(product)) {
				const cartQty = service.adjustQuantity(product, quantity);
				// console.log(service.cart[prodId]);
				service.cart[prodId].qty = cartQty;
				$localStorage.cart = service.cart;
			} else {
				// add to cart
				service.cart[prodId] = { id: prodId, qty: Number(quantity) };
				$localStorage.cart = service.cart;
			}
			console.log(service.cart);
		}
	}
	return service;
}

Admin.$inject = [];
export default adminModule;
