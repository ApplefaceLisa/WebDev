# Data Structures & Algorithms with JavaScript

- ## Arrays and Lists: the most common data structures
  ### Array
  - native to Javascript
  
  - A JavaScript array is actually a specialized type of JavaScript object, with the _**indices being property names**_ that can be integers used to represent offsets. However, when integers are used for indices, they are _**converted to strings**_ internally in order to conform to the requirements for JavaScript objects.
  
  - shallow copy vs. deep copy
  When you assign one array to another array, you are assigning a reference to the assigned array. When you make a change to the original array, that change is reflected in the other array as well. It's called _**shallow copy**_. Example:
    ```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
    nums[i] = i+1;
    }
    var samenums = nums;
    nums[0] = 400;
    print(samenums[0]); // displays 400
    ```
    _**Deep copy**_: each of the original array’s elements is actually copied to the new array’s elements.
    ```
    function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
      }
    }
    ```
  
  - Searching for a Value : indexOf() , lastIndexOf()
    ```Javascript
    arr.indexOf(element);
    arr.lastIndexOf(element);
    ```
  
  - String Representations of Arrays : join() , toString()
    ```Javascript
    arr.join();
    arr.toString();
    ```
    Both functions return a string containing the elements of the array delimited by commas.
    When you do ```console.log(arr)```, it automatically calls the toString() function for that array.
    
  - Creating New Arrays from Existing Arrays : concat() , splice().
    - concat() allows you to put together two or more arrays to create a new array.
    ```Javascript
    var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
    var dmp = ["Raymond", "Cynthia", "Bryan"];
    var itDiv1 = cis.concat(dmp);      // ["Mike", "Clayton", "Terrill", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"]
    var itDiv2 = dmp.concat(cisDept);  // ["Raymond", "Cynthia", "Bryan", "Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
    ```
    - splice() allows you to create a new array from a subset of an existing array.
    ```Javascript
    arr.splice(startIndex, length);
    
    var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
    var dmpDept = itDiv.splice(3,3);
    console.log(dmpDept);  // ["Raymond", "Cynthia", "Danny"]
    console.log(itDiv);    // ["Mike", "Clayton", "Terrill", "Jennifer"]
    ```
    
  - Mutator Functions
  
    JavaScript has a set of mutator functions that allow you to modify the contents of an array without referencing the individual elements.  
    - Adding Elements to an Array from end or beginning : push() / shift()
    - Removing Elements from an Array from end or beginning : pop() / unshift()
    - Adding and Removing Elements from the Middle of an Array : splice().
      ```Javascript
      array.splice(start, deleteCount, item1, item2, ...)
      ```
      
    - Putting Array Elements in Order : reverse() , sort()
    
  - Iterator Functions
  
    - Non–Array-Generating Iterator Functions : they do not generate a new array, they either perform an operation on each element of an array or generate a single value from an array.
    
      - forEach() : it takes a function as an argument and applies the called function to each element of an array.
        ```
        arr.forEach(func);
        ```
      - every() : applies a Boolean function to an array and returns true if _**all**_ of the elements in the array meets the criterion of the Boolean function.
      
      - some() : takes a Boolean function and return true if _**at least one**_ of the elements in the array meets the criterion of the Boolean function.
      
      - reduce() : applies a function to an _**accumulator**_ and the successive elements of an array until the end of the array is reached, yielding a single value. for example:
      ```javascript
      function flatten(array) {
        return array.reduce(function(memo, el) {
          var items = Array.isArray(el) ? flatten(el) : el;
          return memo.concat(items);
        }, []);
      }      
      flatten([0, [1,2,3], ["a","b","c"], [4,5], 6]);   // [0, 1, 2, 3, "a", "b", "c", 4, 5, 6]
      ```
      
      - reduceRight() :  works similarly to reduce(), only working _**from the righthand side of the array to the left**_, instead of from left to right.
      
    - Iterator Functions That Return a New Array
      - map() : applying a function to each element of an array, and returns a new array with the results of the function application.
      
      - filter() : applies a Boolean function to an array and returns a new array consisting of those elements that satisfy the Boolean function.
      
  - Two-Dimensional and Multidimensional Arrays
    - Processing Two-Dimensional Array Elements : two patterns
      - one pattern emphasizes accessing array elements by columns, columnar processing. The outer loop moves through the rows, and the inner loop processes the columns.
      ```javascript
      var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
      var total = 0;
      var average = 0.0;
      for (var row = 0; row < grades.length; ++row) {
        for (var col = 0; col < grades[row].length; ++col) {
          console.log(grades[row][col]);  // 89, 77, 78, 76, 82, 81, 91, 94, 89
        }
      }  
      ```
      This pattern has no problem with jagged arrays.
      
      - the other pattern emphasizes accessing array elements by rows. The outer loop moves through the columns, and the inner loop processes the rows.
      ```javascript
      var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
      var total = 0;
      var average = 0.0;
      for (var col = 0; col < grades.length; ++col) {
        for (var row = 0; row < grades[col].length; ++row) {
          console.log(grades[row][col]);   // 89, 76, 91, 77, 82, 94, 78, 81, 89
        }
      }  
      ```
      **Note**: this pattern may have problem with _**jagged arrays**_.
      
    - Jagged Arrays
    
      A jagged array is an array where the rows in the array may have a different number of elements. for example:
      ```javascript
      arr = [[1,2,3], [4,5], [6,7,8,9,10]];
      ```

  ### List
  Lists are especially useful if we _**don’t**_ have to perform searches on the items in the list or put them into some type of sorted order.
  - A List ADT
 
  properties | what it describes
  ---------- | ------------------
  listSize | Number of elements in list
  pos | Current position in list
  length | Returns the number of elements in list
 
  methods | what it describes
  ------- | ------------------
  clear | Clears all elements from list
  toString | Returns string representation of list
  getElement | Returns element at current position
  insert | Inserts new element after existing element
  append | Adds new element to end of list
  remove | Removes element from list
  front | Sets current position to first element of list
  end | Sets current position to last element of list
  prev | Moves current position back one element
  next | Moves current position forward one element
  currPos | Returns the current position in list
  moveTo | Moves the current position to specified position
  
  - A List Class Implementation
    ```javascript
    function List() {
      this.listSize = 0;
      this.pos = 0;
      this.dataStore = []; // initializes an empty array to store list elements
      
      this.clear = clear;
      this.find = find;
      this.toString = toString;
      this.insert = insert;
      this.append = append;
      this.remove = remove;
      this.front = front;
      this.end = end;
      this.prev = prev;
      this.next = next;
      this.length = length;
      this.currPos = currPos;
      this.moveTo = moveTo;
      this.getElement = getElement;
      this.length = length;
      this.contains = contains;
    }
    ```
    
    - Append: Adding an Element to a List
    ```javascript
    function append(element) {
      this.dataStore[this.listSize++] = element;
    }
    ```
    - Find: Finding an Element in a List
    ```javascript
    function find(element) {
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
          return i;
        }
      }
      return -1;
    }
    ```
    - Remove: Removing an Element from a List
    ```javascript
    function remove(element) {
      var foundAt = this.find(element);
      if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
      }
      return false;
    }
    ```
    - Length: Determining the Number of Elements in a List
    ```javascript
    function length() {
      return this.listSize;
    }
    ```
    - toString: Retrieving a List’s Elements
    ```javascript
    function toString() {
      return this.dataStore;
    }
    ```
    - Insert: Inserting an Element into a List    
      to insert an element after a specified element already in the list.
    ```javascript
    function insert(element, after) {
      var insertPos = this.find(after);
      if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
      }
      return false;
    }
    ```
    - Clear: Removing All Elements from a List
    ```javascript
    function clear() {
      this.dataStore = [];
      this.listSize = this.pos = 0;
    }
    ```
    - Contains: Determining if a Given Value Is in a List
    ```javascript
    function contains(element) {
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
          return true;
        }
      }
      return false;
    }
    ```
    - Traversing a List
    ```javascript
    function front() {
      this.pos = 0;
    }
    
    function end() {
      this.pos = this.listSize-1;
    }
    
    function prev() {
      if (this.pos > 0) {
        --this.pos;
      }
    }
    
    function next() {
      if (this.pos < this.listSize-1) {
        ++this.pos;
      }
    }
    
    function currPos() {
      return this.pos;
    }
    
    function moveTo(position) {
      this.pos = position;
    }
    
    function getElement() {
      return this.dataStore[this.pos];
    }
    ```
  - Iterating Through a List  
    An iterator allows us to traverse a list without referencing the internal storage mechanism of the List class. Some advantages to using iterators over using array indexing include:
    - Not having to worry about the underlying data storage structure when accessing list elements.
    - Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list.
    - Providing a uniform means of accessing elements for different types of data stores used in the implemenation of a List class.
    
    here is how to use an iterator to traverse through a list:    
    ```javascript
    for(names.front(); names.currPos() < names.length(); names.next()) {
      print(names.getElement());
    }
    ```
    We can also traverse a list backward using an iterator:
    ```javascript
    for(names.end(); names.currPos() >= 0; names.prev()) {
      print(names.getElement());
    }
    ```
    Iterators are used _**only**_ to move through a list and should not be combined with any functions for adding or removing items from a list.

- ## Stacks and Queues: more complex list-like data structures
  ### Stack
  - A stack is a list of elements that are accessible only from one end of the list. One area where stacks are used is in implementing recursion.
  - used throughout computer science in both _**compiler and operating system implementations**_.
  - Operations
   
    properties | what does it describe
    ---------- | ----------------------
    top | keep track of where the top element is.
   
    methods | what does it describe
    ------- | ----------------------
    push | add an element
    pop | take off an element
    peek | returns the value stored at the top of a stack without removing it from the stack.
    clear | removes all the elements from a stack.
    length | holds the number of elements contained in a stack.
    empty | to let us know if a stack has no elements in it.
   
  - implementation : the Stack class
  ``` javascript
  function Stack() {
    this.dataStore = [];
    this.top = -1;
    
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.empty = empty;
  }
   
  function push(element) {
    this.dataStore[++this.top] = element;
  }
  
  function pop() {
    return this.dataStore[this.top--];
  }
  
  function peek() {
    return this.dataStore[this.top];
  }
  
  function clear() {
    this.top = 0;
  }
  
  function length() {
    return (this.top + 1);
  }
  
  function empty() {
    return this.top < 0;
  }
  ```
  
  
  ### Queue
  - Queues are used extensively in simulation software where data has to be _**lined up**_ before it is processed.

- ## Linked lists: how they overcome the shortcomings of arrays
  - A linked list is a modification of the list data structure, where each element is a separate object linked to the objects on either side of it.
  - Linked lists are efficient when you need to perform _**multiple insertions and deletions**_ in your program.

- ## Dictionaries: storing data as key-value pairs
  - store data as key-value pairs.

- ## Hashing: good for quick insertion and retrieval

  ### Hash Table
  - One way to implement a dictionary is to use a hash table.
  - how to build hash tables and the hash algorithms that are used to store data in the table.

- ## Sets: useful for storing unique elements that appear only once
  - Sets are useful for storing data that is not supposed to have duplicates in the data set.

- ## Binary Trees: storing data in a hierarchy manner
  ### Binary Trees
  
  
  ### Binary Search Trees
  - binary search trees are useful for storing data that needs to be stored originally in sorted form.

- ## Graphs and graph algorithms: ideal for modeling networks
  - Graphs are used to represent data such as the _**nodes of a computer network or the cities on a map**_.

- ## Algorithms: including those that help you sort or search data
  ### Sorting
  
  ### Searching

- ## Advanced algorithms: dynamic programming and greedy algorithms
  ### dynamic programming 
  
  ### greedy algorithms


- ## Code Examples
  https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript