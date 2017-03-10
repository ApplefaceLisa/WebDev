function getNewQuote(){
    //callback function that actually updates the DOM
    function updateQuote(json){
      /*
      $("#content").text(json.quoteText);
      $("#author").text(json.quoteAuthor || "Unknown");
      */
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#content").text(json.quoteText);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
        $("#author").text(json.quoteAuthor || "Unknown");
      });

      colorChange();
    }

    //makes json request
    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/",
      {_: new Date().getTime(), //to prevent caching http://stackoverflow.com/a/31948654/1952996
       method: "getQuote",
       format: "json",
       lang : "en"},
      updateQuote);
}

//Open new window with tweet ready with current quote
function tweet(){
    var author = $("#content").text();
    var quote = $("#author").text();
    window.open("https://twitter.com/intent/tweet?text="+quote+" "+author+"&hashtags=FamousQuotes");
}

function colorChange(){
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
                '#e74c3c', '#9b59b6', '#FB6964', '#342224',
                "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  /*
  var newColor = colors[Math.floor(Math.random()*(colors.length))];
  //Change color of body, buttons and text
  $("body").css("background-color", newColor);
  $(".button").css({"background-color": newColor,
                    "border-color": newColor});
  $(".quote-box").css("color", newColor);
  */
  var newColor = colors[Math.floor(Math.random()*(colors.length))];
      $("html body").animate({
        backgroundColor: newColor,
        color: newColor
      }, 1000);
      $(".button").animate({
        backgroundColor: newColor
      }, 1000);
}

$(document).ready(function(){
  getNewQuote();//Get first quote for page load
  $("#new-quote").on("click", getNewQuote);//Associate getNewQuote with button
  $("#tweet-quote").on("click", tweet);
});