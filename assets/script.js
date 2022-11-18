var apik = '54a60b82927ece1254952b9dbcf68376';
// local storage items(could not get to work)
// document.querySelector('recent').textContent = localStorage.getItem('a');
// function getls(namesofcity) {
//   localStorage.setItem('a', namesofcity);
//   document.querySelector('recent').textContent = namesofcity;
// }
function getLocation(location)  {

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
  var cityn = data[0].name;
  var lat = data[0].lat;
  var long = data[0].lon;
//  getls(cityn);
 getWeather(lat,long);
});

}

function getWeather(la,lo) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
    var current = data.name;

    var date = moment().format("MM/DD/YYYY");
    var icon = 'https://openweathermap.org/img/w/'+data.weather[0].icon+".png";
    
    document.querySelector('.weatherimage').setAttribute('src',icon);
    document.querySelector('.date').textContent = "date: "+date;
    document.querySelector('.cucity').textContent = "city: "+current;
    document.querySelector('.temperature1').textContent = "temp: "+KtoF(data.main.temp) + "degrees F";
    document.querySelector('.windspeed1').textContent = "windspeed: "+data.wind.speed;
    document.querySelector('.humidity1').textContent = "humidity: " +data.main.humidity; 

getWeatherfordays(la,lo,data.dt);
  })
}


function KtoF(kelvin){
  var conversion = ((kelvin - 273.15)* 1.8) + 32;
  return Math.round(conversion);
}
function getWeatherfordays(latt,long,dateon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latt}&lon=${long}&appid=${apik}`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('.weatherimage2').setAttribute('src',"https://openweathermap.org/img/w/"+ data.list[4].weather[0].icon + ".png");
    document.querySelector('.date2').textContent = "date: "+ moment().add(1, 'd').format('MM/DD/YYYY');
      document.querySelector('.temperature2').textContent = "temp: "+KtoF(data.list[4].main.temp) + "degrees F";
    document.querySelector('.windspeed2').textContent = "windspeed: "+data.list[4].wind.speed;
    document.querySelector('.humidity2').textContent = "humidity: "+data.list[4].main.humidity;


    document.querySelector('.weatherimage3').setAttribute('src',"https://openweathermap.org/img/w/"+ data.list[12].weather[0].icon + ".png");
    document.querySelector('.date3').textContent = "date: "+ moment().add(2, 'd').format('MM/DD/YYYY');
    document.querySelector('.temperature3').textContent = "temp: "+KtoF(data.list[12].main.temp) + "degrees F";
    document.querySelector('.windspeed3').textContent = "windspeed: "+data.list[12].wind.speed;
    document.querySelector('.humidity3').textContent = "humidity: "+data.list[12].main.humidity;  


    document.querySelector('.weatherimage4').setAttribute('src',"https://openweathermap.org/img/w/"+ data.list[20].weather[0].icon + ".png");
    document.querySelector('.date4').textContent = "date: "+ moment().add(3, 'd').format('MM/DD/YYYY');
    document.querySelector('.temperature4').textContent = "temp: "+KtoF(data.list[20].main.temp) + "degrees F";
    document.querySelector('.windspeed4').textContent = "windspeed: "+data.list[20].wind.speed;
    document.querySelector('.humidity4').textContent = "humidity: "+data.list[20].main.humidity;  


    document.querySelector('.weatherimage5').setAttribute('src',"https://openweathermap.org/img/w/"+ data.list[28].weather[0].icon + ".png");
    document.querySelector('.date5').textContent = "date: "+ moment().add(4, 'd').format('MM/DD/YYYY');
    document.querySelector('.temperature5').textContent = "temp: "+KtoF(data.list[28].main.temp) + "degrees F";
    document.querySelector('.windspeed5').textContent = "windspeed: "+data.list[28].wind.speed;
    document.querySelector('.humidity5').textContent = "humidity: "+data.list[28].main.humidity;  


    document.querySelector('.weatherimage6').setAttribute('src',"https://openweathermap.org/img/w/"+ data.list[36].weather[0].icon + ".png");
    document.querySelector('.date6').textContent = "date: "+ moment().add(5, 'd').format('MM/DD/YYYY');
    document.querySelector('.temperature6').textContent = "temp: "+KtoF(data.list[36].main.temp) + "degrees F";
    document.querySelector('.windspeed6').textContent = "windspeed: "+data.list[36].wind.speed;
    document.querySelector('.humidity6').textContent = "humidity: "+data.list[36].main.humidity;  
    
    // every 8th moment is the weather for the next day

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




