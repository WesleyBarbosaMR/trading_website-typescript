import { Trade } from './trade_model.js';

export class TradesList {
    private trades: Array<Trade> = [];

    addTrade(trade: Trade) {
        this.trades.push(trade);
    }

    listTrades(): Array<Trade> {
        return [...this.trades];// [...<elements>](spread) add each element of the list in a array to prevent undue changes to data.
    }
}

/*const trades = new TradesList();
trades.listTrades().forEach(n => {
    n.volume;
    n.amount;
    n.cost;
    n.data;
});*/