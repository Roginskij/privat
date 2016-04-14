controllers.controller('bankMfoCtrl', ['$scope', 'queryPB', '$ionicModal', '$ionicPopup', function ($scope, queryPB, $ionicModal, $ionicPopup) {

    $scope.showAlert = function (template) {
        var alertPopup = $ionicPopup.alert({
            title: ' Упсс...'
            , template: template
        });
    };


    $ionicModal.fromTemplateUrl('bankMfosModal', {
        scope: $scope
        , animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (data) {
        $scope.bankMfoContent = data;
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.bankMfo = {
        number: ''
    }

    $scope.getBankMfo = function () {
        var mfo = $scope.bankMfo.number;
        
        if (/[a-zA-Zа-яА-Я]/.test($scope.bankMfo.number)) {
            $scope.showAlert('Введите цифры!');
            return false
        }
        
        if ($scope.bankMfo.number != '') {
            queryPB.getBankMfo(mfo).then(function (data) {
                $scope.banksMfo = data;
            })
        } else {
            $scope.showAlert('Введите номер МФО')
        }
    }

}])