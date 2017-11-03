class LoginController {
	constructor(Authentication, $state) {
		this.user = {
			email: null,
			password: null,
			fName: null,
			lName: null,
		};
		this.$state = $state;
		this.Authentication = Authentication;
		console.log(this.Authentication.loggedIn);
		// if (this.Authentication.loggedIn === true) {
		// 	console.log(this.Authentication.loggedIn);
		// 	this.$state.go('products');
		// }
	}
	$onChanges() {
	}
	sendLogin(user) {
		this.Authentication.login(user);
		this.user = {};
	}
	logOut() {
		this.Authentication.logout();
	}
}

LoginController.$inject = ['Authentication', '$state'];

export default LoginController;
