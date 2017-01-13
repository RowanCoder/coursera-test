(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.inputText = "";
  var message;

  $scope.checkTooMuch = function(){
    //see how mnay items are in inputText.
    var it = $scope.inputText;
    if (it == "") message = "Please enter data first";
    else {
      var elements = it.split(",");
      if (elements.length > 3) {
        message = "Too Much!";
      } else {
        message = "Enjoy!";
      }
    }
  }

  $scope.sayMessage = function() {
    return message;
  };
}

})();
