# Steamroller
### Question Description
Flatten a nested array. You must account for varying levels of nesting.

For example:
steamrollArray([1, [2], [3, [[4]]]]);   ====> should return [1,2,3,4].

### Solution
- Basic
  - Code
  ```JavaScript
  function steamrollArray(arr) {
    var flattenArray = [];
    function flatten(arg) {
      if (!Array.isArray(arg)) {
        flattenArray.push(arg);
      } else {
        for (var i in arg) {
          flatten(arg[i]);
        }
      }
    }

    arr.forEach(flatten);
    return flattenArray;
  }

  // testcase
  steamrollArray([1, [2], [3, [[4]]]]);
  ```
  - use [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

- Intermediate
  - Code
  ```JavaScript
  function steamrollArray(arr) {
    return arr.reduce(function(flattenArray, arg) {
      return flattenArray.concat(Array.isArray(arg) ? steamrollArray(arg) : arg );
    }, []);
  }

  // testcase
  steamrollArray([1, [2], [3, [[4]]]]);
  ```

  - use methods
    - [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
    - [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
