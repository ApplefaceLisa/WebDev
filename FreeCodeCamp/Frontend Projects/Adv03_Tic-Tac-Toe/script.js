var game = {
    user: '',
    computer: '',
    userSign: '',
    computerSign: '',
    currentPlayer: '',
    lots: [0,1,2,3,4,5,6,7,8],
    squares: ["first", "second", "third", "fourth",
              "fifth", "sixth", "seventh", "eigth", "ninth"],
    squareSign: ["E", "E", "E", "E", "E", "E", "E", "E", "E"],

    setFig: function(event) {
      var id = event.target.parentElement.id;
      if (id === 'x') {
        this.user = '<span class="fa fa-times"></span>';
        this.computer = '<span class="fa fa-circle-o"></span>';
        this.userSign = 'X';
        this.computerSign = 'O';
      } else if (id === 'o') {
        this.user = '<span class="fa fa-circle-o"></span>';
        this.computer = '<span class="fa fa-times"></span>';
        this.userSign = 'O';
        this.computerSign = 'X';
      }
      document.getElementById("sign").style.display = "none";
      document.getElementById("select").style.display = "block";
    },

    selectFirst: function(event) {
        var id = event.target.id;
        document.getElementById("select").style.display = "none";
        document.getElementById("board").style.display = "block";
        if (id === "computer") {
            this.currentPlayer = "computer";
            this.computerMove();
        } else if (id === "you") {
            this.currentPlayer = "user";
            /* document.getElementById("U").style.visibility = "visible";*/
        }
    },

    userMove: function(event) {
        var eleId = event.target.id;
        var index = this.squares.indexOf(eleId);
        document.getElementById(eleId).innerHTML = this.user;
        document.getElementById(eleId).onclick = function() { return false; };
        this.squareSign[index] = this.userSign;
        this.lots.splice(this.lots.indexOf(index), 1);
        this.currentPlayer = "computer";
        /*
        document.getElementById("U").style.visibility = "invisible";
        document.getElementById("C").style.visibility = "visible";
        */
        this.computerMove();
    },

    computerMove: function() {
        var x = Math.floor(Math.random() * this.lots.length);
        var index = this.lots[x];
        var id = this.squares[index];
        document.getElementById(id).innerHTML = this.computer;
        document.getElementById(id).onclick = function() { return false; };
        this.squareSign[index] = this.computerSign;
        this.lots.splice(x,1);
        this.currentPlayer = "user";
        /*
        document.getElementById("C").style.visibility = "invisible";
        document.getElementById("U").style.visibility = "visible";
        */
    },

    init: function() {
        var self = this;
        Array.from(document.getElementsByTagName("button")).forEach(function(obj) {
            obj.onclick = this.setFig.bind(this);
        }, self);
        Array.from(document.getElementsByClassName("fa")).forEach(function(obj) {
            obj.onclick = this.selectFirst.bind(this);
        }, self);
        Array.from(document.getElementsByClassName("square")).forEach(function(obj) {
            obj.onclick = this.userMove.bind(this);
        }, self);
    }
};

window.onload = function() {
    game.init();
}

