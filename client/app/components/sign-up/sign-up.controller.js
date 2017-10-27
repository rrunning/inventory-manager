class SignUpController {
	constructor(Authentication) {
		this.user = {
			email: null,
			password: null,
			fName: null,
			lName: null,
		};
		this.Authentication = Authentication;
		this.passwordVerification = null;
	}
	sendSignUp (user) {
		if (this.user.password === this.passwordVerification){
			this.Authentication.signup(user);
			this.user = {};
		} else {
			alert ('Passwords do not match');
		}
	}
}

SignUpController.$inject = ['Authentication'];

export default SignUpController;
