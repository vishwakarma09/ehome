angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.google', {
    url: '/google',
    views: {
      'side-menu21': {
        templateUrl: 'templates/google.html',
        controller: 'googleCtrl'
      }
    }
  })

  .state('menu.facebok', {
    url: '/facebook',
    views: {
      'side-menu21': {
        templateUrl: 'templates/facebok.html',
        controller: 'facebokCtrl'
      }
    }
  })

  .state('menu.twitter', {
    url: '/twitter',
    views: {
      'side-menu21': {
        templateUrl: 'templates/twitter.html',
        controller: 'twitterCtrl'
      }
    }
  })

  .state('pinterest', {
    url: '/pinterest',
    templateUrl: 'templates/pinterest.html',
    controller: 'pinterestCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});