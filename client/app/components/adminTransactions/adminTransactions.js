import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminTransactionsComponent from './adminTransactions.component';

let adminTransactionsModule = angular.module('adminTransactions', [
  uiRouter
])

.component('adminTransactions', adminTransactionsComponent)

.name;

export default adminTransactionsModule;
