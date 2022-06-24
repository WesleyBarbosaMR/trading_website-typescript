export class TradesList {
    constructor() {
        this.trades = [];
    }
    addTrade(trade) {
        this.trades.push(trade);
    }
    listTrades() {
        return [...this.trades]; // [...<elements>](spread) add each element of the list in a array to prevent undue changes to data.
    }
}
/*const trades = new TradesList();
trades.listTrades().forEach(n => {
    n.volume;
    n.amount;
    n.cost;
    n.data;
});*/ 
