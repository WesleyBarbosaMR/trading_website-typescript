export class TradesList {
    constructor() {
        //private trades: Array<Trade> = [];
        this.trades = []; //Optimizing code with TypeScript features
    }
    addTrade(trade) {
        this.trades.push(trade);
    }
    //listTrades(): ReadonlyArray<Trade> {
    listTrades() {
        return this.trades;
    }
}
