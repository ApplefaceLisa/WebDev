# data visualizaition verification

## Sass

## React
### Env setup
#### webpack
- Install dependencies
  ```
  > npm init -y
  > touch webpack.config.js      // create webpack config file
  > npm install --save-dev webpack@1 webpack-dev-server@1
  ```
- Setup webpack development server
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

### AJAX in React
- [How to make AJAX requests in React?](https://medium.com/@baphemot/how-to-make-ajax-requests-in-react-a6a52bb5a8b1)
- [5 best libraries for making AJAX calls in React](https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1)
- [react-ajax-best-practices](http://andrewhfarmer.com/react-ajax-best-practices/)

## D3
