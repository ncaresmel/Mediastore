'use strict';

angular.module('mediastoreApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
