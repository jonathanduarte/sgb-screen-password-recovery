(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
angular.module('sgb-screen-password-recovery', ['megazord'])
    .controller('sgb-screen-password-recovery-controller', ['_router', '_screenParams', '_screen', '_data', '$scope','$ionicHistory',
                function(_router, _screenParams, _screen, _data, $scope, $ionicHistory){

        _screen.initialize($scope, _screenParams);
        $scope.params=_screenParams;
        
        //Screen template parameters
        $scope.$on('$ionicView.beforeEnter', function(){
            $scope.data = _data; 
            $scope.recover = {
                username: ''
            }; 
        })
        
        //Fire event to go to next screen
        $scope.goTo = function(event) {
            _router.fireEvent({
                name: event, 
                params: {}
            });
        };

        $scope.goBack = function() {
            $ionicHistory.goBack(); 
        }

        $scope.validateUser = function() {
            var data = {
                username: $scope.recover.username
            }

            if ($scope.data.processId) data.processId = $scope.data.processId; 

            _router.fireEvent({
                name: 'validateRecover', 
                params: data
            });     
        };

    }]);

},{}]},{},[1]);
