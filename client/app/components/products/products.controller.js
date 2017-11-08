class ProductsController {
	constructor($state) {
		this.$state = $state;
		this.carObj = {};
		this.cheeseObj = {};
		// console.log(this);
	}
	$onInit() {
		this.fetchProducts();
	}
	fetchProducts() {
		this.carObj = this.productList[0];
		this.cheeseObj = this.productList[1];
		this.carObj.name = 'Ford GT';
		this.carObj.cost = '$500,000';
		this.carObj.imgThumbnail = 'http://st.motortrend.com/uploads/sites/5/2016/12/2017-Ford-GT-side-profile.jpg';
		this.cheeseObj.name = 'Cottage Cheese';
		this.cheeseObj.cost = '$3.49';
		this.cheeseObj.imgThumbnail = 'http://www.cheesemaking.com/resize?po=http%3a%2f%2fwww.cheesemaking.com%2fimages%2frecipes%2f85drycurdcottagecheese%2fPics%2fpic04.jpg&bw=1000&w=1000&bh=1000&h=1000';
	}
	viewProductDetails(id) {
		this.$state.go('productdetails', { id });
	}
}

ProductsController.$inject = ['$state'];

export default ProductsController;
