﻿var services = angular.module('services', []);

services.constant('$', $);

services.factory('Hub', ['$', function ($) {
    return function (hubName, listeners, methods) {
        var Hub = this;
        Hub.connection = $.hubConnection();
        Hub.proxy = Hub.connection.createHubProxy(hubName);
        Hub.connection.start();

        Hub.on = function (event, fn) {
            Hub.proxy.on(event, fn);
        };

        Hub.invoke = function (method, args) {
            Hub.proxy.invoke.apply(Hub.proxy, arguments)
        };

        if (listeners) {
            angular.forEach(listeners, function (fn, event) {
                Hub.on(event, fn);
            });
        }

        if (methods) {
            angular.forEach(methods, function (method) {
                Hub[method] = function () {
                    var args = $.makeArray(arguments);
                    args.unshift(method);
                    Hub.invoke.apply(Hub, args);
                };
            });
        }

        return Hub;
    };
}]);