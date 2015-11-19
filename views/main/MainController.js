'use strict';
(function () {
  var injectParams = [];
  var factory = function () {
    console.log('Inside main controller');
  };

  factory.$inject = injectParams;

  angular.module('invoiceApp').controller('MainController', factory);
}());
