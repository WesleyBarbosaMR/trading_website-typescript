export class Trade {
    constructor(_dateTransaction, _amount, _cost) {
        this._dateTransaction = _dateTransaction;
        this._amount = _amount;
        this._cost = _cost;
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
