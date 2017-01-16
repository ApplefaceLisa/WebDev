/* freecodecamp Seek and destroy */
function destroyer(arr) {
  /*
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);

  or

  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
  */

  // for ES6
  let args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(element => {
    return args.indexOf(element) === -1;
  });
}

/* test case */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);       // [1,1]
