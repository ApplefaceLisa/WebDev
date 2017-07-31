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

#### 2.1.4 React
##### 2.1.4.1 [Use Composition instead of Inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
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

##### 2.1.4.2 [Typechecking With PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
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
### 2.2 AJAX in React

- [How to make AJAX requests in React?](https://medium.com/@baphemot/how-to-make-ajax-requests-in-react-a6a52bb5a8b1)
- [5 best libraries for making AJAX calls in React](https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1)
- [react-ajax-best-practices](http://andrewhfarmer.com/react-ajax-best-practices/)

## 3. D3
