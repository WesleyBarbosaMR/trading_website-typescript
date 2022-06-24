export class Trade {
    /*private _dateTransaction: Date;
    private _amount: number;
    private _cost: number;

    constructor(dateTransaction: Date, amount: number, cost: number) {
        this._dateTransaction = dateTransaction;
        this._amount = amount;
        this._cost = cost;
    }*/
    constructor(_dateTransaction, _amount, _cost) {
        this._dateTransaction = _dateTransaction;
        this._amount = _amount;
        this._cost = _cost;
    } //Simplifying the creation of class properties using TypeScript features.
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
