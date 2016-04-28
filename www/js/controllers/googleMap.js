controllers.controller('googleMapCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {

    var data = $location.search();
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: parseFloat(data.latitude)
                , lng: parseFloat(data.longitude)
            }
            , zoom: 19
        });

        var marker = new google.maps.Marker({
            map: map,
            position: {
                lat: parseFloat(data.latitude)
                , lng: parseFloat(data.longitude)
            },
        });
    }

    initMap()
}])