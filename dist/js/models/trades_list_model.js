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
