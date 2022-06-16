const btn = document.getElementById("btn");

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'sunny';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'sunny';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}

function fetching( ) {

	const ID = document.querySelector("input");
    console.log(cityID=ID.value)
    const API_KEY = "a8fb5a447e41ecaabda52736d06000ab";
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&APPID=a8fb5a447e41ecaabda52736d06000ab');  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}
window.onload = function() {
    fetching( 6167865 );
  }
  //btn.addEventListener('click',  weatherBalloon( 6167865 ));
  console.log(d);
