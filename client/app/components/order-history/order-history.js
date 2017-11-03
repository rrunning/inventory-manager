import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderHistoryComponent from './order-history.component';

const orderHistoryModule = angular.module('order-history', [
	uiRouter
])

	.component('orderHistory', orderHistoryComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('order-history', {
				url: '/order-history',
				component: 'orderHistory',
				// resolve: {
				// 	fetchHistory: (History) => {
				// 		return History.fetchHistory().then(response => {
				// 			return response.data;
				// 		});
				// 	},
				// },
			});
	})

	.name;

export default orderHistoryModule;
