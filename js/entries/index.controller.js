angular.module('wdinstagram')
.controller('WdiIndex', [
  'Entries',
  WdiIndex])
function WdiIndex (Entries) {
  this.entries = Entries.query()
}
