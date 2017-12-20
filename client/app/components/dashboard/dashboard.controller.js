class DashboardController {
	constructor(ShoppingDashboard, $localStorage) {
		this.name = 'dashboard';
		this.ShoppingDashboard = ShoppingDashboard;
		this.dashboardItems = this.ShoppingDashboard.dashboard;
		console.log($localStorage.dashboard);
	}
}

DashboardController.$inject = ['ShoppingDashboard', '$localStorage'];

export default DashboardController;
