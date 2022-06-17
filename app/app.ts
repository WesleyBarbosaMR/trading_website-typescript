import { Trade } from "./models/trade_model.js";

const trade = new Trade(new Date(), 10, 100);//Trade(dateTransaction, amount, cost)
console.log(trade.data);
console.log(trade.amount);
console.log(trade.cost);
console.log(trade.volume);
