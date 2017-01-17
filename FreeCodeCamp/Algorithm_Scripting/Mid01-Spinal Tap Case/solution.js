function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // add space before any uppercase characters
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // find any whitespace and underscore, and replace them with dash.
  var regex = /\s+|\_+/g;
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('ThisIsSpinalTap');

/************************************************************************************************/
// solution 2
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');



