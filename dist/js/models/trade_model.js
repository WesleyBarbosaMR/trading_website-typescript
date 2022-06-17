export class Trade {
    #dateTransaction;
    #amount;
    #cost;

    constructor(dateTransaction, amount, cost) {
        this.#dateTransaction = dateTransaction;
        this.#amount = amount;
        this.#cost = cost;
    }

    get data() {
        return this.#dateTransaction;
    }

    get amount() {
        return this.#amount;
    }

    get cost() {
        return this.#cost;
    }

    get volume() {
        return this.#amount * this.#cost;
    }
    
}