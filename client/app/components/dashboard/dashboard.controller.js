class DashboardController {
	constructor(Admin) {
		this.name = 'dashboard';
		this.Admin = Admin;
		console.log(this.Admin);
	}
}

DashboardController.$inject = ['Admin'];

export default DashboardController;
