class ProductdetailsController {
	constructor(ProductsService, $stateParams, Authentication, ShoppingCart) {
		this.ProductsService = ProductsService;
		this.ShoppingCart = ShoppingCart;
		this.Authentication = Authentication;
		this.importedProduct = '';
		this.$stateParams = $stateParams;
		this.adminStatus = false;
		this.isAdmin();
		this.allowEdit = false;
	}
	// importProduct(id) {
	// 	this.ProductsService.importProduct(id).then(response => {
	// 		this.importedProduct = response.data;
	// 		// console.log(importedProduct);
	// 	});
	// }
	isAdmin() {
		if (this.Authentication.user.role === 'admin') {
			this.adminStatus = true;
		}
	}
	initiateEdit() {
		this.allowEdit = true;
	}
	deleteProduct(prodId) {
		this.ProductsService.deleteProd(prodId);
	}
	saveEdit() {
		const editedProd = {...this.importedProduct, ...this.product};
		this.ProductsService.editProduct(editedProd).then(response => {
			this.importedProduct = editedProd;
		})
		this.allowEdit = false;
	}
	addToCart(product) {
		const quantity = document.getElementById('prod-qty').value;
		const price = product.price;
		this.ShoppingCart.addProduct(product, quantity, price);
	}
	modifyQty(val) {
    const qty = document.getElementById('prod-qty').value;
    let newQty = parseInt(qty,10) + val;
    if (newQty < 0) {
        newQty = 0;
    }
		document.getElementById('prod-qty').value = newQty;
    return newQty;
	}
}

ProductdetailsController.$inject = ['ProductsService', '$stateParams', 'Authentication', 'ShoppingCart'];

export default ProductdetailsController;
