class AdministratorController {
	constructor($stateParams, ProductsService) {
		this.name = 'admin';
		this.ProductsService = ProductsService;
	}
	fetch() {
		this.ProductsService.fetchProducts();
	}
	addNewProduct() {
		this.ProductsService.createProduct();
	}
}

AdministratorController.$inject = ['$stateParams', 'ProductsService'];
export default AdministratorController;
