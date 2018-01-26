class AdmintransactionsController {
  constructor($state, Admin) {
    this.name = 'admintransactions';
    this.Admin = Admin;
    this.$state = $state;
    this.addNew = false;
    this.newTransaction = {
      subTransactions: [],
    };
    this.subTransaction = {};
  }
  viewTransactionDetails(id) {
    // console.log(id)
    this.$state.go('transactionDetails', {id});
  }
  addNewTransaction() {
    this.addNew = true;
  }
  submitNewTransaction() {
    console.log(this.newTransaction);
    console.log(this.subTransaction);
    this.newTransaction.subTransactions.push(this.subTransaction);
    console.log(this.newTransaction);
    this.Admin.createTransaction(this.newTransaction).then(response =>{
      const createdTransaction = this.newTransaction;
      this.newTransaction = {};
    })
  }
}

AdmintransactionsController.$inject = ['$state', 'Admin'];

export default AdmintransactionsController;
