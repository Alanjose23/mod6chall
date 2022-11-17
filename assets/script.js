var apik = '54a60b82927ece1254952b9dbcf68376';
var weather = document.getElementsByClassName('container');
var weather1 = document.getElementById('day1');
var weather2 = document.getElementById('day2');
var weather3 = document.getElementById('day3');
var weather4 = document.getElementById('day4');
var weather5 = document.getElementById('day5')
function getLocation(location)  {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
  var cityn = data[0].name;
  var lat = data[0].lat
  var long = data[0].lon
 getWeather(lat,long);
});

}

function getWeather(la,lo) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    var current = data.name;
    var date = moment().format("MM/DD/YYYY");
    document.querySelector('.date').textContent = date;
    document.querySelector('.cucity').textContent = current;
    document.querySelector('.temperature1').textContent = data.main.temp;
    document.querySelector('.windspeed1').textContent = data.wind.speed;
    document.querySelector('.humidity1').textContent = data.main.humidity; 
getWeatherfordays(la,lo,data.dt);
  })
}

var query = document.getElementById("search-input");
var searchval;
var search = document.getElementById("weathbtn");

query.addEventListener('keyup', function(e) {
    searchval = e.target.value

})
search.addEventListener('click', function Parentsearch(e) {
e.preventDefault()
getLocation(searchval);
});




