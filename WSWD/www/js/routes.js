angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('logged', {
    url: '/page1',
    templateUrl: 'templates/logged.html',
    abstract:true
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='logged.whereShallWeDance'
      2) Using $state.go programatically:
        $state.go('logged.whereShallWeDance');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab3/page8
      /page1/tab2/page8
      /page1/tab5/page8
  */
  .state('logged.whereShallWeDance', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/whereShallWeDance.html',
        controller: 'whereShallWeDanceCtrl'
      },
      'tab3': {
        templateUrl: 'templates/whereShallWeDance.html',
        controller: 'whereShallWeDanceCtrl'
      },
      'tab2': {
        templateUrl: 'templates/whereShallWeDance.html',
        controller: 'whereShallWeDanceCtrl'
      },
      'tab5': {
        templateUrl: 'templates/whereShallWeDance.html',
        controller: 'whereShallWeDanceCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='logged.yourProfile'
      2) Using $state.go programatically:
        $state.go('logged.yourProfile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab3/page10
      /page1/tab2/page10
  */
  .state('logged.yourProfile', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/yourProfile.html',
        controller: 'yourProfileCtrl'
      },
      'tab3': {
        templateUrl: 'templates/yourProfile.html',
        controller: 'yourProfileCtrl'
      },
      'tab2': {
        templateUrl: 'templates/yourProfile.html',
        controller: 'yourProfileCtrl'
      }
    }
  })

  .state('logged.soWhere', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/soWhere.html',
        controller: 'soWhereCtrl'
      }
    }
  })

  .state('logged.hereAreYourTopResults', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/hereAreYourTopResults.html',
        controller: 'hereAreYourTopResultsCtrl'
      }
    },
     params : {venues: null}
  })

  .state('logged.nameOfTheVenue', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/nameOfTheVenue.html',
        controller: 'nameOfTheVenueCtrl'
      }
    },
    params : {venue: null}
  })




  .state('logged.venueDetails', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/venueDetails.html',
        controller: 'venueDetailsCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='logged.favoritesVenues'
      2) Using $state.go programatically:
        $state.go('logged.favoritesVenues');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page15
      /page1/tab2/page15
  */
  .state('logged.favoritesVenues', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/favoritesVenues.html',
        controller: 'favoritesVenuesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/favoritesVenues.html',
        controller: 'favoritesVenuesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab5/page8')



});
