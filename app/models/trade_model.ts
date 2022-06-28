export class Trade {
    constructor(private _dateTransaction: Date, private _amount: number, private _cost: number) {}

    get data(): Date {
        return this._dateTransaction;
    }

    get amount(): number {
        return this._amount;
    }

    get cost(): number {
        return this._cost;
    }

    get volume(): number {
        return this._amount * this._cost;
    }
    
}