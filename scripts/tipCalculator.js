// Calculator for tipping
var preTipTotal = 25.98;
var tipPercentage = 10;
var tip = preTipTotal / tipPercentage;
var total = preTipTotal + tip;
console.log("Your total bill, including a tip of: £" + tip.toFixed(2) + ", is: £" + total.toFixed(2));