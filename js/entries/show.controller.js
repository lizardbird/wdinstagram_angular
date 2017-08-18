angular.module('wdinstagram')
.controller('WdiShow', [WdiShow])
function WdiShow () {
  this.entries = [
    {
      photo_url: '123.png',
      author: 'Liz',
      body: 'Hey'
    },
    {
      photo_url: '145.png',
      author: 'Mike',
      body: 'Hello'
    }
  ]
}
