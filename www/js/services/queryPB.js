services.factory('queryPB', ['$http', '$q', function ($http, $q) {
    var valute = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    var arcValute = "https://api.privatbank.ua/p24api/exchange_rates?json&date=";
    var bank = 'https://api.privatbank.ua/p24api/pboffice?json';
    var bankomat = 'https://api.privatbank.ua/p24api/infrastructure?json&atm';
    var terminal = 'https://api.privatbank.ua/p24api/infrastructure?json&tso';
    var bankMFO = 'https://api.privatbank.ua/p24api/bankinfo?json&bank=&mfo=';
    var nbu = 'https://api.buh.privatbank.ua/ratenbu.php?year='
    var gas = 'https://api.privatbank.ua/p24api/aviasstations?json&address=&state=Днепро';
    var gasPrice = 'https://api.privatbank.ua/p24api/aviasstations?json&price&region=30&type=А95';
    var pochtomat = 'https://bpk-postamat.privatbank.ua/api/GetPostamatsByServiceId?fmt=json&service=1';
   
    return {
        getValute: function () {
            var def = $q.defer();
            $http.get(valute).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getArcValute: function (data) {
            var def = $q.defer();
            $http.get(arcValute + data).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getBank: function (data) {
            var def = $q.defer();
            $http.get(bank + data).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getBankomat: function (data) {
            var def = $q.defer();
            $http.get(bankomat + data).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getTerminal: function () {
            var def = $q.defer();
            $http.get(terminal).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getBankMfo: function (data) {
            var def = $q.defer();
            $http.get(bankMFO + data).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getNbu: function (data) {
            var def = $q.defer();
            $http.get(nbu + data).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getGasAdress: function () {
            var def = $q.defer();
            $http.get(gas).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getGasPrice: function () {
            var def = $q.defer();
            $http.get(gasPrice).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
        getPochtomat: function () {
            var def = $q.defer();
            $http.get(pochtomat).success(function (data) {
                return def.resolve(data);
            })
            return def.promise;
        },
    }
}])