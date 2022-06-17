import { Trade } from "../models/trade_model.js";
export class TradeController {
    constructor() {
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
        console.log(newTrade);
    }
}
