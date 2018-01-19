import angular from 'angular';

let adminModule = angular.module('about.admin', [])
	.factory('Admin', Admin)
	.name;

function Admin($http) {
	const service = {
		// productSummary: () => {
		// 	return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		// },
		transactionSummary: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/transaction');
		},
		importedTransaction: (transID) => {
			console.log(transID);
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/transaction/' + transID);
		}
	}
	return service;
}

Admin.$inject = ['$http'];
export default adminModule;
