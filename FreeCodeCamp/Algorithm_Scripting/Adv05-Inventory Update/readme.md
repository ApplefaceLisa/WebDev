# Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

# Solution
```Javascript

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var result = arr2.reduce(function(acc2, subarr2) {
    var indexOfCur = arr1.reduce(function(acc1, subarr1, index) {
      if (subarr2[1] === subarr1[1]) {
        acc1 = index;
      }
      return acc1;
    }, -1);
    
    if (indexOfCur === -1) {
      acc2.push(subarr2);
    } else {
      acc2[indexOfCur][0] += subarr2[0];
    }
    return acc2;
  }, arr1);
  
  return result.sort(function(el1, el2) {
    if (el1[1] < el2[1]) {
      return -1;
    } 
    if (el1[1] > el2[1]) {
      return 1;
    }
    return 0;
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

```

## Explanation
For each item of new inventory list, find it's index in current inventory list. If index = -1, means the curInv didn't have this item, just add this item to curInv array. If index != -1, means the curInv had this item, then update the inventory quantity by add newInv to curInv.

Then sort curInv by alphabetical order of items.

# Knowledge
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
