import template from './administrator.html';
import controller from './administrator.controller';
import './administrator.scss';

let administratorComponent = {
	bindings: {
		productList: '<',
	},
	template,
	controller
};

export default administratorComponent;
