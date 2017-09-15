class ProductsController {
	constructor(ProductsService) {
		this.ProductsService = ProductsService;
		this.newJoke = '';
	}
	fetchJoke() {
		this.ProductsService.grabJoke().then(response => {
			this.newJoke = response.data.value.joke;
		});
	}
}

ProductsController.$inject = ['ProductsService'];

export default ProductsController;
