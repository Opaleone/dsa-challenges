const obj = {
  a: 1,
  b: 2,
  c: 3
}

const obj2 = {
  ...obj,
  a: 0
}

console.log(obj2.a, obj2.b);


class Rain {
  static minRainfall() {
    return 60;
  }
}

let cur = new Rain();

cur.minRainfall = 80;

console.log(cur.minRainfall);