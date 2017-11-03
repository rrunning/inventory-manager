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
			});
	})

	.name;

export default orderHistoryModule;
