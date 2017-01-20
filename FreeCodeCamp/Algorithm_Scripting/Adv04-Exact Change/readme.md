# Exact Change

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

# Solution
```Javascript
var unitObjArr = [
    {name : "ONE HUNDRED", val : 100},
    {name : "TWENTY", val : 20},
    {name : "TEN", val : 10},
    {name : "FIVE", val : 5},
    {name : "ONE", val : 1},
    {name : "QUARTER", val : 0.25},
    {name : "DIME", val : 0.1},
    {name : "NICKEL", val : 0.05},
    {name : "PENNY", val : 0.01}
  ];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var result = null;
  
  var register = cid.reduce(function(acc, subarr) {
    acc.total += subarr[1];
    acc[subarr[0]] = subarr[1];
    return acc;
  }, {total:0});

  if (register.total < change) {
    return "Insufficient Funds";
  } 
  if (register.total === change) {
    return 'Closed';
  }
  
  var changeArr = unitObjArr.reduce(function(acc, obj) {
    var val = 0;
    while (register[obj.name] > 0 && change >= obj.val) {
      val += obj.val;
      register[obj.name] -= obj.val;
      change -= obj.val;
      
      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    if (val > 0) {
      acc.push([obj.name, val]);
    }
    return acc;
  }, []);
  
  if (changeArr.length < 1 || change > 0) {
    return 'Insufficient Funds';
  }
  
  // Here is your change, ma'am.
  return changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// test case
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
```
### Test case
- checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 

should return [["QUARTER", 0.50]].

- checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 

should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

- checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 

should return "Insufficient Funds".

- checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 

should return "Insufficient Funds".

- checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 

should return "Closed".

# Note
**Beware all numbers in Javascript are float!!! And the precision errors. **


# Reference
- FCC [Algorithm Exact Change](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Exact-Change)
- FCC [JS Reduce Made Easy](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-Reduce-Made-Easy)
