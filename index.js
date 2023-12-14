let target = 'Delhi';
async function fetchData(target){
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=72a1555b5c6e4af2926161132231412&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData(target);