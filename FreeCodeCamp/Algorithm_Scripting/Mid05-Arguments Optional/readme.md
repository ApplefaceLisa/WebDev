# Arguments Optional
### Question Description

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Other examples:
- addTogether(2, 3) should return 5.
- addTogether(2)(3) should return 5.
- addTogether("http://bit.ly/IqT6zt") should return undefined.
- addTogether(2, "3") should return undefined.
- addTogether(2)([3]) should return undefined.

### Solution
```Javascript
function addTogether() {
  var args = Array.from(arguments); 
  if (args.length === 2) {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return args[0]+args[1];
    } else {
      return undefined;
    }
  }
  
  if (args.length === 1) {
    if (typeof args[0] === 'number') {
      return function(arg) {
        if (typeof arg === 'number') {
          return args[0]+arg;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
  
  // only consider 1 or 2 arguments case. ignore others.
  return [];
}

addTogether(2,3);
```
- **Note**
  - typeof undefined is undefined.

### Related Knowledge
- [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)



### Solution Reference
[Algorithm Arguments Optional](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Arguments-Optional)
