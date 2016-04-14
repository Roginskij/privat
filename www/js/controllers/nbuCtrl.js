controllers.controller('nbuCtrl', ['$scope', 'queryPB', function ($scope, queryPB) {

    $scope.nbu = {
        yers: 2015
    }

    $scope.getNbu = function () {
        var nbuData = $scope.nbu.yers;
        queryPB.getNbu(nbuData).then(function (data) {
            $scope.nbuData = data;
        })
    }

}])