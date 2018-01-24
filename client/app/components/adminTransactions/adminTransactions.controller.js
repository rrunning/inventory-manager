class AdmintransactionsController {
  constructor($state) {
    this.name = 'admintransactions';
    this.$state = $state;
    this.addNew = false;
  }
  viewTransactionDetails(id) {
    // console.log(id)
    this.$state.go('transactionDetails', {id});
  }
  addNewTransaction() {
    this.addNew = true;
  }
}

AdmintransactionsController.$inject = ['$state'];

export default AdmintransactionsController;
