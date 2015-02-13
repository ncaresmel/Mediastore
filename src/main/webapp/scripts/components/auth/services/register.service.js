'use strict';

angular.module('mediastoreApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


