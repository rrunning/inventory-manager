class ProductdetailsController {
	constructor(ProductsService, $stateParams) {
		this.ProductsService = ProductsService;
		this.importedProduct = '';
		this.$stateParams = $stateParams;
	}
	importProduct(id) {
		this.ProductsService.importProduct(id).then(response => {
			this.importedProduct = response.data;
		});
	}
}

ProductdetailsController.$inject = ['ProductsService', '$stateParams'];

export default ProductdetailsController;
