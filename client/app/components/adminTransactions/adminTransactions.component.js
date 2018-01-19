import template from './admintransactions.html';
import controller from './admintransactions.controller';
import './admintransactions.scss';

let admintransactionsComponent = {
  bindings: {
    transactionList: '<',
  },
  template,
  controller
};

export default admintransactionsComponent;
