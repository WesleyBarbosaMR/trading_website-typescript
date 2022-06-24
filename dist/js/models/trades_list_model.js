export class TradesList {
    constructor() {
        this.trades = [];
    }
    addTrade(trade) {
        this.trades.push(trade);
    }
    listTrades() {
        return this.trades;
    }
}
/*const trades = new TradesList();
trades.listTrades().forEach(n => {
    n.volume;
    n.amount;
    n.cost;
    n.data;
});*/ 
