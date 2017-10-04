import angular from 'angular';

let productsServiceModule = angular.module('about.productsService', [])
	.factory('ProductsService', ProductsService)
	.name;
// api is at http://wta-inventorybackend.herokuapp.com/api/v1/product

function ProductsService($http) {
	const service = {
		fetchProducts: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		},
		// addImage: (prodId, productImage) => {
		// 	return $http.put('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + prodId, imgThumbnail);
		// },
	}
	return service;
}

ProductsService.$inject = ['$http'];
export default productsServiceModule;
