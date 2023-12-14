const tempField = document.querySelector(".temperature");
const locationField = document.querySelector(".locationTime p");
const dateTime = document.querySelector(".locationTime span");
const emoticon = document.querySelector(".condition img");
const weather = document.querySelector(".condition span");
const searchField = document.querySelector(".search_field");
const form = document.querySelector("form");

let target = 'Rajsamand';
form.addEventListener("submit", callback);

function callback(e){
    e.preventDefault();
    target = searchField.value;
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
        
        updateDOM(current_temp, location, time, condition, emoji);

        console.log(current_temp, location, time, condition, emoji);
    }
    catch(error){
        console.log(error);
    }
}

function updateDOM(temp, location, time, condition, emoji){
    tempField.innerHTML = `${temp} C`;
    locationField.innerHTML = location;
    emoticon.src = emoji;
    weather.innerHTML = condition;

    let tm = time.split(" ")[1];
    let date = time.split(" ")[0];
    let day = fetchDay(new Date(date).getDay());

    dateTime.innerHTML = `${tm}  ${date}  ${day}`;
}

function fetchDay(num){
    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}
fetchData(target);