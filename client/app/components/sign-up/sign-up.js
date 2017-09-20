import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signUpComponent from './sign-up.component';

const signUpModule = angular.module('signUp', [
	uiRouter
])

	.component('signUp', signUpComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('signUp', {
				url: '/signUp',
				component: 'signUp',
			});
	})

	.name;

export default signUpModule;
