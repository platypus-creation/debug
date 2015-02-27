(function() {
    'use strict';
    var app = angular.module('platypus.debug', [
        'platypus.jsonviewer'
    ]);

    app.directive('debug', function(){
        var listenKeypress = function(){
            angular.element(document.body).on('keypress', function(e){
                if (e.charCode === 68 && e.shiftKey &&
                ['INPUT', 'SELECT', 'TEXTAREA'].indexOf(e.target.tagName) < 0 &&
                angular.element(e.target).attr('contenteditable') !== 'true') {
                    angular.element(document.body).toggleClass('showDebug');
                    angular.element(document).triggerHandler('debugToggle');
                }
            });
        };
        if(document.readyState === "complete") {
            listenKeypress();
        } else {
            angular.element(window).on('load', listenKeypress);
        }
        return {
            restrict: 'E',
            template: '<div json-viewer="debugData"></div>',
            scope: {
                data: '='
            },
            link: function(scope) {
                scope.debugData = null;
                angular.element(document).bind('debugToggle', function() {
                    if (scope.debugData === null){
                        scope.debugData = scope.data;
                    } else {
                        scope.debugData = null;
                    }
                    scope.$apply();
                });
            }
        };
    });
})();