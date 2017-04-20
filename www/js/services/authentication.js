(function(){
  app.factory('Authentication',['$location','$rootScope', '$firebaseObject', '$firebaseAuth', function($location, $rootScope, $firebaseObject, $firebaseAuth){
     var ref = firebase.database().ref();
     var auth = $firebaseAuth();
     var provider = new firebase.auth.GoogleAuthProvider();
     var myObject;


     myObject = {
       requireAuth: function() {
         return auth.$requreSignIn();
       },
       logout: function() {
         $rootScope.message = '';
         return auth.$signOut();
       },
       login: function(user) {
         auth.$signInWithEmailAndPassword(user.email, user.password)
          .then(function(user) {
            $rootScope.message = 'Succesfull login';
            // $location.path('/events');
          })
          .catch(function(error){
            $rootScope.message = error.message;
          });
       },
       register: function(user) {
         auth.$createUserWithEmailAndPassword(user.email, user.password)
          .then(function(regUser){
            $rootScope.message = 'Registration Succsesfull';
            var regRef = ref.child('users')
              .child(regUser.uid).set({
                date: firebase.database.ServerValue.TIMESTAMP,
                regUser: regUser.uid,
                username: user.username,
                email: user.email
              });
          }).catch(function(error){
            $rootScope.message = error.message;
          })
       },
       loginGoogle: function() {
         auth.$signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(user)
         }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
         });
      }
     }

     return myObject;

  }]);
})()
