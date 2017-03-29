var Simon = {
    switchOn: false,         // switch on / off
    started: false,          // start / stop
    strict: false,           // strict mode on / off
    count: 0,
    switchDom: null,
    startDom: null,
    strictDom: null,
    countDom: null,

    init: function() {
        this.switchDom = document.getElementById("pwr-sw");
        this.startDom = document.getElementById("start");
        this.strictDom = document.getElementById("strict");
        this.countDom = document.querySelector(".count");

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
        })
    }
};

window.onload = function() {
    Simon.init();
}
