import { Trade } from './trade_model.js';

export class TradesList {
    //private trades: Array<Trade> = [];
    private trades: Trade[] = [];//Optimizing code with TypeScript features

    addTrade(trade: Trade) {
        this.trades.push(trade);
    }

    //listTrades(): ReadonlyArray<Trade> {
    listTrades(): readonly Trade[] {//Optimizing code with TypeScript features
        return this.trades;
    }
}