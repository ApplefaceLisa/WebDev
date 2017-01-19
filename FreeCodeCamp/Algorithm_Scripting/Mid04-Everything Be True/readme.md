# Everything Be True

### Question Description
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.

### Solution
- Solution 1:
  ```JavaScript
  function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.reduce(function(truth, obj) {
      return (truth && obj.hasOwnProperty(pre) && Boolean(obj[pre]));
    }, true);
  }

  // test case
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  ```

- Solution 2:
  ```JavaScript
  function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(function(obj) {
      return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
    });
  }

  // test case
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  ```

**Reference**
- [What is the difference between .map, .every, and .forEach?](http://stackoverflow.com/questions/7340893/what-is-the-difference-between-map-every-and-foreach)
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- [Algorithm Everything Be True](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Everything-Be-True)

