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
			console.log(importedProduct);
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
		const editedProd = {...this.importedProduct, ...this.product};
		this.ProductsService.editProduct(editedProd).then(response => {
			this.importedProduct = editedProd;
			this.allowEdit = false;
		})
	}
	// deleteProduct() {

	// }
}

ProductdetailsController.$inject = ['ProductsService', '$stateParams', 'Authentication'];

export default ProductdetailsController;
