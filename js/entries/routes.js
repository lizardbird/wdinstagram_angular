angular.module('wdinstagram')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  config
])

function config ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('entriesIndex', {
      url: '/entries',
      templateUrl: 'js/entries/index.html',
      controller: 'WdiIndex',
      controllerAs: 'vm'
    })
    .state('entriesNew', {
      url: '/entries/new',
      templateUrl: 'js/entries/new.html',
      controller: 'WdiNew',
      controllerAs: 'vm'
    })
    .state('entriesShow', {
      url: '/entries/:id',
      templateUrl: 'js/entries/show.html',
      controller: 'WdiShow',
      controllerAs: 'vm'
    })
    .state('entriesEdit', {
      url: '/entries/:id/edit',
      templateUrl: 'js/entries/edit.html',
      controller: 'WdiEdit',
      controllerAs: 'vm'
    })
  }
