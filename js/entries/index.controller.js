angular.module('wdinstagram')
.controller('WdiIndex', [WdiIndex])
function WdiIndex () {
  this.entries = [
    {
      photo_url: '123.png',
      author: 'Liz',
      body: 'Hey',
      id: 0
    },
    {
      photo_url: '145.png',
      author: 'Mike',
      body: 'Hello',
      id: 1
    }
  ]
}
