class TransactionDetailsController {
  constructor(Admin) {
    this.name = 'transactionDetails';
    this.importedTrans = '';
    this.Admin = Admin;
    this.editMode = false;
  }
  initiateEdit(id) {
    this.editMode = true;
  }
  cancelEdit() {
    this.editMode = false;
  }
  saveEdit(transID) {
    console.log(transID)
    this.Admin.editTransaction(transID);
  }
}

TransactionDetailsController.$inject = ['Admin'];

export default TransactionDetailsController;
