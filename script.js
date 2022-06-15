const btn = document.getElementById("btn");
const body = document.querySelector("body");
const meteo = async () => {
    var lat = "50.634719";
    var lon = "5.571109";
    var part = "daily";
    const API_KEY = "e66ebcda72e60ebba6117c1d369b5693";
    const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&exclude='+part+'&appid='+API_KEY);
    const json = await response.json().catch(console.error);
    const list = document.createElement("ul");
    document.querySelector('.meteo').appendChild(list);

        var item = document.createElement('li');
        item.appendChild(document.createTextNode(json.zip));
        list.appendChild(item);
}
btn.addEventListener('click', meteo);