
tradesApp.service('tradesService', function($resource){
  var tradesData = [];
  this.getTrades = function(){
      var tradesAPI = $resource("http://localhost:6060/trades", {},{query: {method: 'GET', isArray: true}});
      //var tradeData = tradesAPI.query();  
      tradesAPI.query(function (response) {
        angular.forEach(response, function (item) {
            tradesData.push(item);
        });
      });
      
    return tradesData;
 }
       
});
