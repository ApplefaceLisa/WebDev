# What's wrong with this code snippet.

## We're building a web game where everybody wins and we are all friends forever.

```html
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
```


## Problem
#### The user's prize is always undefined!

#### Why?
The anonymous function we're assigning to the buttons' **__onclicks__** has access to variables in the scope outside of it (this is called a closure ↴ ). In this case, it has access to **__btnNum__**.

**When a function accesses a variable outside its scope, it accesses that variable, not a frozen copy.** So when the value held by the variable changes, the function gets that new value. By the time the user starts pressing buttons, our loop will have already completed and btnNum will be **3**, so this is what each of our anonymous functions will get for btnNum!

#### Solution
We can solve this by wrapping our anonymous function in another anonymous function that takes btnNum as an argument. Like so:

```html
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function(frozenBtnNum){
            return function() {
                // tell her what she is won!
                alert(prizes[frozenBtnNum]);
            };
        }(btnNum); // LOOK! We are passing btnNum to our anonymous function here!
    }
</script>
```

***
# Reference:
- Problem source 
  - https://www.interviewcake.com/question/java/js-whats-wrong?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email
- You Don't Know JS: Scope & Closures
  - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures
