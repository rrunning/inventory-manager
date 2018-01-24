import template from './transactionDetails.html';
import controller from './transactionDetails.controller';
import './transactionDetails.scss';

let transactionDetailsComponent = {
  bindings: {
    importedTrans: '<',
  },
  template,
  controller
};

export default transactionDetailsComponent;
