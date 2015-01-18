angular.module('ngKonami', []).
  directive('ngKonami', function(){
    return {
      scope: true,
      link: function (scope, element, attrs) {
        var konami_stack = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        var next_position = 0;

        element.bind("keydown", (function(e) {
          if(e.keyCode == konami_stack[next_position] && next_position < 9) {
            next_position += 1;
          } else if (e.keyCode == konami_stack[next_position]) {
            scope.$apply(function(){
              scope.$eval(attrs.ngKonami);
            });
          } else {
            next_position = 0;
          }
        }));
      }
    }
  });