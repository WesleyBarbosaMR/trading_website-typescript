import { Trade } from './trade_model.js';

export class TradesList {
    private trades: Array<Trade> = [];

    addTrade(trade: Trade) {
        this.trades.push(trade);
    }

    listTrades(): ReadonlyArray<Trade> {
        return this.trades;
    }
}