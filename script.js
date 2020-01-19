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
        $(".city").text("Atlanta, GA (" + moment().format('L') + ")")
        var temp = Math.round((response.main.temp - 273) * 9/5 + 32)
        $(".temp").text("Temperature: " + temp + " F")
        var feels = Math.round((response.main.feels_like - 273) * 9/5 + 32)
        $(".feelsLike").text("Feels Like: " + feels + " F")
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
        $("#day1").text(moment(response.list[2].dt_txt).format("MMM Do YYYY"))
        var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png");
        $("#icon1").append(icon1)
        var temp = Math.round((response.list[2].main.temp - 273) * 9/5 + 32)
        var icontemp = $("<p>").text("Temp: " + temp + "F")
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
        $("#day2").text(moment(response.list[10].dt_txt).format("MMM Do YYYY"))
        var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon + "@2x.png");
        $("#icon2").append(icon1)
        var temp = Math.round((response.list[10].main.temp - 273) * 9/5 + 32)
        var icontemp = $("<p>").text("Temp: " + temp + "F")
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
        $("#day3").text(moment(response.list[18].dt_txt).format("MMM Do YYYY"))
        var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + "@2x.png");
        $("#icon3").append(icon1)
        var temp = Math.round((response.list[18].main.temp - 273) * 9/5 + 32)
        var icontemp = $("<p>").text("Temp: " + temp + "F")
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
        $("#day4").text(moment(response.list[26].dt_txt).format("MMM Do YYYY"))
        var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + "@2x.png");
        $("#icon4").append(icon1)
        var temp = Math.round((response.list[26].main.temp - 273) * 9/5 + 32)
        var icontemp = $("<p>").text("Temp: " + temp + "F")
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
        $("#day5").text(moment(response.list[34].dt_txt).format("MMM Do YYYY"))
        var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + "@2x.png");
        $("#icon5").append(icon1)
        var temp = Math.round((response.list[34].main.temp - 273) * 9/5 + 32)
        var icontemp = $("<p>").text("Temp: " + temp + "F")
        $("#icon5").append(icontemp)
        var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
        $("#icon5").append(iconhumid)
    })

//  BUTTON CODE 
$(".thisCity").click(function () {
    var city = $(this).attr("id")
    console.log(city);
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
            var temp = Math.round((response.main.temp - 273) * 9/5 + 32)
            var feels = Math.round((response.main.feels_like - 273) * 9/5 + 32)
            $(".city").text(city + " (" + moment().format('L') + ")")
            $(".temp").text("Temperature: " + temp + " F")
            $(".feelsLike").text("Feels Like: " + feels + " F")
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
            $("#day1").text(moment(response.list[2].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png");
            $("#icon1").append(icon1)
            var temp = Math.round((response.list[2].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day2").text(moment(response.list[10].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon + "@2x.png");
            $("#icon2").append(icon1)
            var temp = Math.round((response.list[10].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day3").text(moment(response.list[18].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + "@2x.png");
            $("#icon3").append(icon1)
            var temp = Math.round((response.list[18].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day4").text(moment(response.list[26].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + "@2x.png");
            $("#icon4").append(icon1)
            var temp = Math.round((response.list[26].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day5").text(moment(response.list[34].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + "@2x.png");
            $("#icon5").append(icon1)
            var temp = Math.round((response.list[34].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
            $("#icon5").append(icontemp)
            var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
            $("#icon5").append(iconhumid)
        })
});

// SEARCH CODE
$("#searchButton").click(function() {
    var city = $("#userCity").val.trim()
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
            $(".city").text(city)
            var temp = Math.round((response.main.temp - 273) * 9/5 + 32)
            var feels = Math.round((response.main.feels_like - 273) * 9/5 + 32)
            $(".temp").text("Temperature: " + temp + " F")
            $(".feelsLike").text("Feels Like: " + feels + " F")
            $(".humidity").text("Humidity: " + response.main.humidity + "%")
            $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH")
        })
    $.ajax({
        url: forecastRequest,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            $("#day1").text(moment(response.list[2].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png");
            $("#icon1").append(icon1)
            var temp = Math.round((response.list[2].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day2").text(moment(response.list[10].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon + "@2x.png");
            $("#icon2").append(icon1)
            var temp = Math.round((response.list[10].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day3").text(moment(response.list[18].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon + "@2x.png");
            $("#icon3").append(icon1)
            var temp = Math.round((response.list[18].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day4").text(moment(response.list[26].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon + "@2x.png");
            $("#icon4").append(icon1)
            var temp = Math.round((response.list[26].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
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
            $("#day5").text(moment(response.list[34].dt_txt).format("MMM Do YYYY"))
            var icon1 = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon + "@2x.png");
            $("#icon5").append(icon1)
            var temp = Math.round((response.list[34].main.temp - 273) * 9/5 + 32)
            var icontemp = $("<p>").text("Temp: " + temp + "F")
            $("#icon5").append(icontemp)
            var iconhumid = $("<p>").text("Humidity: " + response.list[34].main.humidity + "%")
            $("#icon5").append(iconhumid)
        })
});