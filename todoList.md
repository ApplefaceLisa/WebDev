# Udacity
## front-end beginner
- [Intro to HTML and CSS](https://www.udacity.com/course/intro-to-html-and-css--ud304)
- [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
- [Responsive Images](https://www.udacity.com/course/responsive-images--ud882)
- [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804)
- [Intro to jQuery](https://www.udacity.com/course/intro-to-jquery--ud245)
- [Intro to AJAX](https://www.udacity.com/course/intro-to-ajax--ud110)
---
- [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
  - [Web Fundamentals : Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) by Google
  - Optimize the DOM
    - fewer bytes faster renders
      - [minify](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#minification-preprocessing--context-specific-optimizations)
      - [compress](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#text-compression-with-gzip)
      - [cache](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
  - Unblocking CSS (CSS is render blocking, why wait on styles you don't need?)
    - split CSS file to multiple files and use @media to let browser know which ones are needed for current case.
      ```
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="style-print.css" media="print">
      ```
    - [Render Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
      - By default, CSS is treated as a render blocking resource.
      - Media types and media queries allow us to mark some CSS resources as non-render blocking.
      - The browser downloads all CSS resources, regardless of blocking or non-blocking behavior.
      ```
      <link href="style.css"    rel="stylesheet">
      <link href="style.css"    rel="stylesheet" media="all">
      <link href="portrait.css" rel="stylesheet" media="orientation:portrait">
      <link href="print.css"    rel="stylesheet" media="print">
      ```
    - more about media query [Responsive Web Design Basics](https://developers.google.com/web/fundamentals/design-and-ui/responsive/)
  - Optimizing JS (JavaScript is parser blocking)
    - use the [defer attribute](https://hacks.mozilla.org/2009/06/defer/) _**async**_ to tell browser : 1) do not block DOM construction 2) do not block on CSSOM.
    ```
    <script src="script.js" async></script>
    ```
    - use [window.onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload) in JS
    - Learn more about [parser blocking vs. asynchronous JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript#parser-blocking-vs-asynchronous-javascript)
    
    ![optimizing JS](opt_JS.JPG)
  
  - General Strategies
    - Minify, Compress, Cache (HTML, CSS, JavaScript)      
    - Minimize use of render blocking resources (CSS)
      - Use media queries on <link> to unblock rendering
      - Inline CSS
    - Minimize use of parser blocking resources (JS)
      - Defer JavaScript execution
      - Use async attribute on <script>
      
    ====>>>> 3 patterns:
    - Minimize bytes
    - Reduce critical resources
    - Shorten CRP(critical rendering path) length
      - how to calculate CRP
      ![crp_01](crp_calc_01.JPG)
      ![crp_02](crp_calc_02.JPG)
      - preload scanner
        [How the Browser Pre-loader Makes Pages Load Faster](http://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/)
      ![preload scanner](preload_scanner.JPG)
  
    =====>>> more readings:
    - [optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path)
    - [Critical Rendering Path performance patterns](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp#performance-patterns)
    - TCP Slow Start [High Performance Browser Networking](http://hpbn.co/)
    
    
- [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
- [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud015)
- [JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989)
- [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549)
- [HTML5 Canvas](https://www.udacity.com/course/html5-canvas--ud292)
- [HTML5 Game Development](https://www.youtube.com/watch?v=i3n-BZ2UHO0&list=PLAwxTw4SYaPlUUkh6txMRXE-w-6N1Z225)

## front-end intermediate
- [Building High Conversion Web Forms](https://www.udacity.com/course/building-high-conversion-web-forms--ud890)
- [JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)
- [Web Tooling & Automation](https://www.udacity.com/course/web-tooling-automation--ud892)
- [Offline Web Applications](https://www.udacity.com/course/offline-web-applications--ud899)
- [Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)
- [Front-End Frameworks](https://www.udacity.com/course/front-end-frameworks--ud894)
- [Client-Server Communications](https://www.udacity.com/course/client-server-communication--ud897)
- [Data Visualization and D3.js](https://www.udacity.com/course/data-visualization-and-d3js--ud507)

## full-stack
- [Intro to Backend](https://www.udacity.com/course/intro-to-backend--ud171)
- [Full Stack Foundations](https://www.udacity.com/course/full-stack-foundations--ud088)
- [Intro to Relational Databases](https://www.udacity.com/course/intro-to-relational-databases--ud197)
- [Authentication & Authorization: OAuth](https://www.udacity.com/course/authentication-authorization-oauth--ud330)
- [HTTP & Web Servers](https://www.udacity.com/course/http-web-servers--ud303)
- [Designing RESTful APIs](https://www.udacity.com/course/designing-restful-apis--ud388)
- [Data Wrangling with MongoDB](https://www.udacity.com/course/data-wrangling-with-mongodb--ud032)
- [Programming Foundations with Python](https://www.udacity.com/course/programming-foundations-with-python--ud036)
- [Developing Scalable Apps in Python](https://www.udacity.com/course/developing-scalable-apps-in-python--ud858)
- [Linux Command Line Basics](https://www.udacity.com/course/linux-command-line-basics--ud595)
- [Configuring Linux Web Servers](https://www.udacity.com/course/configuring-linux-web-servers--ud299)

# Reference
- [Udacity Nanodegrees curricula](https://github.com/mikesprague/udacity-nanodegrees)
