// Given a function fn and a time in milliseconds t, return a debounced version of that function.

const debounce = (fn, t) => {
  let deb;
  return function(...args) {
    clearTimeout(deb);
    deb = setTimeout(() => fn(...args), t);
  }
}

let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}

// Function calling for testing
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 2);
setTimeout(() => dlog(2), 50);
setTimeout(() => dlog(1), 75);
setTimeout(() => dlog(2), 30);