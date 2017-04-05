var Simon = {
    switchOn: false,         // switch on / off
    started: false,          // start / stop
    strict: false,           // strict mode on / off
    count: 0,
    countDown: 0,
    curPlayer: false,         // false: simon play, true: you play.

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
/*
        for (var i = 0; i < this.keyDom.length; i++) {
            this.keyDom[i].classList.remove("unclickable");
            this.keyDom[i].addEventListener("click", function(e) {
                Simon.playKey(e);
            });
        }
*/

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
        if (clt.contains("green")) {
            Simon.audioGreenDom.play();
        }
        if (clt.contains("red")) {
            Simon.audioRedDom.play();
        }
        if (clt.contains("yellow")) {
            Simon.audioYellowDom.play();
        }
        if (clt.contains("blue")) {
            Simon.audioBlueDom.play();
        }
    },

    simonPlay: function() {
        ++Simon.count;
        for (var i = 0; i < Simon.count; i++) {
            var index = Math.floor(Math.random() * Simon.keyDom.length);
            Simon.audioDom[index].play();
            Simon.keyDom[index].classList.toggle("light");
        }
    }
};

window.onload = function() {
    Simon.init();
}
