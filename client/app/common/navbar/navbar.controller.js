class NavbarController {
  constructor(Authentication) {
    this.name = 'navbar';
    this.Authentication = Authentication;
    this.username = '';
    this.setUserAs();
    // console.log(Authentication.user);
  }
  setUserAs() {
    this.username = this.Authentication.user.email;
  }
}

NavbarController.$inject = ['Authentication'];

export default NavbarController;
