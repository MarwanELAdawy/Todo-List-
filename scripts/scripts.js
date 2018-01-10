var app = angular.module('toDo', []);

app.controller('TodoCtrl', ["$scope" , "validation", function($scope, validation) {
  $scope.comments = [];
   $scope.add = true;
   $scope.edit = true;
   var count = null;
   $scope.inputBox = '';
  $scope.add_comment = function(){

    if( validation.isElementInArray($scope.inputBox, $scope.comments) ){
      $scope.error_msg = " ";
      $scope.comments.push($scope.inputBox);
      $scope.inputBox = '';

    }
    else{
  
      $scope.error_msg = "Name can't be Same";
    }
  };
  $scope.edit_comment = function($index){
    if( validation.isElementInArray($scope.inputBox, $scope.comments) ){
      $scope.comments[count] = $scope.inputBox;
      $scope.inputBox = '';
      $scope.add = true;
      $scope.edit = true;
      $scope.error_msg = " ";
    }
    else{
      $scope.error_msg = "Name Already Exist!";
    }
  };
  $scope.removeItem = function($index){
    $scope.comments.splice($index, 1);
  };
  $scope.edit_theName = function($index){
    $scope.inputBox = $scope.comments[$index];
    $scope.add = false;
    $scope.edit = false;
    count = $index;
  };
  

}]);
app.factory("validation", function(){
  var validate = {};
    validate.isElementInArray = function(value, arr){
        if ( ($.inArray(value, arr) == -1 )  && (value !=='') ){
          return true;
        }else{
          return false;
        }
    };
    
    return validate;
});
