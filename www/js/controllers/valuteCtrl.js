controllers.controller('valuteCtrl', ['$scope', '$http', 'queryPB',  function ($scope, $http, queryPB) {
    queryPB.getValute().then(function (data) {
        $scope.valutes = data;
    });
    
    $scope.dateArch = {
        day: 1,
        month: 1,
        yers: 2014
    }
    
    $scope.getArch = function(){
        var date = $scope.dateArch.day + '.' + $scope.dateArch.month + '.' + $scope.dateArch.yers;
        queryPB.getArcValute(date).then(function(data){
            $scope.arcData = data;
        })
    }

}])