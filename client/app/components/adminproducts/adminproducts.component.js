import template from './adminproducts.html';
import controller from './adminproducts.controller';
import './adminproducts.scss';

let adminproductsComponent = {
	bindings: {
		productList: '<',
	},
	template,
	controller
};

export default adminproductsComponent;
