import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signUpComponent from './sign-up.component';

const signUpModule = angular.module('sign-up', [
	uiRouter
])

	.component('sign-up', signUpComponent)

	.config(($stateProvider) => {
		"ngInject";
		$stateProvider
			.state('sign-up', {
				url: '/sign-up',
				component: 'sign-up',
			});
	})

	.name;

export default signUpModule;
