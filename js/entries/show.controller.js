angular.module('wdinstagram')
.controller('WdiShow', [
  '$stateParams',
  'Entries',
  WdiShow])
function WdiShow ($stateParams, Entries) {
  this.entry = Entries.get({id: $stateParams.id})
}
