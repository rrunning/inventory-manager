class ProductdetailsController {
	constructor(ProductsService, $stateParams, Authentication) {
		this.ProductsService = ProductsService;
		this.Authentication = Authentication;
		this.importedProduct = '';
		this.$stateParams = $stateParams;
		this.adminStatus = false;
		this.isAdmin();
		this.allowEdit = false;
	}
	importProduct(id) {
		this.ProductsService.importProduct(id).then(response => {
			this.importedProduct = response.data;
		});
	}
	isAdmin() {
		if (this.Authentication.user.role === 'admin') {
			this.adminStatus = true;
		}
	}
	initiateEdit() {
		this.allowEdit = true;
	}
	saveEdit() {
		this.ProductsService.editProduct(importedProduct).then(response => {

		})
	}
}

ProductdetailsController.$inject = ['ProductsService', '$stateParams', 'Authentication'];

export default ProductdetailsController;
