import angular from 'angular';
import uiRouter from 'angular-ui-router';
import administratorComponent from './administrator.component';

let administratorModule = angular.module('administrator', [
	uiRouter
])

	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('administrator', {
				url: '/',
				component: 'administrator'
			});
	})

	.component('administrator', administratorComponent)

	.name;

export default administratorModule;
