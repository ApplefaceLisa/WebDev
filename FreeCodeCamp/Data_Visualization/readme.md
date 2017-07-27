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
  ```
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

##### 2.1.3.2 Basics of JSX

#### 2.1.4 React

  
### 2.2 AJAX in React

- [How to make AJAX requests in React?](https://medium.com/@baphemot/how-to-make-ajax-requests-in-react-a6a52bb5a8b1)
- [5 best libraries for making AJAX calls in React](https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1)
- [react-ajax-best-practices](http://andrewhfarmer.com/react-ajax-best-practices/)

## 3. D3
