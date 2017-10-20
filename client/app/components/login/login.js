import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

const loginModule = angular.module('login', [
	uiRouter
])

	.component('login', loginComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('login', {
				url: '/login',
				component: 'login',
			});
	})

	.name;

export default loginModule;
