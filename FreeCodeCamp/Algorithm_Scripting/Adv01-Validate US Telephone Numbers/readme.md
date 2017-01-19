# Validate US Telephone Numbers
## Question Description
```
function telephoneCheck(str) {
  // TO DO
  return true or false;
}
```
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
  ```
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
  ```

## Solutions
#### Basic solution code
```Javascript
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}

// test case
telephoneCheck("555-555-5555");
```
###### Code Explanation:

- ^ denotes the beginning of the string (1\s?)? checks allows for a "1" or a "1 " at the beginning.
- \d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
- [\s\-]? checks for spaces or dashes between the groups of digits.
- $ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
- Lastly we use regex.test(str) to test if the string adheres to the regular expression and return true or false.


#### Robust solution code
```Javascript
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}

// test case
telephoneCheck("555-555-5555");
```
###### Code Explanation:

This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library **[libphonenumber](https://github.com/googlei18n/libphonenumber)**.


## Related Knowledges
- MDN [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- MDN [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


## Reference
- FCC [Algorithm Validate US Telephone Numbers](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Validate-US-Telephone-Numbers)
- FCC **[JS Regex Resources](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-Regex-Resources)**
- SitePoint [Working with Phone Numbers in JavaScript](https://www.sitepoint.com/working-phone-numbers-javascript/)
- regexp tester 
  - [Regex Pal](http://www.regexpal.com/)
  - [Regex101](https://regex101.com/#javascript)
