class SignUpController {
	constructor(Authentication) {
		this.user = {
			email: null,
			password: null,
			fName: null,
			lName: null,
		};
		this.Authentication = Authentication;
	}
	sendSignUp (user) {
		this.Authentication.signup(user);
		this.user = {};
	}
}

SignUpController.$inject = ['Authentication'];

export default SignUpController;
