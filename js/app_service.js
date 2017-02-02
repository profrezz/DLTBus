app.service('FetchService', function($http) {
    this.getWords = function (x) {
        var buslist;
        return $http.get("http://localhost/DLTBus/json/buslist.json"); ///.then(function (response) {
            //console.log(response.data);
            //buslist = response.data;
            //return "asdf";
        //});
        //return buslist;
    }

    this.getbus = function (x) {
        return x;
    }

});