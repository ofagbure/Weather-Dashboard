var queryURL = "api.openweathermap.org/data/2.5/weather?q="
var apikey = "&appid=f48bf43dc4ee03b95ab57a63f2fc0386"
var request = queryURL+"atlanta,ga"+apikey
var forecastURL = "api.openweathermap.org/data/2.5/forecast?q="

$.ajax({
    url: request,
    method: "GET"
  })
    .then(function(response) {
        $(".city").text("Atlanta")
        $(".temp").text("Temperature: "+ response.main.temp)
        $(".feelsLike").text("Feels Like: "+response.main.feels_like)
        $(".humidity").text("Humidity: "+response.main.humidity)
        $(".windSpeed").text("Wind Speed: "+response.wind.speed)
    })

    $.ajax({
        url:forecastURL,
        method: "GET"
      })
        .then(function(response) {
         
        })
