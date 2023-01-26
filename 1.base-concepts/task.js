"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr;
  } else if (d == 0) {
    arr[0] = -b / 2 * a;
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = Number(percent) / 100 / 12;
  let credit = Number(amount) - Number(contribution);
    
  if (isNaN(credit)) {
    return !isNaN(credit)
  } else {
    let paymentMonth = credit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
    if (isNaN(paymentMonth)) {
      return !isNaN(paymentMonth)
    } else {
      let totalAmount = (paymentMonth * Number(countMonths)).toFixed(2);
      return Number(totalAmount);
    }
  }
}
