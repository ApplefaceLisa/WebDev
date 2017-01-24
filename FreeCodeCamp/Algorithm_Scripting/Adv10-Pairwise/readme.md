# Pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
```
Index	0	  1	  2	  3	  4
Value	7	  9	  11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
```

## Basic idea

For each number (curr) in array, check if there exists another element, which equal to (arg - curr), and this pair has not been used before.


## Solution Code
```
function pairwise(arr, arg) {
  var pairArr = arr.slice();
  var result = pairArr.reduce(function(acc, el, index) {
    var s = arg - el;
    var i = pairArr.indexOf(s);
    if ( i !== -1 && i !== index) {
      acc += i + index;
      pairArr[i] = NaN;
      pairArr[index] = NaN;
    }
    return acc;
  }, 0);
  return result;
}

// test case
pairwise([1,4,2,3,0,5], 7);
```

## Problem met
Use for...in loop for an array will incur problems. Example:
```
var a = ["zero", "one", "two", "three"];
for (var i in a) {
  var sliced = a.slice(i + 1);
  console.log(sliced);
}

//
the console log gives: ["one", "two", "three"],[],[],[] instead of expected ["one", "two", "three"],["two", "three"],["three"],[].
```
The [reason](http://stackoverflow.com/questions/41821005/javascript-use-array-slice-in-a-loop-and-not-work-as-expected) is:
the 'i' in 'for...in' is String, not number. So i is '0','1','2','3', and i+1 will be '01','11','21','31'. When i be used as an index, it be coerced to number. That's why only first output looks correct.

For array iteration, should use for(var i = a; i < b; i++) loop.

## Related Knowledge
- Array.slice()
- Array.splice()
- Array.reduce()
