var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
var apikey = "&appid=f48bf43dc4ee03b95ab57a63f2fc0386"
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="
var city = "atlanta"
var request = queryURL + city + apikey
var forecastRequest = forecastURL + city + apikey

// current weather
$.ajax({
    url: request,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        $(".city").text("Atlanta, GA")
        $(".temp").text("Temperature: " + response.main.temp + " C")
        $(".feelsLike").text("Feels Like: " + response.main.feels_like)
        $(".humidity").text("Humidity: " + response.main.humidity + "%")
        $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH")
    })
// day 1 code
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        $("#day1").text(response.list[2].dt_txt)
        var icon1 = $("<img>").text(response.list[2].weather[0].icon)
        $("#icon1").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[2].main.temp + "C")
        $("#icon1").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[2].main.humidity + "%")
        $("#icon1").append(iconhumid)
    })
// day 2
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day2").text(response.list[10].dt_txt)
        var icon1 = $("<img>").text(response.list[10].weather[0].icon)
        $("#icon2").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[10].main.temp + "C")
        $("#icon2").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[10].main.humidity + "%")
        $("#icon2").append(iconhumid)
    })
// day 3
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day3").text(response.list[18].dt_txt)
        var icon1 = $("<img>").text(response.list[18].weather[0].icon)
        $("#icon3").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[18].main.temp + "C")
        $("#icon3").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[18].main.humidity + "%")
        $("#icon3").append(iconhumid)
    })
// day 4
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day4").text(response.list[26].dt_txt)
        var icon1 = $("<img>").text(response.list[26].weather[0].icon)
        $("#icon4").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[26].main.temp + "C")
        $("#icon4").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[26].main.humidity + "%")
        $("#icon4").append(iconhumid)
    })
// day 5
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day5").text(response.list[34].dt_txt)
        var icon1 = $("<img>").text(response.list[34].weather[0].icon)
        $("#icon5").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[34].main.temp + "C")
        $("#icon5").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
        $("#icon5").append(iconhumid)
    })

//  BUTTON CODE 
$("#thisCity").click(function() {
    var city = $(this).text
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
    var apikey = "&appid=f48bf43dc4ee03b95ab57a63f2fc0386"
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="
    var request = queryURL + city + apikey
    var forecastRequest = forecastURL + city + apikey

    $.ajax({
        url: request,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            $(".city").text($(this).text)
            $(".temp").text("Temperature: " + response.main.temp + " C")
            $(".feelsLike").text("Feels Like: " + response.main.feels_like)
            $(".humidity").text("Humidity: " + response.main.humidity + "%")
            $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH")
        })
    
    // day 1 code
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
        $("#day1").text(response.list[2].dt_txt)
        var icon1 = $("<img>").text(response.list[2].weather[0].icon)
        $("#icon1").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[2].main.temp + "C")
        $("#icon1").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[2].main.humidity + "%")
        $("#icon1").append(iconhumid)
    })
// day 2
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day2").text(response.list[10].dt_txt)
        var icon1 = $("<img>").text(response.list[10].weather[0].icon)
        $("#icon2").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[10].main.temp + "C")
        $("#icon2").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[10].main.humidity + "%")
        $("#icon2").append(iconhumid)
    })
// day 3
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day3").text(response.list[18].dt_txt)
        var icon1 = $("<img>").text(response.list[18].weather[0].icon)
        $("#icon3").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[18].main.temp + "C")
        $("#icon3").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[18].main.humidity + "%")
        $("#icon3").append(iconhumid)
    })
// day 4
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day4").text(response.list[26].dt_txt)
        var icon1 = $("<img>").text(response.list[26].weather[0].icon)
        $("#icon4").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[26].main.temp + "C")
        $("#icon4").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[26].main.humidity + "%")
        $("#icon4").append(iconhumid)
    })
// day 5
$.ajax({
    url: forecastRequest,
    method: "GET"
})
    .then(function (response) {
        $("#day5").text(response.list[34].dt_txt)
        var icon1 = $("<img>").text(response.list[34].weather[0].icon)
        $("#icon5").append(icon1)
        var icontemp = $("<p>").text("Temp: " + response.list[34].main.temp + "C")
        $("#icon5").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
        $("#icon5").append(iconhumid)
    })
});

// SEARCH CODE
$("#searchButton").click(function() {
    var city = $("userCity").val.trim()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
    var apikey = "&appid=f48bf43dc4ee03b95ab57a63f2fc0386"
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="
    var request = queryURL + city + apikey
    var forecastRequest = forecastURL + city + apikey

    $.ajax({
        url: request,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            $(".city").text($(this).text)
            $(".temp").text("Temperature: " + response.main.temp + " C")
            $(".feelsLike").text("Feels Like: " + response.main.feels_like)
            $(".humidity").text("Humidity: " + response.main.humidity + "%")
            $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH")
        })
        $.ajax({
            url: forecastRequest,
            method: "GET"
        })
            .then(function (response) {
                console.log(response)
                $("#day1").text(response.list[2].dt_txt)
                var icon1 = $("<img>").text(response.list[2].weather[0].icon)
                $("#icon1").append(icon1)
                var icontemp = $("<p>").text("Temp: " + response.list[2].main.temp + "C")
                $("#icon1").append(icontemp)
                var iconhumid = $("<p>").text("Humidity: " + response.list[2].main.humidity + "%")
                $("#icon1").append(iconhumid)
            })
        // day 2
        $.ajax({
            url: forecastRequest,
            method: "GET"
        })
            .then(function (response) {
                $("#day2").text(response.list[10].dt_txt)
                var icon1 = $("<img>").text(response.list[10].weather[0].icon)
                $("#icon2").append(icon1)
                var icontemp = $("<p>").text("Temp: " + response.list[10].main.temp + "C")
                $("#icon2").append(icontemp)
                var iconhumid = $("<p>").text("Humidity: " + response.list[10].main.humidity + "%")
                $("#icon2").append(iconhumid)
            })
        // day 3
        $.ajax({
            url: forecastRequest,
            method: "GET"
        })
            .then(function (response) {
                $("#day3").text(response.list[18].dt_txt)
                var icon1 = $("<img>").text(response.list[18].weather[0].icon)
                $("#icon3").append(icon1)
                var icontemp = $("<p>").text("Temp: " + response.list[18].main.temp + "C")
                $("#icon3").append(icontemp)
                var iconhumid = $("<p>").text("Humidity: " + response.list[18].main.humidity + "%")
                $("#icon3").append(iconhumid)
            })
        // day 4
        $.ajax({
            url: forecastRequest,
            method: "GET"
        })
            .then(function (response) {
                $("#day4").text(response.list[26].dt_txt)
                var icon1 = $("<img>").text(response.list[26].weather[0].icon)
                $("#icon4").append(icon1)
                var icontemp = $("<p>").text("Temp: " + response.list[26].main.temp + "C")
                $("#icon4").append(icontemp)
                var iconhumid = $("<p>").text("Humidity: " + response.list[26].main.humidity + "%")
                $("#icon4").append(iconhumid)
            })
        // day 5
        $.ajax({
            url: forecastRequest,
            method: "GET"
        })
            .then(function (response) {
                $("#day5").text(response.list[34].dt_txt)
                var icon1 = $("<img>").text(response.list[34].weather[0].icon)
                $("#icon5").append(icon1)
                var icontemp = $("<p>").text("Temp: " + response.list[34].main.temp + "C")
                $("#icon5").append(icontemp)
                var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
                $("#icon5").append(iconhumid)
            })
        });