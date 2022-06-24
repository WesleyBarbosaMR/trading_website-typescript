export class Trade {
    /*private _dateTransaction: Date;
    private _amount: number;
    private _cost: number;

    constructor(dateTransaction: Date, amount: number, cost: number) {
        this._dateTransaction = dateTransaction;
        this._amount = amount;
        this._cost = cost;
    }*/
    constructor(private _dateTransaction: Date, private _amount: number, private _cost: number) {}//Simplifying the creation of class properties using TypeScript features.

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