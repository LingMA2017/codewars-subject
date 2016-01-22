// Description:

// Given a non-negative integer, return an array containing a list of independent digits in reverse order.

// Example:

// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  return String(n).split('').reverse().map(x=>Number(x))
}