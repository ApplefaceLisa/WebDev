# data visualizaition verification

## 1. Sass

## 2. React
### 2.1 Env setup
#### 2.1.1 use [webpack](https://webpack.js.org/)
- Install dependencies
  ```
  > npm init -y
  > touch webpack.config.js      // create webpack config file
  > npm install --save-dev webpack@1 webpack-dev-server@1
  ```
- Setup webpack development server
  
  check latest config options [here](https://webpack.js.org/configuration/)
  
  ```
  // webpack.config.js
  module.exports = {
    entry: './source/client.js',          // the entry file of your App
    output: {
      path: './public',                   // the directory of compiled file
      filename: 'index.js'                // the compiled file name
    },
    devServer: {
      inline: true,                       // automatically recompile and refresh on change
      contentBase: './public',            // web root
      port: 3000                          // server port
    }
  }
  
  // package.json
  {
    ...
    "main": "index.js"
    "scripts": {
      "start": "webpack-dev-server"
    },
    ...
  }
  ```
  then run : `> npm start` , will compile/start server/watch modification and recompile/refresh.

#### 2.1.2 Dev in ES6 with [Babel](http://babeljs.io/)
- Install dependencies
  ```
  npm install --save-dev babel-preset-es2015    // babel preset, translate ES6 to ES5
                         babel-loader           // a loader module used by webpack
  ```
- Config webpack.config.js
  ```
  module.exports = {
    ...,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015']
          }
        }
      ]
    }
  }
  ```
  
#### 2.1.3 JSX
JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant.
##### 2.1.3.1 JSX in webpack with Babel
- Install dependencies
  ```
  npm install --save-dev babel-preset-react
  npm install --save babel-polyfill         // for old browser which not support ES5
  npm install --save react react-dom
  ```
  
- modify webpack.config.js
  ```
  module.exports = {
    entry: ['babel-polyfill', './source/client.js'],
    ...
    module: {
      loaders : [
        {
          ...,
          query: {
             ...,
             presets : ['es2015', 'react']
          }
        }
      ]
    }
  }
  ```
  
- A simple example of using JSX
  ```javascript
  // client.js
  import React from 'react';
  import ReactdOM from 'react-dom';
  
  function hey(from='Ben', to='you') {
    return `Hello from ${from} to ${to}.`;
  }
  
  ReactDOM.render(
    <div>Hello from inside here.</div>,
    getElementById('app')
  );
  ```

##### 2.1.3.2 [JSX in-depth](https://facebook.github.io/react/docs/jsx-in-depth.html)

### 2.2 React Basics
#### 2.2.1 [Use Composition instead of Inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
- Example
```javascript
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
```

#### 2.2.2 [Typechecking With PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
- Example
  ```javascript
  import PropTypes from 'prop-types';

  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  Greeting.propTypes = {
    name: PropTypes.string
  };
  ```
  
- Default Prop Values
  ```javascript
  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  // Specifies the default values for props:
  Greeting.defaultProps = {
    name: 'Stranger'
  };

  // Renders "Hello, Stranger":
  ReactDOM.render(
    <Greeting />,
    document.getElementById('example')
  );
  ```
  
#### 2.2.3 React Router
- [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
  
#### 2.2.4 AJAX in React

- [How to make AJAX requests in React?](https://medium.com/@baphemot/how-to-make-ajax-requests-in-react-a6a52bb5a8b1)
- [5 best libraries for making AJAX calls in React](https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1)
- [react-ajax-best-practices](http://andrewhfarmer.com/react-ajax-best-practices/)

### 2.3 [Redux](http://redux.js.org/)
#### 2.3.1 Data flow

![flux data flow](flux.png)

- strict _**unidirectional**_ data flow
- The data lifecycle in any Redux app follows these 4 steps:

  - You call `store.dispatch(action)`.  
  
    You can call `store.dispatch(action)` from anywhere in your app, including components and XHR callbacks, or even at scheduled intervals.
    
  - The Redux store calls the reducer function you gave it.
  
    The store will pass two arguments to the reducer: the current state tree and the action.
    
  - The root reducer may combine the output of multiple reducers into a single state tree.
  
  - The Redux store saves the complete state tree returned by the root reducer.
  
    This new tree is now the next state of your app! Every listener registered with `store.subscribe(listener)` will now be invoked; listeners may call `store.getState()` to get the current state. Now, the UI can be updated to reflect the new state. 
    

#### 2.3.2 Three principles

- Redux can be described in three fundamental principles:
  - **Single source of truth**

    The state of your whole application is stored in an object tree within a _**single store**_.
    
    In Redux, _**all the application state is stored as a single object**_. It's a good idea to think of its shape before writing any code. What's the minimal representation of your app's state as an object?

  - **State is read-only**

    The only way to change the state is to emit an _**action**_, an object describing what happened.

  - **Changes are made with pure functions**

    To specify how the state tree is transformed by actions, you write _**pure reducers**_.

#### 2.3.3 Redux Basics 
##### 2.3.3.1 Actions
- Actions are _**payloads of information**_ that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

- Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.

  ```
  const ADD_TODO = 'ADD_TODO'
  {
    type: ADD_TODO,
    text: 'Build my first Redux app'
  }
  ```
  
- **Action creators** are exactly that—functions that create actions.
  ```
  function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
  }
  ```

- Example code : actions.js
  ```
  /*
   * action types
   */

  export const ADD_TODO = 'ADD_TODO'
  export const TOGGLE_TODO = 'TOGGLE_TODO'
  export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

  /*
   * other constants
   */

  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  /*
   * action creators
   */

  export function addTodo(text) {
    return { type: ADD_TODO, text }
  }

  export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }

  export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }  
  ```

##### 2.3.3.2 Reducers
- Reducers specify how the application's state changes in response to actions.
- The reducer is a _**pure function**_ that takes the previous state and an action, and returns the next state.
  ```
  (previousState, action) => newState
  ```
- Things you should _**never**_ do inside a reducer:
  - Mutate its arguments;
  - Perform side effects like API calls and routing transitions;
  - Call non-pure functions, e.g. Date.now() or Math.random().

- Example code : reducer.js
```
  import { combineReducers } from 'redux'
  import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
  } from './actions'
  const { SHOW_ALL } = VisibilityFilters

  function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }

  function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
  }

  const todoApp = combineReducers({
    visibilityFilter,
    todos
  })

  export default todoApp
```

  - Each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.
  
  - `combineReducers()` 
    When you emit an action, todoApp returned by combineReducers will call both reducers, it will then combine both sets of results into a single state tree.

##### 2.3.3.3 Store
- The store has the following responsibilities:
  - Holds application state;
  - Allows access to state via _**getState()**_;
  - Allows state to be updated via _**dispatch(action)**_;
  - Registers listeners via _**subscribe(listener)**_;
  - Handles unregistering of listeners via the function returned by subscribe(listener).

- `createStore()` 
  ```
  import { createStore } from 'redux'
  import todoApp from './reducers'
  let store = createStore(todoApp)  
  ```
  
#### 2.3.4 Redux Usage with React
##### 2.3.4.1 Installing React Redux
```
npm install --save react-redux
```

##### 2.3.4.2 Presentational and Container Components
React bindings for Redux embrace the idea of [_**separating presentational and container components**_](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

   items  | Presentational Components | Container Components
--------- | ------------------------- | ---------------------------------          
Purpose | How things **look** (markup, styles) | How things **work** (data fetching, state updates)
Aware of Redux | No | Yes
To read data | Read data from props |	Subscribe to Redux state
To change data | Invoke callbacks from props | Dispatch Redux actions
Are written |	By hand |	Usually generated by React Redux





- [Redux’s Mysterious Connect Function](https://medium.com/mofed/reduxs-mysterious-connect-function-526efe1122e4)

## 3. D3
