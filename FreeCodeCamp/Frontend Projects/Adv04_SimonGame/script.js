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
            //obj.classList.remove("unclickable");
            obj.addEventListener("click", function(e) {
                Simon.playKey(e);
                Simon.compare(e.target.classList[2]);
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

    keyUnclickable: function() {
        Array.from(this.keyDom).forEach(function(obj) {
            obj.classList.add("unclickable");
        });
    },

    generateSimonKeys: function() {
        for (var i = 0; i < Simon.count; i++) {
            var index = Math.floor(Math.random() * Simon.keyDom.length);
            Simon.simonKeys.push(index);
        }
    },

    simonPlay: function() {
        this.curPlayer = false;
        this.countDown = 0;
        Simon.keyUnclickable();
        this.timer = setTimeout(function run() {
          var index = Simon.simonKeys[Simon.countDown];
          Simon.keyDom[index].click();
          ++Simon.countDown;
          if (Simon.countDown >= Simon.count) {
            clearTimeout(Simon.timer);
            Simon.waitUserPlay();
          } else {
            Simon.timer = setTimeout(run, 1000);
          }
        }, 1000);
    },

    countUp: function() {
        ++this.count;
    },

    compare: function(userKey) {
        var index = 0;
        return function() {
            var simonKey = Simon.keyDom[Simon.simonKeys[index]].classList[2];
            if (index < Simon.count && simonKey === userKey) {
                index++;
            }
            else {
                if (index == Simon.count) {
                    Simon.countUp();
                    Simon.simonPlay();
                } else {
                    Simon.simonRepeat();
                }
            }
        }
    },

    waitUserPlay: function() {
        Simon.curPlayer = true;
        Simon.keyClickable();
        setTimeout(function() {
            if (Simon.userKeys.length == 0) {
                Simon.curPlayer = false;
                Simon.simonPlay();
            }
        }, 5000);
    }
};

window.onload = function() {
    Simon.init();
    Simon.count = 4;
    Simon.generateSimonKeys();
    Simon.simonPlay();
}
