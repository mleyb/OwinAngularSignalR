var controllers = angular.module('controllers', ['services']);

controllers.controller('MainController', ['$scope', 'Hub', function (scope, Hub) {
    var hub = new Hub('diagnosticHub', {
        'writeMessage': function (msg) {
            console.log(msg);
        }
    });

    console.log('initialised');
}]);
