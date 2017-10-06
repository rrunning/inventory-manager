import ProductdetailsModule from './productdetails'

describe('Productdetails', () => {
	let $rootScope, $state, $location, $componentController, $compile;

	beforeEach(window.module(ProductdetailsModule));

	beforeEach(inject(($injector) => {
		$rootScope = $injector.get('$rootScope');
		$componentController = $injector.get('$componentController');
		$state = $injector.get('$state');
		$location = $injector.get('$location');
		$compile = $injector.get('$compile');
	}));

	describe('Module', () => {
		// top-level specs: i.e., routes, injection, naming
		it('Productdetails component should be visible when navigates to /productdetails', () => {
			$location.url('/productdetails');
			$rootScope.$digest();
			expect($state.current.component).to.eq('productdetails');
		});
	});

	describe('Controller', () => {
		// controller specs
		let controller;
		beforeEach(() => {
			controller = $componentController('productdetails', {
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
			template = $compile('<productdetails></productdetails>')(scope);
			scope.$apply();
		});

		it('has name in template', () => {
			expect(template.find('h1').html()).to.eq('productdetails');
		});

	});
});
