angular.module('app.controllers', [])


.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, $http) {
  //   $http.post("https://whereshallwedance.herokuapp.com/users/signup", { cache: true })
  //     .then(function(response){
        // $scope.email = response.data.email
        // $scope.password =
        // console.log(response)
        // console.log($scope.venues);
      // })


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('whereShallWeDanceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('yourProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('soWhereCtrl', ['$scope', '$stateParams', '$http', '$state',

function ($scope, $stateParams, $http, $state) {
console.log("Using soWhereCtrl");

  $scope.searchParams = {
    rhythm: '',
    zipCode: ''
  }
  console.log('here')
  $scope.search = function() {
    console.log('called')
    var backEnd = "https://whereshallwedance.herokuapp.com/venues?term=" + $scope.searchParams.rhythm + "&zip=" + $scope.searchParams.zipCode
        console.log($scope.searchParams)
    $http
          .get(backEnd, { cache: true })
          .then(function(response){
            $state.go('logged.hereAreYourTopResults', {venues: response.data})

          })
      }
    }
  ])

.controller('hereAreYourTopResultsCtrl', ['$scope', '$stateParams', '$http', '$state',
  function ($scope, $stateParams, $http, $state) {
    console.log('Using results controller')
      $scope.venues = $stateParams.venues
      console.log($scope.venues)
    }
])

.controller('nameOfTheVenueCtrl', ['$scope', '$stateParams', '$http', '$state',
function ($scope, $stateParams, $http, $state) {
  console.log($stateParams);
  $scope.venue = $stateParams.venue

}])

.controller('venueDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('favoritesVenuesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
