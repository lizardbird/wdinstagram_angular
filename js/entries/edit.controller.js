angular.module('wdinstagram')
.controller('WdiEdit', [
  '$state',
  'Entries',
  WdiEdit])
function WdiEdit ($state, Entries) {
  this.entry = Entries.get({id: $state.params.id})
  this.update = function () {
    this.entry.$update({id: $state.params.id}).then(() => {
        $state.go('entriesIndex', {}, {reload: true})
      })
  }
  this.destroy = function () {
      this.entry.$delete({id: $state.params.id}).then(() => {
        $state.go('entriesIndex', {}, {reload: true})
      })
    }
}
