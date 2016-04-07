var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService) {

$scope.getData = function() {
    parseService.getData().then(karamFilter).then(function(response) {
        $scope.messages = response;

    });
}
$scope.postData = function() {
    parseService.postData($scope.message).then(function() {
        $scope.message = "";
        $scope.getData();
    })
};

setInterval(function() {
    $scope.getData();
}, 1500)

$scope.formatDate = function(dateString) {
    return new Date(dateString).toLocaleString();
}

var karamFilter = function(response) {
    // var repeatedWords =/([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]+)\s+\1(?:\s|$)/gi;
    for (var i = 0; i < response.length; i++) {
        if (!response[i].text) {
            response.splice(i, 1);
            i--;
        }
        // else if (response[i].text.match(repeatedWords) {
        else if (response[i].text.toLowerCase().indexOf("karam") > -1) {
            response.splice(i, 1);
            i--;
        }

}

// console.log(response);
return response;
}



//end
})
