function elements(a, b) {
  return [a + b, (a + b) / 2, a - b];
}
let [sum, avg, diff] = elements(20, 10);
console.log(sum, avg, diff);
