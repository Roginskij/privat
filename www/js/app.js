// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'controllers', 'services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {
  $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
      })
    .state('app.dashboard', {
          url: '/dashboard',
          views: {
            'menuContent': {
              templateUrl: 'templates/dashboard.html',
              controller: 'dashboardCtrl'
            }
          }
        })
    .state('app.valute', {
          url: '/valute',
          views: {
            'menuContent': {
              templateUrl: 'templates/valute.html',
              controller: 'valuteCtrl'
            }
          }
        })
    .state('app.banks', {
        url: '/banks',
        views: {
          'menuContent': {
            templateUrl: 'templates/banks.html',
            controller: 'banksCtrl'
          }
        }
      })
      .state('app.bankomats', {
        url: '/bankomats',
        views: {
          'menuContent': {
            templateUrl: 'templates/bankomats.html',
            controller: 'bankomatsCtrl'
          }
        }
      }) 
      .state('app.terminal', {
        url: '/terminal',
        views: {
          'menuContent': {
            templateUrl: 'templates/terminal.html',
            controller: 'terminalCtrl'
          }
        }
      })
      .state('app.bankMfo', {
        url: '/bankMfo',
        views: {
          'menuContent': {
            templateUrl: 'templates/bankMfo.html',
            controller: 'bankMfoCtrl'
          }
        }
      })
      .state('app.nbu', {
        url: '/nbu',
        views: {
          'menuContent': {
            templateUrl: 'templates/nbu.html',
            controller: 'nbuCtrl'
          }
        }
      })


    ;
  $urlRouterProvider.otherwise('/app/dashboard');
}]);
