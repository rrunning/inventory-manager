import SignUpModule from './sign-up'

describe('SignUp', () => {
	let $rootScope, $state, $location, $componentController, $compile;

	beforeEach(window.module(SignUpModule));

	beforeEach(inject(($injector) => {
		$rootScope = $injector.get('$rootScope');
		$componentController = $injector.get('$componentController');
		$state = $injector.get('$state');
		$location = $injector.get('$location');
		$compile = $injector.get('$compile');
	}));

	describe('Module', () => {
		// top-level specs: i.e., routes, injection, naming
		it('SignUp component should be visible when navigates to /sign-up', () => {
			$location.url('/sign-up');
			$rootScope.$digest();
			expect($state.current.component).to.eq('sign-up');
		});
	});

	describe('Controller', () => {
		// controller specs
		let controller;
		beforeEach(() => {
			controller = $componentController('sign-up', {
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
			template = $compile('<sign-up></sign-up>')(scope);
			scope.$apply();
		});

		it('has name in template', () => {
			expect(template.find('h1').html()).to.eq('sign-up');
		});

	});
});
