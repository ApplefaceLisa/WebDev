# Build a Simon Game

- Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/obYBjE.

- Fulfill the below _*user stories*_. Use whichever libraries or APIs you need. Give it your own personal style.
  - I am presented with a random series of button presses.
  - Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
  - I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
  - If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
  - I can see how many steps are in the current series of button presses.
  - If I want to restart, I can hit a button to do so, and the game will return to a single step.
  - I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
  - I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

- Hint: 

  Here are mp3s you can use for each button: 
  - https://s3.amazonaws.com/freecodecamp/simonSound1.mp3
  - https://s3.amazonaws.com/freecodecamp/simonSound2.mp3
  - https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
  - https://s3.amazonaws.com/freecodecamp/simonSound4.mp3
  
  
# Reference
- CSS layout : position
  - static  
    - HTML elements are positioned static by default.
    - Static positioned elements are not affected by the top, bottom, left, and right properties.
    - An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page
    
  - relative
    - An element with position: relative; is positioned _**relative to its normal position**_.
    - Setting the _**top, right, bottom, and left**_ properties of a relatively-positioned element will cause it to be adjusted away from its normal position.
    - _**Other content will not be adjusted**_ to fit into any gap left by the element.在原来应在的位置（normal position）上会留空白，其他内容不会将该空位填补上.
    
  - fixed
    - An element with position: fixed; is positioned _**relative to the viewport**_, which means it always stays in the same place even if the page is scrolled. 
    - The _**top, right, bottom, and left**_ properties are used to position the element.
    - A fixed element does not leave a gap in the page where it would normally have been located. 不会在原来应在的位置上留空。
  
  - absolute  
    - An element with position: absolute; is positioned _**relative to the nearest positioned ancestor**_ (instead of positioned relative to the viewport, like fixed).
    - if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
    - _**Note**_: A "positioned" element is one whose position is anything except static.

    ```
      <!DOCTYPE html>
      <html>
      <head>
      <style>
      div.relative {
          position: relative;
          width: 400px;
          height: 200px;
          border: 3px solid #73AD21;
          top: 50px;
          left: 50px;
          background-color: blue;
      } 

      div.absolute {
          position: absolute;
          top: 50px;
          right: 100px;
          width: 200px;
          height: 100px;
          border: 3px solid #73AD21;
          background-color: yellow;
      }
      </style>
      </head>
      
      <body>
      <h2>position: absolute;</h2>

      <p>An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed):</p>

      <div class="relative">This div element has position: relative;
        <div class="absolute">This div element has position: absolute;</div>
      </div>

      </body>
      </html>    
    ```
  
- play audio/video
  - ele.play() : play audio/video
  - ele.pause() : pause audio/video
  - ele.duration : return the length of audio/video
  - ele.loop = true : enable loop
    - [Seamless audio looping in html5 JavaScript](http://www.kevssite.com/2015/11/22/seamless-audio-looping/)
    - [gapless loop audio](https://github.com/regosen/Gapless-5)
  
  ```
    <!DOCTYPE HTML>
    <html>
    <head>
      <title>Audio</title>
    </head>
    <body>

    <script>
       function play(){
         var audio = document.getElementById("audio");
         audio.play();
       }
    </script>

    <input type="button" value="PLAY"  onclick="play()">
    <audio id="audio" src="http://dev.interactive-creation-works.net/1/1.ogg" ></audio>
  </body>
  </html>
  ```
  
- [pointer-events](https://css-tricks.com/almanac/properties/p/pointer-events/)
  ```css
  .unclickable {
    pointer-events: none;
  }
  ```

- [Scheduling: setTimeout and setInterval](http://javascript.info/settimeout-setinterval)
  - _**Recursive setTimeout guarantees a delay between the executions, setInterval – does not.**_
  ```javascript
    let i = 1;
    setTimeout(function run() {
      func(i);
      setTimeout(run, 100);
    }, 100);
  ```

- CSS filter
  - css tricks [filter](https://css-tricks.com/almanac/properties/f/filter/)
    ```css
      .filter-me {
        filter: <filter-function> [<filter-function>]* | none
      }
    ```
  
    Where is one of:
  
    - blur()
    
    - brightness(val) : A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. val can be greater than 1.
    
    - contrast(val) : A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. val can be greater than 1.
    
    - drop-shadow()
    
    - grayscale() : Converts the input image to grayscale. A value of 100% is completely grayscale. A value of 0% leaves the input unchanged.
    
    - hue-rotate()
    
    - invert()
    
    - opacity() : transparency. A value of 0% is completely transparent. A value of 100% leaves the input unchanged.
    
    - saturate()
    
    - sepia()
    
    - url() - for applying SVG filters
    
    - custom() - "coming soon"
    
    Multiple functions can be used, space separated.
    
    - demo [CSS Filter Effects](http://html5-demos.appspot.com/static/css/filters/index.html)
  
- [Night sky with twinkling stars : pure css3](https://www.script-tutorials.com/night-sky-with-twinkling-stars/)
