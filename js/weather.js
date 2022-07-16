const API_KEY = "d27eb6f678f575a10a992d4274e95a5b";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("당신의 위치는", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city =  document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
    });
}
function onGeoError() {
    alert("당신의 위치를 찾을 수 없습니다..");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);