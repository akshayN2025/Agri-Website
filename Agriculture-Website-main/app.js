var temp = document.getElementById("degree")
var searchbtn = document.getElementById("search")
var inputval = document.getElementById("searchval")
var city = document.getElementById("city")
var statuss = document.getElementById("status")
var humi = document.querySelector(".humi span")
var winds = document.querySelector(".winds span")
var uvs = document.querySelector(".uvs span")
var pre = document.querySelector(".pre span")
var mxtemp = document.querySelector(".maxtemp span")
var mntemp = document.querySelector(".mintemp span")
var sunrise = document.querySelector(".sunrise span")
var sunset = document.querySelector(".sunset span")
var imgg= document.getElementById("conditionimg")
searchbtn.addEventListener('click', val)

let target = 'Pune'
const fetchResult = async (targetlocation)=>{
    let url= `http://api.weatherapi.com/v1/current.json?key=d1dc3691ac454446bf5173858232803&q=${targetlocation}&aqi=no`

    const res = await fetch(url);

    const data= await res.json();


    let foreurl= `http://api.weatherapi.com/v1/forecast.json?key=d1dc3691ac454446bf5173858232803&q=${targetlocation}&days=1&aqi=no&alerts=yes`

    const ress = await fetch(foreurl);

    const dataa= await ress.json();

    let maxtemp = dataa.forecast.forecastday[0].day.maxtemp_c
    let mintemp = dataa.forecast.forecastday[0].day.mintemp_c
    let sunr = dataa.forecast.forecastday[0].astro.sunrise
    let suns = dataa.forecast.forecastday[0].astro.sunset
    let tempp = data.current.temp_c
    let cityname= data.location.name
    let statusval =data.current.condition.text
    let humidityy = data.current.humidity
    let wind = data.current.wind_kph
    let uv = data.current.uv
    let pressure =dataa.forecast.forecastday[0].day.daily_chance_of_rain
    update(tempp, cityname, statusval, humidityy, wind, uv, pressure, maxtemp, mintemp, sunr, suns)
    // imageupdate(statusval)
    console.log(dataa);
}

function update(tempp, cityname, statusval, humidityy, wind, uv, pressure, maxtemp, mintemp, sunr, suns){
    temp.innerHTML=tempp
    city.innerHTML=cityname
    statuss.innerHTML=statusval
    humi.innerHTML=humidityy
    winds.innerHTML=wind
    uvs.innerHTML=uv
    pre.innerHTML=pressure
    mxtemp.innerHTML=maxtemp
    mntemp.innerHTML=mintemp
    sunrise.innerHTML=sunr.substr(0, 5)
    sunset.innerHTML=suns.substr(0, 5)
}

// function imageupdate(imgu){
//     if(imgu=="Clear"){
//         imgg.src="images/Sunc.png"
//     }
//     else if(imgu=="Sunny"){
//         imgg.src="images/Sunc.png"
//     }else{
//         imgg.src="images/partialyc.png"
//     }
// }

function val(e){
    e.preventDefault()
    target = inputval.value
    fetchResult(target);
}

fetchResult(target)