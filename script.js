var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    apikey = '220dcd61170e58ade5c6016e96164b07'
    $scope.request = function (user) {
        location = user.location
        url = 'https://api.betterdoctor.com/2016-03-01/practices?location=' + location + '&skip=0&limit=10&user_key=' + apikey;
        $http.get(url)
            .then(function (response) {
                $scope.myWelcome = response.data;
            });
    };
});