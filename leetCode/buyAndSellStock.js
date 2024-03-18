/*

121. Best Time to Buy and Sell Stock


You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

const prices = [7,1,5,3,6,4];
// expect(res).toBe(5)

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
      if (prices[buy] < prices[sell]) {
          let profit = prices[sell] - prices[buy];
          maxProfit = Math.max(maxProfit, profit);
      } else {
          buy = sell;
      }
      sell++
  }
  return maxProfit;
};

const res = maxProfit(prices);

console.log(res);