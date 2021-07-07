var searchFormEl = $('#searchbar');
var searchBtn = $(".search-btn");
var apiKey = "cf5db8cdbf1bf2f7ec3cfc35c785407e";

//create variables for weather data
var cityNameEl = document.getElementById("cityname");
var addEmoji = document.querySelector("#main-city-card .emoji");
var addDate = document.querySelector("#main-city-card .date");
var addTemp = document.querySelector("#main-city-card .temp");
var addWind = document.querySelector("#main-city-card .wind");
var addHumidity = document.querySelector("#main-city-card .humidity");
//variables for small card 1
var addSmallEmoji1 = document.querySelector("#small-card1 .emoji");
var addSmallDate1 = document.querySelector("#small-card1 .date");
var addSmallTemp1 = document.querySelector("#small-card1 .temp");
var addSmallWind1 = document.querySelector("#small-card1 .wind");
var addSmallHumidity1 = document.querySelector("#small-card1 .humidity");
//variables for small card 2
var addSmallEmoji2 = document.querySelector("#small-card2 .emoji");
var addSmallDate2 = document.querySelector("#small-card2 .date");
var addSmallTemp2 = document.querySelector("#small-card2 .temp");
var addSmallWind2 = document.querySelector("#small-card2 .wind");
var addSmallHumidity2 = document.querySelector("#small-card2 .humidity");
//variables for small card 3
var addSmallEmoji3 = document.querySelector("#small-card3 .emoji");
var addSmallDate3 = document.querySelector("#small-card3 .date");
var addSmallTemp3 = document.querySelector("#small-card3 .temp");
var addSmallWind3 = document.querySelector("#small-card3 .wind");
var addSmallHumidity3 = document.querySelector("#small-card3 .humidity");
//variables for small card 4
var addSmallEmoji4 = document.querySelector("#small-card4 .emoji");
var addSmallDate4 = document.querySelector("#small-card4 .date");
var addSmallTemp4 = document.querySelector("#small-card4 .temp");
var addSmallWind4 = document.querySelector("#small-card4 .wind");
var addSmallHumidity4 = document.querySelector("#small-card4 .humidity");
//variables for small card 5
var addSmallEmoji5 = document.querySelector("#small-card5 .emoji");
var addSmallDate5 = document.querySelector("#small-card5 .date");
var addSmallTemp5 = document.querySelector("#small-card5 .temp");
var addSmallWind5 = document.querySelector("#small-card5 .wind");
var addSmallHumidity5 = document.querySelector("#small-card5 .humidity");


//run function when form is submitted
//search button looks for city and weather info
function searchFormSubmit(event) {
    event.preventDefault()
    // searchFormEl = event.target.elements.searchbar.value;
    // var searchFormEl = document.querySelector("#searchbar");
    if (!searchFormEl) {
        console.error("You need to enter a city!");
        return;
    }

}

$("#search-btn").click(searchApi);

// Take dataResults from weather API 
// and insert content into HTML
function printData(dataResults) {


    var conditionsMain = dataResults.weather[0].main;
    var todayDate = moment().format("MMM Do YYYY");

    //main card
    cityNameEl.textContent = dataResults.name
    addTemp.textContent = dataResults.main.temp;
    addDate.textContent = todayDate
    addWind.textContent = dataResults.wind.speed;
    addHumidity.textContent = dataResults.main.humidity;


    //emoji main card
    if (conditionsMain === "Clear") {
        addEmoji.innerHTML = "☀";
    } else if (conditionsMain === "Rain") {
        addEmoji.innerHTML = "🌧"
    } else if (conditionsMain === "Snow") {
        addEmoji.innerHTML = "❄"
    } else if (conditionsMain === "Extreme") {
        addEmoji.innerHTML = "☠"
    } else if (conditionsMain === "Thunderstorm") {
        addEmoji.innerHTML = "⛈"
    } else if (conditionsMain === "Clouds") {
        addEmoji.innerHTML = "⛅"
    } else {
        addEmoji.innerHTML = "⁉"
    }

}

//5 day forecast api results

function printSmallData(fiveDayResults) {
    var smConditions = fiveDayResults.list[0].weather[0].main

    startDate = moment().format("MMM Do YYYY");
    var futureDay1 = moment(startDate, "MMM Do YYYY").add(1, "days");
    var futureDay2 = moment(startDate, "MMM Do YYYY").add(2, "days");
    var futureDay3 = moment(startDate, "MMM Do YYYY").add(3, "days");
    var futureDay4 = moment(startDate, "MMM Do YYYY").add(4, "days");
    var futureDay5 = moment(startDate, "MMM Do YYYY").add(5, "days");

    // small card 1  
    addSmallTemp1.textContent = fiveDayResults.list[0].main.temp;
    addSmallDate1.textContent = futureDay1
    addSmallWind1.textContent = fiveDayResults.list[0].wind.speed;
    addSmallHumidity1.textContent = fiveDayResults.list[0].main.humidity;
    // small card 2
    addSmallTemp2.textContent = fiveDayResults.list[1].main.temp;
    addSmallDate2.textContent = futureDay2
    addSmallWind2.textContent = fiveDayResults.list[1].wind.speed;
    addSmallHumidity2.textContent = fiveDayResults.list[1].main.humidity;
    //small card 3
    addSmallTemp3.textContent = fiveDayResults.list[2].main.temp;
    addSmallDate3.textContent = futureDay3;
    addSmallWind3.textContent = fiveDayResults.list[2].wind.speed;
    addSmallHumidity3.textContent = fiveDayResults.list[2].main.humidity;
    //small card 4
    addSmallTemp4.textContent = fiveDayResults.list[3].main.temp;
    addSmallDate4.textContent = futureDay4;
    addSmallWind4.textContent = fiveDayResults.list[3].wind.speed;
    addSmallHumidity4.textContent = fiveDayResults.list[3].main.humidity;
    //small card 5
    addSmallTemp5.textContent = fiveDayResults.list[4].main.temp;
    addSmallDate5.textContent = futureDay5;
    addSmallWind5.textContent = fiveDayResults.list[4].wind.speed;
    addSmallHumidity5.textContent = fiveDayResults.list[4].main.humidity;

    //emoji small card 1
    if (smConditions === "Clear") {
        addSmallEmoji1.innerHTML = "☀";
    } else if (smConditions === "Rain") {
        addSmallEmoji1.innerHTML = "🌧"
    } else if (smConditions === "Snow") {
        addSmallEmoji1.innerHTML = "❄"
    } else if (smConditions === "Extreme") {
        addSmallEmoji1.innerHTML = "☠"
    } else if (smConditions === "Thunderstorm") {
        addSmallEmoji1.innerHTML = "⛈"
    } else if (smConditions === "Clouds") {
        addSmallEmoji1.innerHTML = "⛅"
    } else {
        addSmallEmoji1.innerHTML = "⁉"
    }
    //emoji small card 2 
    if (smConditions === "Clear") {
        addSmallEmoji2.innerHTML = "☀";
    } else if (smConditions === "Rain") {
        addSmallEmoji2.innerHTML = "🌧"
    } else if (smConditions === "Snow") {
        addSmallEmoji2.innerHTML = "❄"
    } else if (smConditions === "Extreme") {
        addSmallEmoji2.innerHTML = "☠"
    } else if (smConditions === "Thunderstorm") {
        addSmallEmoji2.innerHTML = "⛈"
    } else if (smConditions === "Clouds") {
        addSmallEmoji2.innerHTML = "⛅"
    } else {
        addSmallEmoji2.innerHTML = "⁉"
    }
    //emoji small card 3
    if (smConditions === "Clear") {
        addSmallEmoji3.innerHTML = "☀";
    } else if (smConditions === "Rain") {
        addSmallEmoji3.innerHTML = "🌧"
    } else if (smConditions === "Snow") {
        addSmallEmoji3.innerHTML = "❄"
    } else if (smConditions === "Extreme") {
        addSmallEmoji3.innerHTML = "☠"
    } else if (smConditions === "Thunderstorm") {
        addSmallEmoji3.innerHTML = "⛈"
    } else if (smConditions === "Clouds") {
        addSmallEmoji3.innerHTML = "⛅"
    } else {
        addSmallEmoji3.innerHTML = "⁉"
    }
    //emoji small card 4
    if (smConditions === "Clear") {
        addSmallEmoji4.innerHTML = "☀";
    } else if (smConditions === "Rain") {
        addSmallEmoji4.innerHTML = "🌧"
    } else if (smConditions === "Snow") {
        addSmallEmoji4.innerHTML = "❄"
    } else if (smConditions === "Extreme") {
        addSmallEmoji4.innerHTML = "☠"
    } else if (smConditions === "Thunderstorm") {
        addSmallEmoji4.innerHTML = "⛈"
    } else if (smConditions === "Clouds") {
        addSmallEmoji4.innerHTML = "⛅"
    } else {
        addSmallEmoji4.innerHTML = "⁉"
    }
    //emoji small card 5
    if (smConditions === "Clear") {
        addSmallEmoji5.innerHTML = "☀";
    } else if (smConditions === "Rain") {
        addSmallEmoji5.innerHTML = "🌧"
    } else if (smConditions === "Snow") {
        addSmallEmoji5.innerHTML = "❄"
    } else if (smConditions === "Extreme") {
        addSmallEmoji5.innerHTML = "☠"
    } else if (smConditions === "Thunderstorm") {
        addSmallEmoji5.innerHTML = "⛈"
    } else if (smConditions === "Clouds") {
        addSmallEmoji5.innerHTML = "⛅"
    } else {
        addSmallEmoji5.innerHTML = "⁉"
    }

}


//fetch API
function searchApi() {
    var location = searchFormEl.val();

    var queryString = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey + '&units=imperial';


    fetch(queryString)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (logResults) {
            // console.log(logResults);
            printData(logResults);
        })
        .catch(function (error) {
            console.error(error);
        })


    //5 day forecast    

    var multiDayQuery = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + apiKey + '&units=imperial';

    fetch(multiDayQuery)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (logFutureResults) {
            console.log(logFutureResults);
            printSmallData(logFutureResults);
        })
        .catch(function (error) {
            console.error(error);
        })
    // info is saved to local storage


    // when new search is done, new button appears with that cities name
    // button for old city contains old local storage info
    function createBtn() {
        var pastBtn = document.createElement("button");
        pastBtn.classList.add("past-city")
        pastBtn.innerHTML = location;
        document.body.appendChild(pastBtn);



    }
   
 createBtn();
}

$(".past-city").click(getLocal);
function storeLocal() {
    pastCities = [];
    pastCities.push(location);
    localStorage.setItem("pastCities", JSON.stringify(pastCities));
    var pastCities;

}

function getLocal() {
    JSON.parse(localStorage.getItem("pastCities"[0]))
    searchApi();
}