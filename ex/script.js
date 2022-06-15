const btn = document.getElementById("btn");
const body = document.querySelector("body");
const meteo = async () => {
    var lat = "50.634719";
    var lon = "5.571109";
    var part = "daily";
    const API_KEY = "e66ebcda72e60ebba6117c1d369b5693";
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a8fb5a447e41ecaabda52736d06000ab');
    const json = await response.json().catch(console.error);
    const list = document.createElement("ul");
    document.querySelector('.meteo').appendChild(list);

        var item = document.createElement('li');
        list.appendChild(item);
        let test=[];
        
        for(i=0;i<14;i++){
            test=[json.coord,json.weather,json.base,json.main,json.visibility,json.wind,json.clouds,json.rain,json.sys[i],json.timezone,json.id,json.name
        ];
        item.innerHTML+="NEW                                        "+test[i];
        }
        console.log(test);
        console.log(list);
}
btn.addEventListener('click', meteo);