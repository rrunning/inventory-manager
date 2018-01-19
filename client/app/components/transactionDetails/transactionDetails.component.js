import template from './transactionDetails.html';
import controller from './transactionDetails.controller';
import './transactionDetails.scss';

let transactionDetailsComponent = {
  bindings: {
    transaction: '<',
  },
  template,
  controller
};

export default transactionDetailsComponent;
