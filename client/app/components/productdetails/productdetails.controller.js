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
	addToCart(product) {
		this.ShoppingCart.addProduct(product);
	}
	modify_qty(val) {
    var qty = document.getElementById('prod-qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('prod-qty').value = new_qty;
    return new_qty;
	}
}

ProductdetailsController.$inject = ['ProductsService', '$stateParams', 'Authentication', 'ShoppingCart'];

export default ProductdetailsController;
