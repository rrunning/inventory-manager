import template from './products.html';
import controller from './products.controller';
import './products.scss';

let productsComponent = {
	template,
	controller,
	bindings: {
		productList: '<',
	}
};


export default productsComponent;
