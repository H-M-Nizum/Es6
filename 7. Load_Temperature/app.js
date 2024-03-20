const API_KEY = '87633dd65bd57840ec1157fb8419a66b'
// console.log(API_KEY)

const loadtemperature = (city_name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => displaytempature(data))
    .catch(error => console.log(error))
}
loadtemperature("Dhaka")
const displaytempature = (data) => {
    console.log(data.weather[0].main)
    document.getElementById("face").innerText = data.weather[0].main
    document.getElementById("temperature").innerText = data.main.temp
}
// search city
document.getElementById('submit').addEventListener('click', function(){
    const city = document.getElementById("input_feild").value
    document.getElementById("city").innerText = city
    
    loadtemperature(city)
})