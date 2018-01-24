class AdminproductsController {
	constructor($state, $stateParams, ProductsService, Admin) {
		this.$state = $state;
		this.Admin = Admin;
		this.ProductsService = ProductsService;
		this.addNew = false;
		this.newProduct = {};
		// console.log('ProductsService:',this.ProductsService);
	}
	goToProduct(id) {
		this.$state.go('productdetails', { id });
	}
	addNewProduct() {
		this.addNew = true;
	}
	submitNewProduct() {
		console.log(this.newProduct);
		this.ProductsService.createProduct(this.newProduct).then(response => {
			const createdProduct = this.newProduct;
			this.newProduct = {};
		});
	}
}


AdminproductsController.$inject = ['$state', '$stateParams', 'ProductsService', 'Admin'];
export default AdminproductsController;
