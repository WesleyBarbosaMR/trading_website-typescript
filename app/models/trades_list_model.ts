import { Trade } from './trade_model.js';

export class TradesList {
    private trades: Array<Trade> = [];

    addTrade(trade: Trade) {
        this.trades.push(trade);
    }

    listTrades(): Array<Trade> {
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