# Understand Javascript the weird parts
udemy.com

- Global
Not inside a function.

- let
'let' allows Javascript engine to use 'block scoping'(**{_block scoping_}**). Example:
  ```
  var a = 1;
  if (a > 0) {
    let c = 'Bigger';
  }
  console.log(c);   // c is not defined

  var a = 1;
  if (a > 0) {
    var c = 'Bigger';
  }
  console.log(c);    // Bigger
  ```

