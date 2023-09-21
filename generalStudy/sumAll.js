const sumAll = (num) => {
  if (num === 0) return 0;
  num += sumAll(num - 1);
  return num;
}

console.log(sumAll(3));