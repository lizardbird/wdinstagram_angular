angular.module('wdinstagram')
.controller('WdiNew', [
  '$state',
  'Entries',
  WdiNew
])

function WdiNew ($state, Entries) {
  this.entry = new Entries()
  this.create = function () {
    this.entry.$save(() => {
      $state.go('entriesIndex')
    })
  }
}
