class CartController {
	constructor(ShoppingCart) {
		this.name = 'cart';
		this.ShoppingCart = ShoppingCart;
		this.cartItems = this.ShoppingCart.cart;
		// console.log(this.cartItems.product.name);
		console.log(this.cartItems[1].product.name);
	}
}

CartController.$inject = ['ShoppingCart'];

export default CartController;
