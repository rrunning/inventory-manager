import angular from 'angular';

let authenticationModule = angular.module('about.authentication', [])
	.factory('Authentication', Authentication)
	.name;
// api is at http://wta-inventorybackend.herokuapp.com/api/v1/product

function Authentication($http) {
	const service = {
		fetchProducts: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product');
		},
		importProduct: (prodId) => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/' + prodId);
		},
	}
	return service;
}

Authentication.$inject = ['$http'];
export default authenticationModule;
