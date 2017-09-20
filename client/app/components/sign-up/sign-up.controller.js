class SignUpController {
	constructor(SignUpService) {
		this.SignUpService = SignUpService;
	}
}

SignUpController.$inject = ['SignUpService'];

export default SignUpController;
