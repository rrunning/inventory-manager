class AdministratorController {
	constructor($stateParams, ProductsService) {
		this.name = 'admin';
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

AdministratorController.$inject = ['$stateParams', 'ProductsService'];
export default AdministratorController;
