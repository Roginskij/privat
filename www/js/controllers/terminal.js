controllers.controller('terminalCtrl', ['$scope', 'queryPB', '$ionicModal', '$ionicPopup', '$location', function ($scope, queryPB, $ionicModal, $ionicPopup, $location) {

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
        , street: ''
    }

    $scope.getTerminal = function () {
        var terminal = '&city=' + $scope.terminal.city;

        if (/[a-zA-Z]/.test($scope.terminal.city)) {
            $scope.showAlert('Введите русские буквы');
            return false
        }

        if ($scope.terminal.street && $scope.terminal.city) {
            terminal = '&address=' + $scope.terminal.street + '&city=' + $scope.terminal.city;
            queryPB.getBankomat(terminal).then(function (data) {
                $scope.terminals = data;
            })
        } else if ($scope.terminal.city) {
            queryPB.getBankomat(terminal).then(function (data) {
                $scope.terminals = data;
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