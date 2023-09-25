// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
  // Solution 1
  //    With a For Loop

  let left = 0;
  let right = 1;
  let greatestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let profit = prices[right] - prices[left];

    if (profit > greatestProfit) {
      greatestProfit = profit;
      right++;
    } else if (prices[right] < prices[left]) {
      left = right;
      right = left + 1;
    } else {
      right++;
    }
  }

  return greatestProfit;

  // Solution 2
  //    With a While loop

  // let buy = 0;
  // let sell = 1;
  // let max = 0;

  // while (sell < prices.length) {
  //   if (prices[buy] < prices[sell]) {
  //     let profit = prices[sell] - prices[buy];

  //     max = Math.max(max, profit)
  //   } else {
  //     buy = sell;
  //   }
  //   sell++;
  // }

  // return max;
};
