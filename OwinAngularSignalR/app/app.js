angular.module('app.controllers', ['SignalR'])
  .controller('mainController', ['$scope', 'Hub', function (scope, Hub) {

      var hub = new Hub('diagnosticHub', {
          'writeMessage': function (msg) {
              console.log(msg);
          }
      });

      console.log('initialised');
  }]);

angular.module('app', [
  'app.controllers'
]);
