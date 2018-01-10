class NavbarController {
  constructor(Authentication) {
    this.name = 'navbar';
    this.Authentication = Authentication;
    this.username = '';
    this.isAdmin = false;
    this.setUserAs();
    // console.log(Authentication.user);
    this.verifyAdmin();
  }
  setUserAs() {
    this.username = this.Authentication.user.email;
  }
  verifyAdmin() {
    if (this.Authentication.user.role === 'admin') {
      this.isAdmin = true;
    }
  }
}

NavbarController.$inject = ['Authentication'];

export default NavbarController;
