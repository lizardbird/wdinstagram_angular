angular.module('wdinstagram')
.factory('Entries', [
  '$resource',
  entriesService
])
function entriesService( $resource ) {
  return $resource( 'http://localhost:3000/entries/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}
