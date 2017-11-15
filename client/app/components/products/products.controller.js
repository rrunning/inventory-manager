class ProductsController {
	constructor($state) {
		this.$state = $state;
	}
	viewProductDetails(id) {
		this.$state.go('productdetails', { id });
	}
}

ProductsController.$inject = ['$state'];

export default ProductsController;
