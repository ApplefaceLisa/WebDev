function getWeather() {
  $.getJSON("http://ip-api.com/json", function(data) {
    var location = "lat=" + data.lat + "&lon=" + data.lon;

    var country = data.country;
    var city = data.city;
    $("#city").text(city);
    $("#country").text(country);

    var api = "http://api.openweathermap.org/data/2.5/weather?"
            + location + "&APPID=8a933ba984244ede4e8df3b37fc3a634";

    $.getJSON(api, function(data) {
      /* get temp and convert */
      var kelvin = data.main.temp;
      var fahrenheit = (kelvin * 9/5 - 459.67).toFixed(2);
      var Celsius = (kelvin - 273.15).toFixed(2);
      // Display temperature
      var fTemp = true;
      $("#uint").text("F");
      $("#temp").text(fahrenheit);
      $("#uint").on("click", function() {
        if(fTemp) {
          $("#uint").text("C");
          $("#temp").text(Celsius);
        } else {
          $("#uint").text("F");
          $("#temp").text(fahrenheit);
        }
        fTemp = !fTemp;
        console.log(fTemp);
      })

      var condition = data.weather[0].description;
      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
      $("#weather-condition").text(condition);
      document.images["weather-icon"].src = icon;
    })
  })
}

$(document).ready(function() {
  getWeather();
  $("#update").on("click", getWeather);
})
