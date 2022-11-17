
function getLocation(location)  {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=54a60b82927ece1254952b9dbcf68376`)
  .then((response) => response.json())
  .then((data) => {
  var cityn = data[0].name;
  var lat = data[0].lat
  var long = data[0].lon
  console.log(cityn)
});

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




console.log()