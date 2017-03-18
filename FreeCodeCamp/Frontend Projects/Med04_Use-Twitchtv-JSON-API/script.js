function showChannelInfo(data, channel, logo) {
  var ul = document.getElementById("channels");
  var li = document.createElement("li");
  var display_name = channel, display_logo = logo;
  var game = "Offline", status = "Offline";
  /*
  li.innerHTML = "<a href='https://www.twitch.tv/" + channel + "' target='blank'>" + channel + "</a>";
  */
  console.log("logo ", logo);
  if (data.stream === null) {
  } else if (data.stream === undefined) {
      game = "Account Closed";
  } else {
      game = data.stream.game;
      status = "online";
      display_name = data.stream.channel.display_name;
      display_logo = data.stream.channel.logo;
  };
  /*
  //console.log(display_name, ", ", display_logo);
  li.innerHTML = '<img src="'+ display_logo + '" class="logo">';
  //console.log(li.innerHTML);
  li.innerHTML += "<a href='https://www.twitch.tv/" + channel + "' target='blank'>" + display_name + "</a>";
  li.innerHTML += "<h2>" + status +"</h2>"

  ul.appendChild(li);
  */
  var url = "https://www.twitch.tv/" + channel;
  var description = (status === "online") ? (': ' + data.status) : "";
  var html = '<div class="row ' +
              status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' +
              display_logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
              url + '" target="_blank">' +
              display_name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+
              game + '<span class="hidden-xs">' +
              description + '</span></div></div>';
  status === "online" ? $("#display").prepend(html) : $("#display").append(html);
}

function myRequest(url, channel, logo) {
  var rawData, data;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      rawData = this.response;
      data = JSON.parse(this.response);
      //console.log("channel: "+channel+", data: ");
      console.log(data);
      showChannelInfo(data, channel, logo);
    }
  }
  request.send();
}

function checkChannels() {
  var channels = ["ESL_SC2", "OgamingSC2", "freecodecamp", "monstercat"];
  var logos = [
    "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/monstercat-profile_image-72a449ee382a5425-300x300.png"
  ];
  /*
  var channel1 = 'castro_1021';
  var channel2 = 'monstercat';
  var channel = channel2;
  */
  var clientId = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
  for (var i = 0; i < channels.length; i++) {
    var url = 'https://api.twitch.tv/kraken/streams/' + channels[i] + '?client_id=' + clientId;
    myRequest(url, channels[i], logos[i]);
  }
}

$(document).ready(function() {
  checkChannels();
  $(".selector").click(function() {
    $(".selector").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('id');
    if (status === "all") {
      $(".online, .offline").removeClass("hidden");
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
    }
  })
});