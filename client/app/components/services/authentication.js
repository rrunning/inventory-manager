import angular from 'angular';

let authenticationModule = angular.module('about.authentication', [])
	.factory('Authentication', Authentication)
	.name;

function Authentication($http, $state) {
	const service = {
		successAuth: (res) => {
			console.log('success - auth');
			$localStorage.token = res.token;
			var tokenClaims = getClaimsFromToken();
			service.user = tokenClaims;
			service.loggedIn = true;
		},
		signup: (user) => {
		  return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1' + '/signup', user).then(function (response) {
		    this.successAuth(response.data);
		  }, function (err) {});
		},
		login: (user) => {
		  return $http.post('http://wta-inventorybackend.herokuapp.com/api/v1' + '/login', user).then(function (response) {
		    this.successAuth(response.data);
		  }, function (err) {});
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
			var user = {};
			if (typeof token !== 'undefined') {
				var encoded = token.split('.')[1];
				user = JSON.parse(urlBase64Decode(encoded));
			}
			return user;
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

Authentication.$inject = ['$http', '$state'];
export default authenticationModule;
