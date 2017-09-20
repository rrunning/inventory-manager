class ProductsController {
	constructor(ProductsService) {
		this.ProductsService = ProductsService;
		this.productList = '';
	// this.ProductsService.test();
		this.fetchProducts();
	}
	fetchProducts() {
		this.ProductsService.fetchProducts().then(response => {
			this.productList = response.data;
			console.log(this.productList);
		});
	}
}

ProductsController.$inject = ['ProductsService'];

export default ProductsController;
