controllers.controller('bankomatsCtrl', ['$scope', 'queryPB', '$ionicModal', '$ionicPopup', '$location', function ($scope, queryPB, $ionicModal, $ionicPopup, $location) {

    $scope.showAlert = function (template) {
        var alertPopup = $ionicPopup.alert({
            title: ' Упсс...'
            , template: template
        });
    };

    $ionicModal.fromTemplateUrl('bankomatsModal', {
        scope: $scope
        , animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (data) {
        $scope.bankomatContent = data;
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.bankomats = {
        city: ''
        , street: ''
    }

    $scope.getBankomat = function () {
        var bankomats = '&city=' + $scope.bankomats.city;
        
        if (/[a-zA-Z]/.test($scope.bankomats.city)) {
            $scope.showAlert('Введите русские буквы');
            return false
        }
        
        if ($scope.bankomats.street && $scope.bankomats.city) {
            bankomats = '&address=' + $scope.bankomats.street + '&city=' + $scope.bankomats.city;
            queryPB.getBankomat(bankomats).then(function (data) {
                $scope.bankomats = data;
            })
        } else if ($scope.bankomats.city) {
            queryPB.getBankomat(bankomats).then(function (data) {
                $scope.bankomats = data;
            })
        } else {
            $scope.showAlert('Введите название города!');
        }
    }
    $scope.mapPosition = function (data) {
        $scope.modal.hide();
        $location.path('/app/googleMap').search(data);
    };
}])