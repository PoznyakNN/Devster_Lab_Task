/**
 * Created by RAZZKO on 19.01.2017.
 */

app.controller('AppCtrl', AppCtrl);
function AppCtrl ($scope, $http) {
    $http.get('js/clients.json').then(function (response) {
        $scope.users = response.data;
        $scope.showClient = $scope.users[0];
    }, function (response) {
        $scope.usersError = response.statusText
    });

    $scope.showDetails = function (client) {
        $scope.showClient = client;
        $scope.forTest = "Hello World!";
    };
}