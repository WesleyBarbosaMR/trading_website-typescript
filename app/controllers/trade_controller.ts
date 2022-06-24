import { Trade } from "../models/trade_model.js";
import { TradesList } from '../models/trades_list_model.js';

export class TradeController{
    private _inputDate: HTMLInputElement;
    private _inputAmount: HTMLInputElement;
    private _inputCost: HTMLInputElement;
    private trades = new TradesList();

    constructor() {
        this._inputDate = document.querySelector('#_inputDate');
        this._inputAmount = document.querySelector('#_inputAmount');
        this._inputCost = document.querySelector('#_inputCost');
    }

    createTransaction(): Trade {
        const exp = /-/g;
        const date = new Date(this._inputDate.value.replace(exp, ','));
        const amount = parseInt(this._inputAmount.value);
        const cost = parseFloat(this._inputCost.value);
        return new Trade(date, amount,cost);
    }

    addTransaction(): void {
        const newTrade = this.createTransaction();
        this.trades.addTrade(newTrade);
        console.log(this.trades.listTrades());
        this.cleanForm();
    }

    cleanForm(): void {
        this._inputDate.value = '';
        this._inputAmount.value = '';
        this._inputCost.value = '';
        this._inputDate.focus();

    }
}