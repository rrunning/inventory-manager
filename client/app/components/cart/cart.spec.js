import CartModule from './cart'

describe('Cart', () => {
	let $rootScope, $state, $location, $componentController, $compile;

	beforeEach(window.module(CartModule));

	beforeEach(inject(($injector) => {
		$rootScope = $injector.get('$rootScope');
		$componentController = $injector.get('$componentController');
		$state = $injector.get('$state');
		$location = $injector.get('$location');
		$compile = $injector.get('$compile');
	}));

	describe('Module', () => {
		// top-level specs: i.e., routes, injection, naming
		it('Cart component should be visible when navigates to /cart', () => {
			$location.url('/');
			$rootScope.$digest();
			expect($state.current.component).to.eq('cart');
		});
	});

	describe('Controller', () => {
		// controller specs
		let controller;
		beforeEach(() => {
			controller = $componentController('cart', {
				$scope: $rootScope.$new()
			});
		});

		it('has a name property', () => { // erase if removing this.name from the controller
			expect(controller).to.have.property('name');
		});
	});

	describe('View', () => {
		// view layer specs.
		let scope, template;

		beforeEach(() => {
			scope = $rootScope.$new();
			template = $compile('<cart></cart>')(scope);
			scope.$apply();
		});

		it('has name in template', () => {
			expect(template.find('h1').html()).to.eq('Found in cart.html');
		});

	});
});
