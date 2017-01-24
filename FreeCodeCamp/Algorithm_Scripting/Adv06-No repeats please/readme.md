# No repeats please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

## permutation-generating algorithm
### Straight Forward Method
Here's a diagram illustrating the idea:
![idea](permutationAlg01.png)

Code for this idea:
```JavaScript
var permute = function(char, str) {
  var perm = [];
  var strArr = str.split('');
  for (var i = 0; i <= strArr.length; i++) {
    strArr.splice(i,0,char);
    perm.push(strArr.join(''));
    strArr.splice(i,1);
  }
  return perm;
}

function permAlone(str) {
  var strArr = str.split('');  
  var perm = strArr.reduce(function(acc, char) {
    var result = [];
    for (var i in acc) {
      Array.prototype.push.apply(result, permute(char, acc[i]));
    }
    return result;
  }, ['']);
  
  return perm;
}

// test case
permAlone('abc');     //['cba','bca','bac','cab','acb','abc']
```
#### Or in two-dimension array:
```Javascript
var permute = function(char, arr) {
  var perm, dest = [];
  for (var i = 0; i <= arr.length; i++) {
    perm = arr.slice(0);
    perm.splice(i,0,char);
    dest.push(perm);
  }
  return dest;
}

function permAlone(str) {
  var strArr = str.split('');  
  var perm = strArr.reduce(function(acc, char) {
    var result = [];
    for (var i in acc) {
      Array.prototype.push.apply(result, permute(char, acc[i]));
    }
    return result;
  }, [[]]);
  
  return perm;
}

// test case
permAlone('abc');  //[['c','b','a'],['b','c','a'],['b','a','c'],['c','a','b'],['a','c','b'],['a','b','c']]
```
### In-place Swapping Method
Here's a diagram illustrating the idea:
![inplace](recursiveTree.png)

Code:
```Javascript
function permAlone(str) {
  var strArr = str.split('');
  var result = [];
  
  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }  
  
  function permutation(arr, start, end) {
    if (start >= end) {
      result.push(arr);
      return;
    }

    for (var i = start; i <= end; i++) {
      var temp = arr.slice();
      swap(temp, start, i);
      permutation(temp, start+1, end);
    }
  };
    
  permutation(strArr, 0, strArr.length-1);
  return result;
}

var p = permAlone('abc')
        .reduce(function(acc, el) {
          acc.push(el.join(''));
          return acc;
        }, []);
```

### Heap's algorithm
Heap’s algorithm is used to generate all permutations of n objects. The idea is to generate each permutation from the previous permutation by choosing a pair of elements to interchange, without disturbing the other n-2 elements.

The algorithm is basically going to swap elements based on the iteration k we are in for the current size n. If this iteration k is even then we will swap the kth element with the last element, and else we will swap the last element with the first element.

Example:
```
Input    1 2 3                  1 2 3 4
Output   1 2 3                  1 2 3 4 
         2 1 3                  2 1 3 4 
         3 1 2                  3 1 2 4 
         1 3 2                  1 3 2 4 
         2 3 1                  2 3 1 4 
                                3 2 1 4 
                                4 2 3 1 
                                2 4 3 1 
                                3 4 2 1 
                                4 3 2 1 
                                2 3 4 1 
                                3 2 4 1 
                                4 1 3 2 
                                1 4 3 2 
                                3 4 1 2 
                                4 3 1 2 
                                1 3 4 2 
                                3 1 4 2 
                                4 1 2 3 
                                1 4 2 3 
                                2 4 1 3 
                                4 2 1 3 
                                1 2 4 3 
                                2 1 4 3 

```
Pseudo Code:
```
generate (n, arr)
    if n = 1
        output arr
    else
        for i = 0; i < n; i += 1
            generate (n - 1, arr)

            if n is even
                swap(arr[i], arr[n - 1])
            else
                swap(arr[0], arr[n - 1])
```

## Solution Code
### Straight forward one
```Javascript
function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;
  
  // Return 0 if str contains all the same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
  var strArr = str.split('');  
  
  var permute = function(char, arr) {
    var perm, dest = [];
    for (var i = 0; i <= arr.length; i++) {
      perm = arr.slice(0);
      perm.splice(i,0,char);
      dest.push(perm);
    }
    return dest;
  };
  
  var perm = strArr.reduce(function(acc, char) {
    var result = [];
    for (var i in acc) {
      Array.prototype.push.apply(result, permute(char, acc[i]));
    }
    return result;
  }, [[]]);
  
  var num = perm.reduce(function(rst, arr) {
    if (arr.join('').match(regex) === null) {
      rst++;
    }
    return rst;
  }, 0);

  return num;
}

// test case
permAlone('aab');   // 2
```

### Heap's algorithm

``` Javascript
// Heap's algorithm
function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;
  
  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

permAlone('aab');
```

# Related Knowledge
- [Definition of Permutations](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- permutation-generating algorithm, [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
  - **[Heap’s Algorithm for generating permutations](http://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/)**
  - **[Why does Heap's algorithm work?](http://ruslanledesma.com/2016/06/17/why-does-heap-work.html)**
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- Array methods
  - [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    - The slice() method returns **a shallow copy** of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
    - Syntax
    ```
    arr.slice()               // slice begins from index 0
    arr.slice(begin)          // slice begins from index 'begin'. if it's negative, relative to end.
    arr.slice(begin, end)     // up to end, but not including it.
    ```
  - [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    - The splice() method changes the content of an array by removing existing elements and/or adding new elements.
    - Syntax
    ```
    array.splice(start)
    array.splice(start, deleteCount)
    array.splice(start, deleteCount, item1, item2, ...)
    ```
  - Combination usage of splice() and slice() example:
    ```
    var arr = ['a', 'b', 'c'];
    for (var i = 0; i <= arr.length; i++) {
        arr.splice(i, 0, "d");
        console.log(arr);
        arr.splice(i, 1);
    }

    the log output will be: 
      ['d', 'a', 'b', 'c'] 
      ['a', 'd', 'b', 'c'] 
      ['a', 'b', 'd', 'c'] 
      ['a', 'b', 'c', 'd']
    ```

# Reference solution
- FCC [Algorithm No Repeats Please](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-No-Repeats-Please)
