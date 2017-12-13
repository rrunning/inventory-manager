class CartController {
	constructor(ShoppingCart, $localStorage) {
		this.name = 'cart';
		this.ShoppingCart = ShoppingCart;
		this.cartItems = this.ShoppingCart.cart;
		console.log($localStorage.cart);
	}
}

CartController.$inject = ['ShoppingCart', '$localStorage'];

export default CartController;
