const tempField = document.querySelector(".temperature");
const locationField = document.querySelector(".locationTime p");
const dateTime = document.querySelector(".locationTime span");
const emoticon = document.querySelector(".weather img");
const weather = document.querySelector(".weather span");
const searchField = document.querySelector(".search_field");
const form = document.querySelector("form");

let target = 'Delhi';

form.addEventListener("submit", callback);
function callback(){
    target = searchField.ariaValueMax;
    fetchData(target);
}
async function fetchData(target){
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=72a1555b5c6e4af2926161132231412&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        
        let current_temp = data.current.temp_c;
        let location = data.location.name;
        let time = data.location.localtime;
        let condition = data.current.condition.text;
        let emoji = data.current.condition.icon;

        console.log(current_temp, location, time, condition, emoji);
    }
    catch(error){
        console.log(error);
    }
}
fetchData(target);