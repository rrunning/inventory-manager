class AdmintransactionsController {
  constructor($state) {
    this.name = 'admintransactions';
    this.$state = $state;
  }
  viewTransactionDetails(id) {
    console.log(id)
    this.$state.go('transactionDetails', {id});
  }
}

AdmintransactionsController.$inject = ['$state'];

export default AdmintransactionsController;
