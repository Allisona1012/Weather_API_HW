console.log(`Hello world!`)



// set up how to get the connection set up 
const getWeatherAPI = async function(city,zipCode=null){
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=`);
    // after getting connected the data is going to equal the jason
    let data = await response.json() 
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
    let cityFormName= e.target.city.value;
    console.log(cityFormName)
    //This will put the city into the api
    let city = await getWeatherAPI(cityFormName)
    console.log(city);

})



// update the link based on the city OR zipcode

// show the 