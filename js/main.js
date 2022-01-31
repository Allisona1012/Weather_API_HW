console.log(`Hello world!`)



// set up how to get the connection set up 
const getWeatherAPI = async function(city,zipCode=null){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8092bd332f67937491e6ab71b125e5e`);
    // after getting connected the data is going to equal the jason
    let data = await response.json(); 
    // returning the data will occur once the data has been accessed
    return await data
}

// get the form from the document
const cityForm = document.getElementById(`cityForm`);

// add an eventListener for the submit
cityForm.addEventListener('submit',async (e) => {
    // this will keep the page from reloading when we submit the city name
    e.preventDefault();
    // this is getting the input and settign a value to it to retrieve the information
    let cityFormName= e.target.city.value.toLowerCase();
    console.log(cityFormName)
    //This will put the city into the api
    let city = await getWeatherAPI(cityFormName)
    //addToWeatherList(city)
    console.log(city);
    showData(city);
})



// update the link based on the city OR zipcode

//show the info
const showData = async (city) => {
    // data= await data;

    // This is setting a variable name to the headers in the index.html
    //let weatherImg = document.getElementById('card-img');
    let current = document.getElementById('current');
    let tempHigh = document.getElementById('tempHigh');
    let tempLow = document.getElementById('tempLow');
    let humidity = document.getElementById('humidity');

    //document.getElementById('card-title').innerText = await city;
   // weatherImg.src = 
   current.innerHTML = `The current temperature is: ${city.main.temp}`
   tempHigh.innerHTML = `Today's High: ${city.main.temp_max}`
   tempLow.innerHTML = `Today's low: ${city.main.temp_min}`
   humidity.innerHTML = `Today's humidity: ${city.main.humidity}`
   

}
// function addToWeatherList(city){
//     let weatherList = document.querySelector('#weatherList');
//     let LiEl = document.createElement('li');
//     LiEl.innerText = `Todays Current Temperature Is ${city.main.temp}`
// }
