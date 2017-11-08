import angular from 'angular';

let authenticationModule = angular.module('about.authentication', [])
	.factory('Authentication', Authentication)
	.name;

function Authentication($http, $state, $localStorage,) {
	const service = {
		loggedIn: null,
		user: {}, 
		signup: (user) => {
		  return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1' + '/signup', user).then(response => {
		    service.successAuth(response.data);
		  }, function (err) {});
		},
		login: (user) => {
		  return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1' + '/login', user).then(response => {
				service.successAuth(response.data);
		  }, function (err) {});
		},
		successAuth: (res) => {
			// console.log('success - auth');
			$localStorage.token = res.token;
			var tokenClaims = service.getClaimsFromToken();
			service.user = tokenClaims;
			service.loggedIn = true;
			$state.go('products');
		},
		urlBase64Decode: (str) => {
			var output = str.replace('-', '+').replace('_', '/');
			switch (output.length % 4) {
				case 0:
					break;
				case 2:
					output += '==';
					break;
				case 3:
					output += '=';
					break;
				default:
					throw 'Illegal base64url string!';
			}
			return window.atob(output);
		},
		getClaimsFromToken: () => {
			var token = $localStorage.token;
			if (typeof token !== 'undefined') {
				var encoded = token.split('.')[1];
				service.user = JSON.parse(service.urlBase64Decode(encoded));
			}
			// console.log(service.user);
			return service.user;
		},
		logout: () => {
			delete localStorage.token;
			service.loggedIn = false;
			service.user = null;
			$state.go('products');
		},
	}
	return service;
}

Authentication.$inject = ['$http', '$state', '$localStorage',];
export default authenticationModule;
