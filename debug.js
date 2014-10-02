(function() {
    'use strict';
    var app = angular.module('platypus.debug', [
        'platypus.jsonviewer'
    ]);

    app.directive('debug', function($window){
        $($window).on('load', function(){
            $(document.body).on('keypress', function(e){
                if (e.charCode == 68 && e.shiftKey && !$(e.target).is('input, select, textarea') && $(e.target).attr('contenteditable') !== 'true') { //D
                    $(document.body).toggleClass('showDebug');
                    $(document).trigger('debugToggle');
                }
            });
        });
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