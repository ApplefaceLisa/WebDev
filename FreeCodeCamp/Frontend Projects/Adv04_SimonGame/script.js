var simon = {
    switch: false,    // off/on status
    started: false,   // start/stop status
    strict: false,    // mode
    count: 0,         // count
    countDown: 0,
    timer: null,
    player: "simon",  // "simon" or "user"
    key: ["green", "red", "yellow", "blue"],
    Keys: [],         // keys to be played by simon

    switchDom: null,
    startDom: null,
    strictDom: null,
    countDom: null,

    init: function() {
        this.switchDom = document.getElementById("switch");
        this.startDom = document.getElementById("start");
        this.strictDom = document.getElementById("strict");
        this.countDom = document.getElementById("count");
        this.count = 2;

        this.simonPlay();
    },

    simonPlay: function() {
        this.countDown = this.count;
        this.timer = setTimeout(function run() {
          var index = Math.floor(Math.random() * simon.key.length);
          var id = simon.key[index];
          simon.playKey(id);
          simon.Keys.push(id);
          --simon.countDown;
          if (simon.countDown <= 0) {
            clearTimeout(simon.timer);
          } else {
            simon.timer = setTimeout(run, 1000);
          }
        }, 1000);
    },

    playKey: function(id) {
        document.getElementById(id).play();
    },


};


window.onload = function() {
  Array.from(document.getElementsByTagName("input")).forEach(function(obj) {
    obj.onclick = function(event) {
      var id = event.target.value;
      document.getElementById(id).play();
    };
  });

  simon.init();
  //setInterval(function(){ document.getElementById("green").play(); }, 3000);
}