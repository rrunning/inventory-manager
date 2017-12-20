import angular from 'angular';

let adminModule = angular.module('about.admin', [])
	.factory('Admin', Admin)
	.name;

function Admin() {
	const service = {
		productSummary: () => {
			return $http.get('http://wta-inventorybackend.herokuapp.com/api/v1/product/summary');
		},
	}
	return service;
}

// Admin.$inject = [];
export default adminModule;
