(function(){


window.app = angular.module('starter', ['ionic','firebase', 'starter.controllers']);

// app.constant('FirebaseUrl', 'https://ionicle.firebaseio.com/')
// app.service('rootRef', ['FirebaseUrl', Firebase])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.run(['$rootScope','$location', function($rootScope, $location){
  $rootScope.message = 'Temp message'
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login',{
      url:'/login',
      templateUrl:'views/login/login.html',
      controller:'LoginController'
    })
    .state('register',{
      url:'/register',
      templateUrl:'views/register/register.html',
      controller:'RegisterController'
    })
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

})(window)
