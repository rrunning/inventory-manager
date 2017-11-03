import angular from 'angular';

let historyModule = angular.module('about.history', [])
	.factory('history', history)
	.name;
// api is at http://wta-inventorybackend.herokuapp.com/api/v1/product

function history($http) {
	const service = {
		fetchHistory: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		},
	}
	return service;
}

history.$inject = ['$http'];
export default historyModule;
