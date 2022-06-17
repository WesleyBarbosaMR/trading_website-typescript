export class Trade {
    private _dateTransaction;
    private _amount;
    private _cost;

    constructor(dateTransaction, amount, cost) {
        this._dateTransaction = dateTransaction;
        this._amount = amount;
        this._cost = cost;
    }

    get data() {
        return this._dateTransaction;
    }

    get amount() {
        return this._amount;
    }

    get cost() {
        return this._cost;
    }

    get volume() {
        return this._amount * this._cost;
    }
    
}