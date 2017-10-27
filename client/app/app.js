import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import ngStorage from 'ngstorage';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    'ngStorage'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if ($localStorage.token) {
            config.headers.Authorization = $localStorage.token;
            config.headers['Access-Control-Allow-Origin'] = '*';
            config.headers['Content-Type'] = 'application/json';
          }
          return config;
        },
        'responseError': function (response) {
          if ([401].indexOf(response.status)) {
            delete $localStorage.token;
            $location.path('/signin'); //YOU MIGHT WANT TO CHANGE THIS ROUTE
          }
          return $q.reject(response);
        }
      };
    }]);
  }])

  .component('app', AppComponent);
