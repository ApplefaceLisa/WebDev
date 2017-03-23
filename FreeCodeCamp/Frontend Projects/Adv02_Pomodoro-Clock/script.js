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

    timerDom: null,
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

    updateDom: function(vn) {
        if (this.status === vn) {
          var obj = this[this.status];
          this.statusDom.textContent = vn.toUpperCase();
          this.hoursDom.textContent = (obj.hrs > 0 ? (this.format(obj.hrs)+":") : "");
          this.minutesDom.textContent = this.format(obj.mins);
          this.secondsDom.textContent = this.format(obj.secs);
          // update filler
          this.fillerHeight = this.fillerHeight + this.fillerIncrement;
          this.fillerDom.style.height = this.fillerHeight + 'px';
        }
    },

    len2hms: function() {
      var len = this.len;
      var h = Math.floor(len / 60);
      this.hrs = h > 0 ? h : 0;
      this.mins = len % 60;
      this.secs = 0;
    },

    resetFiller: function() {
      this.fillerIncrement = 200/(this[this.status].len*60);
      this.fillerHeight = 0;
    },

    resetTimer: function(vn, step) {
      if (!this.started) {
        var obj = this[vn];
        obj.len += step;
        var len = obj.len;
        obj.displayDom.value = len;

        this.len2hms.call(obj);
        this.resetFiller();
        this.updateDom.call(this, vn);
      }
    },

    switchStatus: function() {
      if (this.status === "session") {
        this.status = "break";
        this.fillerDom.style.backgroundColor = "#f4d341";
      } else {
        this.status = "session";
        this.fillerDom.style.backgroundColor = "#99CC00";
      }
    },

    timerCountDown: function() {
      var obj = this[this.status];
      if (obj.secs == 0) {
        if (obj.mins == 0) {
          if (obj.hrs == 0) {
            this.switchStatus();
            this.len2hms.call(obj);
            this.resetFiller();
          } else {
            --obj.hrs;
            obj.mins = 59;
            obj.secs = 59;
          }
        } else {
          --obj.mins;
          obj.secs = 59;
        }
      } else {
        --obj.secs;
      }
      this.updateDom(this.status);
    },

    init: function() {
      var self = this;
      this.timerDom = document.getElementById("timer");
      this.hoursDom = document.getElementById("hours");
      this.minutesDom = document.getElementById('minutes');
      this.secondsDom = document.getElementById('seconds');
      this.fillerDom = document.getElementById('filler');
      this.statusDom = document.getElementById("status");

      this.initBS(self, "break");
      this.initBS(self, "session");
      this.resetFiller();

      this.break.minusDom.onclick = function() {
        if (self.break.len > 1) {
          self.resetTimer.call(self, "break", -1);
        }
      }

      this.break.addDom.onclick = function() {
        if (self.break.len < 1440) {
          self.resetTimer.call(self, "break", 1);
        }
      }

      this.session.minusDom.onclick = function() {
        if (self.session.len > 1) {
          self.resetTimer.call(self, "session", -1);
        }
      }

      this.session.addDom.onclick = function() {
        if (self.session.len < 1440) {
          self.resetTimer.call(self, "session", 1);
        }
      }

      this.timerDom.onclick = function() {
        this.started = !this.started;
        if (!this.started) {
          if (!this.interval) return;
          clearInterval(this.interval);
          this.interval = null;
        } else {
          this.interval = setInterval(function() {
            self.timerCountDown.apply(self);
          }, 1000);
        }
      }
    }
}

window.onload = function() {
    pomodoro.init();
};
