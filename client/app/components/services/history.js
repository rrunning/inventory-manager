import angular from 'angular';

let historyModule = angular.module('about.history', [])
	.factory('History', History)
	.name;

function History($http) {
	const service = {
		fetchHistory: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		},
	}
	return service;
}

History.$inject = ['$http'];
export default historyModule;
