class ProductsController {
	constructor(ProductsService) {
		this.ProductsService = ProductsService;
		this.productList = '';
		this.fetchProducts();
		this.productName = '';
		this.productDescription = '1';
		this.productAmount = '';
		this.productPrice = '';
	}
	fetchProducts() {
		this.ProductsService.fetchProducts().then(response => {
			this.productList = response.data;
		});
	}
}

ProductsController.$inject = ['ProductsService'];

export default ProductsController;
