tradesApp.controller('tradesController',['$scope','tradesService','uiGridGroupingConstants', function($scope,tradesService,uiGridGroupingConstants){
    
    $scope.gridOptions = {
        treeRowHeaderAlwaysVisible:false,
        data: tradesService.getTrades(),
        columnDefs: [
            {name:'ID', field: 'TxnId'},
            {name:'Symbol', field:'Symbol',grouping: { groupPriority: 0 } },
            {name:'Action', field:'Action', grouping: { groupPriority: 1 }},
            {name:'Quantity', field:'Quantity'},
            {name:'Price', field:'Price'},
            {name:'Market Value', field:'MarketValue'}
        ],
        onRegisterApi: function( gridApi ) {
            $scope.gridApi = gridApi;
        }
    };
    
  $scope.expandAll = function(){
    $scope.gridApi.treeBase.expandAllRows();
  };
    
 $scope.toggleRow = function( rowNum ){
    $scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
 };
    
        
}]);