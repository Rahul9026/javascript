const money = 1000
console.log(money) // 1000
const amount = new Number(3000)
console.log(amount) // [Number: 3000]

console.log(money.toString()) // '1000'
console.log(amount.toString()) // '3000'
console.log(money.toFixed(2)) // '1000.00'
console.log(amount.toFixed(2)) // '3000.00'
console.log(money.toExponential(2)) // '1.00e+3'
console.log(amount.toPrecision(4)) // '3000