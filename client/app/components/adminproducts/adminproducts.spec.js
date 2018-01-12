import AdminProductsModule from './adminProducts';
import AdminProductsController from './adminProducts.controller';
import AdminProductsComponent from './adminProducts.component';
import AdminProductsTemplate from './adminProducts.html';

describe('AdminProducts', () => {
	let $rootScope, makeController;

	beforeEach(window.module(AdminProductsModule));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => {
			return new AdminProductsController();
		};
	}));

	describe('Module', () => {
		// top-level specs: i.e., routes, injection, naming
	});

	describe('Controller', () => {
		// controller specs
		it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
			let controller = makeController();
			expect(controller).to.have.property('name');
		});
	});

	describe('Template', () => {
		// template specs
		// tip: use regex to ensure correct bindings are used e.g., {{  }}
		it('has name in template [REMOVE]', () => {
			expect(AdminProductsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
		});
	});

	describe('Component', () => {
		// component/directive specs
		let component = AdminProductsComponent;

		it('includes the intended template', () => {
			expect(component.template).to.equal(AdminProductsTemplate);
		});

		it('invokes the right controller', () => {
			expect(component.controller).to.equal(AdminProductsController);
		});
	});
});
