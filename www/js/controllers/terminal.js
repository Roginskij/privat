controllers.controller('terminalCtrl', ['$scope', 'queryPB', '$ionicModal', '$ionicPopup', function ($scope, queryPB, $ionicModal, $ionicPopup) {

    $scope.showAlert = function (template) {
        var alertPopup = $ionicPopup.alert({
            title: ' Упсс...'
            , template: template
        });
    };
    
    $ionicModal.fromTemplateUrl('terminalsModal', {
        scope: $scope
        , animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (data) {
        $scope.terminalContent = data;
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.terminal = {
        city: ''
    }

    $scope.getTerminal = function () {

        if (/[a-zA-Z]/.test($scope.terminal.city)) {
            $scope.showAlert('Введите русские буквы');
            return false
        }

        if ($scope.terminal.city != '') {
            queryPB.getBankomat($scope.terminal.city).then(function (data) {
                $scope.terminals = data;
            })
        } else {
            $scope.showAlert('Введите название города!')
        }
    }

}])