class LoginController {
	constructor(Authentication) {
		this.user = {
			email: null,
			password: null,
			fName: null,
			lName: null,
		};
		this.Authentication = Authentication;
	}
	sendLogin(user) {
		this.Authentication.login(user);
		this.user = {};
	}
	logOut() {
		this.Authentication.logout();
	}
}

LoginController.$inject = ['Authentication'];

export default LoginController;
