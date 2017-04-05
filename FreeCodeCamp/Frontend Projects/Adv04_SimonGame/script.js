var Simon = {
    switchOn: false,         // switch on / off
    started: false,          // start / stop
    strict: false,           // strict mode on / off
    count: 0,
    countDown: 0,
    timer: null,
    curPlayer: false,         // false: simon play, true: you play.
    simonKeys: [],
    userKeys: [],

    switchDom: null,
    startDom: null,
    strictDom: null,
    countDom: null,
    keyDom: null,
    audioGreenDom: null,
    audioRedDom: null,
    audioYellowDom: null,
    audioBlueDom: null,

    playKey: function(i) {
        this.audioDom[i].play();
    },

    init: function() {
        this.switchDom = document.getElementById("pwr-sw");
        this.startDom = document.getElementById("start");
        this.strictDom = document.getElementById("strict");
        this.countDom = document.querySelector(".count");
        this.keyDom = document.getElementsByClassName("key");
        this.audioGreenDom = document.getElementById("green");
        this.audioRedDom = document.getElementById("red");
        this.audioYellowDom = document.getElementById("yellow");
        this.audioBlueDom = document.getElementById("blue");

        this.switchDom.addEventListener("click", function() {
            this.classList.toggle('sw-on');
            Simon.switchOn = !Simon.switchOn;      // toggle switch
            if (!Simon.switchOn) {
                Simon.started = false;
                Simon.strict = false;
                Simon.startDom.classList.remove("red-on");
                Simon.strictDom.classList.remove("yellow-on");
                Simon.countDom.classList.add("led-off");
            } else {
                Simon.countDom.classList.remove("led-off");
            }
        });

        this.startDom.addEventListener("click", function() {
            if (Simon.switchOn) {
                this.classList.toggle("red-on");
                Simon.started = !Simon.started;    // toggle started
            }
        });

        this.strictDom.addEventListener("click", function() {
            if (Simon.started) {
                this.classList.toggle("yellow-on");
                Simon.strict = !Simon.strict;
            }
        });

        Array.from(this.keyDom).forEach(function(obj) {
            obj.classList.remove("unclickable");
            obj.addEventListener("click", function(e) {
                Simon.playKey(e);
            });
            obj.addEventListener("transitionend", function(e) {
                this.classList.remove("light");
            });
        });
    },

    playKey: function(event) {
        var clt = event.target.classList;
        clt.add("light");
        switch (clt[2]) {
            case "green":
              Simon.audioGreenDom.play();
              break;
            case "red":
              Simon.audioRedDom.play();
              break;
            case "yellow":
              Simon.audioYellowDom.play();
              break;
            case "blue":
              Simon.audioBlueDom.play();
              break;
            default:
              break;
        }
        if (Simon.curPlayer) {
            Simon.userKeys.push(clt[2]);
        }
    },

    keyClickable: function() {
        Array.from(this.keyDom).forEach(function(obj) {
            obj.classList.remove("unclickable");
        });
    },

    simonPlay: function() {
        ++this.count;
        this.countDown = this.count;
        this.timer = setTimeout(function run() {
          var index = Math.floor(Math.random() * Simon.keyDom.length);
          Simon.keyDom[index].click();
          Simon.simonKeys.push(Simon.keyDom[index].classList[2]);
          --Simon.countDown;
          if (Simon.countDown <= 0) {
            clearTimeout(Simon.timer);
          } else {
            Simon.timer = setTimeout(run, 1000);
          }
        }, 1000);
    },


};

window.onload = function() {
    Simon.init();
}
