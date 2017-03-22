var pomodoro = {
    started: false,
    status: "session",     // should be "session" or "break"
    break: {
      len: 5,
      hrs: 0,
      mins: 5,
      secs: 0,
      displayDom: null,
      minusDom: null,
      addDom: null
    },

    session: {
      len: 25,
      hrs: 0,
      mins: 25,
      secs: 0,
      displayDom: null,
      minusDom: null,
      addDom: null
    },

    fillerHeight: 0,
    fillerIncrement: 0,
    interval: null,

    hoursDom: null,
    minutesDom: null,
    secondsDom: null,
    statusDom: null,
    fillerDom: null,

    format: function(t) {
      return ("0"+t).slice(-2);
    },

    // init break and session
    initBS: function(self, vn) {   // vn should be "break" or "session"
      self[vn].displayDom = document.getElementById(vn);
      self[vn].minusDom = document.getElementById(vn+"Minus");
      self[vn].addDom = document.getElementById(vn+"Add");
    },

    timerDisplay: function(vn) {
      if (this.status === vn) {
        var obj = this[this.status];
        this.hoursDom.textContent = (obj.hrs > 0 ? (this.format(obj.hrs)+":") : "");
        this.minutesDom.textContent = this.format(obj.mins);
        this.secondsDom.textContent = this.format(obj.secs);
      }
    },

    resetTimer: function(vn) {
      if (!this.started) {
        var obj = this[vn];
        var len = obj.len;
        obj.displayDom.value = len;

        var h = Math.floor(len / 60);
        obj.hrs = h > 0 ? h : 0;
        obj.mins = len % 60;
        obj.secs = 0;
      }
    },

    init: function() {
      var self = this;
      this.hoursDom = document.getElementById("hours");
      this.minutesDom = document.getElementById('minutes');
      this.secondsDom = document.getElementById('seconds');
      this.fillerDom = document.getElementById('filler');
      this.statusDom = document.getElementById("status");

      this.initBS(self, "break");
      this.initBS(self, "session");

      this.break.minusDom.onclick = function() {
        if (self.break.len > 1) {
          --self.break.len;
          self.resetTimer.call(self, "break");
        }
        self.timerDisplay.call(self, "break");
      }

      this.break.addDom.onclick = function() {
        if (self.break.len < 1440) {
          ++self.break.len;
          self.resetTimer.call(self, "break");
        }
        self.timerDisplay.call(self, "break");
      }

      this.session.minusDom.onclick = function() {
        if (self.session.len > 1) {
          --self.session.len;
          self.resetTimer.call(self, "session");
        }
        self.timerDisplay.call(self, "session");
      }

      this.session.addDom.onclick = function() {
        if (self.session.len < 1440) {
          ++self.session.len;
          self.resetTimer.call(self, "session");
        }
        self.timerDisplay.call(self, "session");
      }

/*
      this.interval = setInterval(function() {
        self.intervalCallback.apply(self);
      }, 1000);
*/
    }
}

window.onload = function() {
    pomodoro.init();
};
