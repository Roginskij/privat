controllers.controller('banksCtrl', ['$scope', 'queryPB', '$ionicPopup', '$ionicModal', function ($scope, queryPB, $ionicPopup, $ionicModal) {

    $ionicModal.fromTemplateUrl('banksModal', {
        scope: $scope
        , animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (data) {
        $scope.fullContentBank = data;
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.showAlert = function (template) {
        var alertPopup = $ionicPopup.alert({
            title: ' Упсс...'
            , template: template
        });
    };

    $scope.adress = {
        city: ''
        , street: ''
    }

    $scope.getBanks = function () {
        var adress = '&city=' + $scope.adress.city;

        if (/[a-zA-Z]/.test($scope.adress.city)) {
            $scope.showAlert('Введите русские буквы');
            return false
        } else if (/[a-zA-Z]/.test($scope.adress.street)) {
            $scope.showAlert('Введите русские буквы');
            return false
        }

        if ($scope.adress.street && $scope.adress.city) {
            adress += '&address=' + $scope.adress.street;
            queryPB.getBank(adress).then(function (data) {
                $scope.banks = data;
            })
        } else if ($scope.adress.city) {
            queryPB.getBank(adress).then(function (data) {
                $scope.banks = data;
            })
        } else {
            $scope.showAlert('Введите название города!');
        }

    }
}])