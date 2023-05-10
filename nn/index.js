R = require('ramda')

const rand = (high, low) => Math.random() * (high - low) + low
const randomPoints = R.range(0, 100).map(_ => rand(-1, 1))

console.log(randomPoints)
