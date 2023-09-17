/* 
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example:

    if coins = [5, 7, 1, 1, 2, 3, 22];

    Output will be:

    20
*/

const coins = [5, 7, 1, 1, 2, 3, 22];

const minimumCoinCreation = (coins) => {
  coins.sort((a, b) => a - b);

  let minimumCoin = 0;

  for (const coin of coins) {
    if (coin > minimumCoin + 1) return minimumCoin + 1;

    minimumCoin += coin;
  }

  return minimumCoin + 1;
}

console.log(minimumCoinCreation(coins));