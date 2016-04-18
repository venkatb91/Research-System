var fs = require('fs');

var tradeObj = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
var trades = tradeObj.trades;
trades.sort(function(x, y){
    if(x.Symbol != y.Symbol){
        return compare(x.Symbol, y.Symbol);
    }
    if(x.Action != y.Action){
        return compare(x.Action, y.Action);
    }
    return compare(x.TxnId, y.TxnId);
});

function compare(x, y){
  if (x === y) {
    return 0;
  }
  return x > y ? 1 : -1;
}

console.log(trades);

fs.writeFile('output.json', JSON.stringify(trades), (err) => {
    if(err) throw err;
    console.log('Save successfull');
});