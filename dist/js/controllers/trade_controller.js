import { Trade } from "../models/trade_model.js";
import { TradesList } from '../models/trades_list_model.js';
export class TradeController {
    constructor() {
        this.trades = new TradesList();
        this._inputDate = document.querySelector('#_inputDate');
        this._inputAmount = document.querySelector('#_inputAmount');
        this._inputCost = document.querySelector('#_inputCost');
    }
    createTransaction() {
        const exp = /-/g;
        const date = new Date(this._inputDate.value.replace(exp, ','));
        const amount = parseInt(this._inputAmount.value);
        const cost = parseFloat(this._inputCost.value);
        return new Trade(date, amount, cost);
    }
    addTransaction() {
        const newTrade = this.createTransaction();
        this.trades.addTrade(newTrade);
        console.log(this.trades.listTrades());
        this.cleanForm();
    }
    cleanForm() {
        this._inputDate.value = '';
        this._inputAmount.value = '';
        this._inputCost.value = '';
        this._inputDate.focus();
    }
}
