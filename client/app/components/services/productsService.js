import angular from 'angular';

let productsServiceModule = angular.module('about.productsService', [])
	.factory('ProductsService', ProductsService)
	.name;
// api is at http://www.icndb.com/api/

function ProductsService($http) {
	const service = {
		test: () => {
			alert("hello World");
		},
		grabJoke: () => {
			return $http.get('http://api.icndb.com/jokes/random');
		},
	}
	return service;
}

ProductsService.$inject = ['$http'];
export default productsServiceModule;
