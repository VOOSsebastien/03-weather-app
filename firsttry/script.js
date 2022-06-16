const btn = document.getElementById("btn");
const body = document.querySelector("body");

const meteo = async () => {
    var lat = "50.634719";
    var lon = "5.571109";
    var part = "daily";
    const ID = document.querySelector("input");
console.log(cityID=ID.value)
    const API_KEY = "a8fb5a447e41ecaabda52736d06000ab";
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&APPID=a8fb5a447e41ecaabda52736d06000ab');
    const json = await response.json().catch(console.error);
    const list = document.createElement("ul");
    document.querySelector('.meteo').appendChild(list);
console.log(json.weather);
        var item = document.createElement('li');
        list.appendChild(item);
        console.log(json)

        //item.innerHTML=(json.weather.visibility,json.base,json.main,json.visibility,json.wind,json.clouds,json.rain,json.sys,json.timezone,json.id,json.name);
        let test=[];
        var celcius = Math.round(parseFloat(json.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(json.main.temp)-273.15)*1.8)+32); 
test=["La météo pour la ville de " +json.name+":/n La temperature y est de : "+celcius+"° Le vent soufle vers "+json.wind.deg+"et sa force est de : "+json.wind.speed+json]
        //test=[json.weather.main,json.base,json.main,json.visibility,json.wind,json.clouds,json.rain,json.sys,json.timezone,json.id,json.name];
        item.innerHTML=test;
       for(i=0;i<16;i++){
            
        //item.innerHTML+="NEW                                        "+test[i];

       }
        console.log(test.toString());

        console.log(list);
}
btn.addEventListener('click', meteo);