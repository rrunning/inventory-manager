class CartController {
	constructor(ShoppingCart) {
		this.name = 'cart';
		this.ShoppingCart = ShoppingCart;
		this.cartItems = this.ShoppingCart.cart;
	}
	createCart() {
		
	}
}

CartController.$inject = ['ShoppingCart'];

export default CartController;
