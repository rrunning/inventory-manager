import angular from 'angular';
import uiRouter from 'angular-ui-router';
import transactionDetailsComponent from './transactionDetails.component';

let transactionDetailsModule = angular.module('transactionDetails', [
  uiRouter
])

.component('transactionDetails', transactionDetailsComponent)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('transactionDetails', {
        url: '/transaction-details/:id',
        component: 'transactionDetails',
        resolve: {
          importedTrans: (Admin, $stateParams) => {
            return Admin.importedTransaction($stateParams.id).then (response => {
              return response.data;
            });
          },
        }
      });
  })


.name;

export default transactionDetailsModule;
