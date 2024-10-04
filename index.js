import dotenv from 'dotenv';
dotenv.config();
import { getMockStockPrice } from './services/stockPriceService.js';
import TradingBot from './strategies/movingAverage.js';
import { generateReport } from './utils/report.js';
import botState from './models/botState.js';

// Initialize Trading Bot with initial balance
botState.balance = Number(process.env.BOT_INITIAL_BALANCE) || 1000;
const tradingBot = new TradingBot(botState.balance);

// Simulate trading every 5 seconds
const runTradingBot = async () => {
  setInterval(async () => {
    const { price } = await getMockStockPrice();
    console.log(`Current Stock Price: $${price}`);
    
    tradingBot.applyStrategy(price);
    
    botState.balance = tradingBot.getBalance();
  }, 5000);
};

// Run the bot
runTradingBot();

// Exit after 1 minute and show report
setTimeout(() => {
  generateReport();
  process.exit(0);
}, 60000);