class TradingBot {
  constructor(initialBalance) {
    this.balance = initialBalance;
    this.position = null;  // To track if we currently own stock
    this.stockPriceHistory = [];
  }

  // A simple trading strategy: Buy low, sell high
  applyStrategy(currentPrice) {
    if (this.position) {
      const increaseThreshold = this.position.buyPrice * 1.03;  // Sell when 3% increase
      if (currentPrice >= increaseThreshold) {
        this.sell(currentPrice);
      }
    } else {
      if (this.stockPriceHistory.length > 0) {
        const recentPrice = this.stockPriceHistory[this.stockPriceHistory.length - 1];
        const decreaseThreshold = recentPrice * 0.98;  // Buy when 2% decrease
        if (currentPrice <= decreaseThreshold) {
          this.buy(currentPrice);
        }
      }
    }
    this.stockPriceHistory.push(currentPrice);
  }

  buy(price) {
    this.position = {
      buyPrice: price,
      time: new Date(),
    };
    console.log(`Bought at $${price}`);
  }

  sell(price) {
    const profit = price - this.position.buyPrice;
    this.balance += profit;
    console.log(`Sold at $${price}, Profit: $${profit}`);
    this.position = null;
  }

  getBalance() {
    return this.balance;
  }
}

export default TradingBot;