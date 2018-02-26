## 1. let and const
Variables declared with let and const eliminate the specific issue of hoisting because they’re scoped to the block, not to the function.

If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

### Rules for using let and const
let and const also have some other interesting properties.
- Variables declared with _**let**_ can be reassigned, but can’t be redeclared in the same scope.
- Variables declared with _**const**_ must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

### Use cases
The big question is when should you use let and const? The general rule of thumb is as follows:
- use _**let**_ when you plan to reassign new values to a variable, and
- use _**const**_ when you don’t plan on reassigning new values to a variable.

## 2. Template Literals
_**Template literals**_ are essentially string literals that include embedded expressions.

Denoted with _**backticks ( `` )**_ instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using _**${expression}**_. This makes it much easier to build strings.
Example:
```
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
```

