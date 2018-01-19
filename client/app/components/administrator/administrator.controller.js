class AdministratorController {
	constructor($stateParams, ProductsService, Admin) {
		this.name = 'administrator';
		this.Admin = Admin;
		this.ProductsService = ProductsService;
		this.addNew = false;
		this.newProduct = {};
	}
	fetch() {
		this.ProductsService.fetchProducts();
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

AdministratorController.$inject = ['$stateParams', 'ProductsService', "Admin"];
export default AdministratorController;
