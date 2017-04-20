(function(){
  app.controller('RegisterController',['$scope', 'Authentication', function($scope, Authentication){
    $scope.userData = {
      username:'test',
      email: 'test@mail.com',
      password: 'test123'
    }

    $scope.register = function() {
    console.log($scope.userData);
    Authentication.register($scope.userData);
    // console.log($rootScope.message);
    }
  }]);
})()
