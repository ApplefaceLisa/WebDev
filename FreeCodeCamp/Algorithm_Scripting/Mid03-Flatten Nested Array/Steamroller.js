/* Basic solution
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  
  var flatten = function(element) {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      for (var i in element) {
        flatten(element[i]);
      }
    }
  };
  arr.forEach(flatten);
  return result;
}
*/
/* Intermediate solution */
function steamrollArray(arr) {
  return arr.reduce(function(flattenArray, arg) {
    return flattenArray.concat(Array.isArray(arg) ? steamrollArray(arg) : arg );
  }, []);
}

// test case
steamrollArray([1, [2], [3, [[4]]]]);
