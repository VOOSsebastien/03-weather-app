const timeJ =document.getElementById('time');
const dateJ=document.getElementById('jour');
const currentweatherinfoJ=document.getElementById('current-weather-info');
const timezoneJ=document.getElementById('timezone');
const paysJ=document.getElementById('pays');
const meteofutureJ=document.getElementById('meteo-futur');
const currenttempJ=document.getElementById('current-temp');
//cle API
const APIKEY='a8fb5a447e41ecaabda52736d06000ab';


//arr jours et mois
const jours = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const moiss = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];//called every 1 sec
setInterval(() => {
    //get date 
    const time =new Date();
    const mois =time.getMonth();
    const date =time.getDate();
    const jour =time.getDay();
    const heure=time.getHours();
    const minute=time.getMinutes();
    //

//affichage date +heure du jour//+condition
    timeJ.innerHTML=(heure<10?'0'+heure:heure) +":"+(minute<10? '0'+minute:minute);


    //date

    dateJ.innerHTML=jours[jour]+','+date+' '+moiss[mois]
}, 1000);

//appel api aavec lat et long 
getDataMeteo();
function getDataMeteo(){
    //obtenir lat et long directement depusi navigateur
    navigator.geolocation.getCurrentPosition((posi)=>{
        let {latitude,longitude}=posi.coords;

        //appel api , frequence &exclude=hourly.minutely ++ unit pour celcius
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APIKEY}`).then(res => res.json()).then(data => {
            console.log(data);
            affichageInfo(data);
        })
    })
}
function affichageInfo(data){
    let {humidity,pressure,sunrise,sunset,wind_speed}=data.current;
    
    currentweatherinfoJ.innerHTML=`<div class="weather-info">
    <!--changer p en div pour espace-->
    <p>Humidité : </p>
    <p>${humidity}%</p>
</div>
<div class="weather-info">
    <p>Pression : </p>
    <p>${pressure}</p>
</div>
<div class="weather-info">
    <p>Force du vent : </p>
    <p>${wind_speed}</p>
</div>

<div class="weather-info">
    <p>Lever du soleil : </p>
    <p>${window.moment(sunrise*1000).format('HH:mm')}</p>
</div>
<div class="weather-info">
    <p>coucher du soleil : </p>
    <p>${window.moment(sunset*1000).format('HH:mm')}</p>
</div>

`;

timezoneJ.innerHTML=data.timezone;
paysJ.innerHTML=data.lat+"N "+data.lon+"E"
    //semaine
    let semaine="";
    for(i=0;i<data.daily.length;i++){
    console.log(data.daily[i])}
    console.log(jours.dt)
data.daily.forEach((day,idx)=>{
    if(idx==0){
        currenttempJ.innerHTML=`<img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="decotemps" class="miniJour">
        <div class="other">
        <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
        <div class="temp">Night - ${day.temp.night}</div>
            <div class="temp">Day - ${day.temp.day}</div>
        </div>`
    }else{
        semaine += `
        <div class="meteo-futur-info">
            <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">Night - ${day.temp.night}&#176;C</div>
            <div class="temp">Day - ${day.temp.day}&#176;C</div>
        </div>
        
        `
    }


})
meteofutureJ.innerHTML =semaine;

}
