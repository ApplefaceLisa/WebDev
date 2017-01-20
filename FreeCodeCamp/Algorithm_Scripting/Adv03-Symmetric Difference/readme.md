# Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


# Solution
- [Algorithm Symmetric Difference](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Symmetric-Difference)

- my own solution
  ```Javascript
  function sym(args) {
    function symOfTwo(arr1, arr2) {
      function filterDiff(a1, a2) {
        return a1.filter(function(e) {
          return (a2.indexOf(e) === -1);
        });
      }

      return filterDiff(arr1, arr2).concat(filterDiff(arr2, arr1));
    }

    var argsArr = Array.from(arguments);
    var rst = new Set(argsArr.reduce(symOfTwo));  // remove duplicated elements come from sole input array.  
    return Array.from(rst);
  }

  sym([1, 2, 3], [5, 2, 1, 4]);
  ```

# Related Knowledge
- [Symmetric Difference](https://www.youtube.com/watch?v=PxffSUQRkG4)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
