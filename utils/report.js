import botState from '../models/botState.js';

export const generateReport = () => {
  console.log("----- Trading Bot Summary -----");
  console.log(`Final Balance: $${botState.balance.toFixed(2)}`);
  
  if (botState.trades.length === 0) {
    console.log("No trades were made.");
  } else {
    console.log("Trades Made:");
    botState.trades.forEach((trade, index) => {
      console.log(`${index + 1}. ${trade.type} at $${trade.price.toFixed(2)}, Time: ${trade.time}`);
    });
  }
};