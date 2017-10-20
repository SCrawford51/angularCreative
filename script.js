const googleKey = "AIzaSyAxGH5zZbUiYeX8IalIM8Fqmk0J1Ptodpc";
const miles = 25;
var lat;
var long;

// location has to be in the format of ut-provo
angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $http) {
        apikey = '220dcd61170e58ade5c6016e96164b07'
        console.log('new');
        $scope.request = function (user) {
            city = user.location
            googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
            googleUrl += city;
            googleUrl += "&key=" + googleKey;
            $.ajax({
                url: googleUrl,
                dataType: "json",
                success: function (parsed_json) {
                    console.log(parsed_json);
                    lat = parsed_json.results[0].geometry.location.lat;
                    long = parsed_json.results[0].geometry.location.lng;
                    coord = lat + "," + long + "," + miles;
                    console.log(coord);
                    myurl = 'https://api.betterdoctor.com/2016-03-01/practices?location=' + coord + '&skip=0&limit=10&user_key=' + apikey;
                    console.log(myurl);
                    $http.get(myurl)
                        .then(function (response) {
                            $scope.myWelcome = response.data;
                        });
                }
            });

        };
    });
