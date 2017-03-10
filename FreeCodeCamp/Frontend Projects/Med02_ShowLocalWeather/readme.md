# Show the Local Weather

- Objective: Build a CodePen.io app that is functionally similar to this: http://codepen.io/FreeCodeCamp/full/bELRjV.

- Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

- User Story: 
  - I can see the weather in my current location.
  - I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
  - I can push a button to toggle between Fahrenheit and Celsius.

- We recommend using the Open Weather API. This will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.

- Remember to use Read-Search-Ask if you get stuck.

- When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

- You can get feedback on your project by sharing it with your friends on Facebook.

# Reference
- [OpenWeatherMap](http://openweathermap.org/api)
  - current weather
  
    http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=8a933ba984244ede4e8df3b37fc3a634
    
    - api response
    ```JSON
     {"coord":{"lon":139,"lat":35},
      "sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
      "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
      "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
      "wind":{"speed":7.31,"deg":187.002},
      "rain":{"3h":0},
      "clouds":{"all":92},
      "dt":1369824698,
      "id":1851632,
      "name":"Shuzenji",
      "cod":200}
    ```
    Note: the temp unit is kelvin. 
    ```
    T(°C) = T(K) - 273.15
    T(°F) = T(K) × 9/5 - 459.67
    ```
    
    - [weather icons](https://openweathermap.org/weather-conditions)
    
- [Show the Local Weather Project: Free Code Camp](https://www.youtube.com/watch?v=eLK28VPJvCE)

- [jQuery CDN](https://code.jquery.com/)

- [Chrome 50 Geo Location Fix](https://www.youtube.com/watch?v=aLKJhOmBjBw&t=0s)
  - [IP Geolocation API](http://ip-api.com/docs/)

# [Submitted Code](http://codepen.io/ApplefaceLisa/pen/Wpjexy)
