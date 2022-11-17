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
    var current = data.name;
    console.log(data);
    var date = moment().format("MM/DD/YYYY");
    document.querySelector('.date').textContent = "date: "+date;
    document.querySelector('.cucity').textContent = "city: "+current;
    document.querySelector('.temperature1').textContent = "temp: "+data.main.temp;
    document.querySelector('.windspeed1').textContent = "windspeed: "+data.wind.speed;
    document.querySelector('.humidity1').textContent = "humidity: " +data.main.humidity; 
    console.log(data.uvi)
getWeatherfordays(la,lo,data.dt);
  })
}

function getWeatherfordays(latt,long,dateon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latt}&lon=${long}&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
      document.querySelector('.temperature2').textContent = "temp: "+data.list[4].main.temp;
    document.querySelector('.windspeed2').textContent = "windspeed: "+data.list[4].wind.speed;
    document.querySelector('.humidity2').textContent = "humidity: "+data.list[4].main.humidity;

    document.querySelector('.temperature3').textContent = "temp: "+data.list[12].main.temp;
    document.querySelector('.windspeed3').textContent = "windspeed: "+data.list[12].wind.speed;
    document.querySelector('.humidity3').textContent = "humidity: "+data.list[12].main.humidity;  

    document.querySelector('.temperature4').textContent = "temp: "+data.list[20].main.temp;
    document.querySelector('.windspeed4').textContent = "windspeed: "+data.list[20].wind.speed;
    document.querySelector('.humidity4').textContent = "humidity: "+data.list[20].main.humidity;  

    document.querySelector('.temperature5').textContent = "temp: "+data.list[28].main.temp;
    document.querySelector('.windspeed5').textContent = "windspeed: "+data.list[28].wind.speed;
    document.querySelector('.humidity5').textContent = "humidity: "+data.list[28].main.humidity;  

    document.querySelector('.temperature6').textContent = "temp: "+data.list[36].main.temp;
    document.querySelector('.windspeed6').textContent = "windspeed: "+data.list[36].wind.speed;
    document.querySelector('.humidity6').textContent = "humidity: "+data.list[36].main.humidity;  
    
    // every 8th moment is the weather for the next day
    console.log(data);
  })}

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




