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
