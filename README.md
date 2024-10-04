# Basic Trading Bot

This project simulates a basic trading bot for a hypothetical stock market. It monitors mock stock price changes and makes trades based on predefined strategies.

## Requirements
- Node.js
- Axios for HTTP requests
- dotenv for environment variables

## Features
- Monitors stock prices using mock data
- Implements a simple trading strategy (buy when the price drops by 2%, sell when it rises by 3%)
- Tracks profit/loss and displays a final report

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application: `npm start`.

## Environment Variables
- `BOT_INITIAL_BALANCE`: The initial balance for the bot to start with (default: 100).

## Trading Logic
The bot uses a moving average crossover strategy where:
- It buys when the price decreases by 2%.
- It sells when the price increases by 3%.

## Report
After 1 minute, the bot will stop and print a summary of trades and the final balance.
