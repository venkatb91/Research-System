
tradesApp.controller('tradesController',['$scope','$http','tradesService', '$q', function($scope,$http, tradesService, $q){
    
    $scope.gridOptions = {
        enableFullRowSelection: true,
        enableRowSelection: true,
        multiSelect: false,
        data: tradesService.getTrades()
    };
    
        
}]);

