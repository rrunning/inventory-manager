import template from './productdetails.html';
import controller from './productdetails.controller';
import './productdetails.scss';

let productdetailsComponent = {
	template,
	controller,
	bindings: {
		importedProduct: '<',
	}
};

export default productdetailsComponent;
