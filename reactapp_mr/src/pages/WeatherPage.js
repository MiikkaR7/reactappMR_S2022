import Weather from "../components/Weather";
import { useEffect, useState } from "react";
import Maps from "../components/Maps";

const WeatherPage = () => {

    var location = {lat: 61.498118355349916, lng: 23.761291000830358}
    var newUrl;

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [useLoc, setLoc] = useState([61.49810673355833, 23.767498119715583]);
    const [useUrl, setUrl] = useState("https://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d");

    useEffect(() => {
        fetchWeatherData();
        },[]);
        

    const changeCity = async (event) => {
        event.preventDefault();
        setUrl("https://api.openweathermap.org/data/2.5/weather?q=" + event.target.elements.kaupunki.value + "&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d");
        newUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + event.target.elements.kaupunki.value + "&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d";
        setLoading(true);

        try {

        const response = await fetch(newUrl)

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const weatherData = () => {
            return {
                cityname: data.name,
                description: data.weather[0].description,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                };
            };

            setWeather(weatherData)

            updateWeatherData(weather);
        
            } catch (error) {
        setError(error.message);
            }
            
        setLoading(false);

        const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + event.target.elements.kaupunki.value + "&key=AIzaSyBCUhs-v3A8SFr3ulm14jKpkdaVj8Is20E")
        const locationData = await response.json();
        
        location.lat = locationData.results[0].geometry.location.lat; 
        location.lng = locationData.results[0].geometry.location.lng;
        setLoc([location.lat, location.lng])

    }


    const fetchWeatherData = async () => {
        setLoading(true);

        try {

        const response = await fetch(useUrl)

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const weatherData = () => {
            return {
                cityname: data.name,
                description: data.weather[0].description,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                };
            };
        

            setWeather(weatherData);
            } catch (error) {
        setError(error.message);
            }

            
        setLoading(false);

        
    };

    const updateWeatherData = () => {
        <Weather
            cityname = {weather.cityname}
            description = {weather.description}
            temperature = {weather.temperature}
            humidity = {weather.humidity}
            windspeed = {weather.windspeed}>
        </Weather>
    };


    let content
    if (isLoading == true) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>{error}</p>
    } else {
        content = <Weather
            cityname = {weather.cityname}
            description = {weather.description}
            temperature = {weather.temperature}
            humidity = {weather.humidity}
            windspeed = {weather.windspeed}>
        </Weather>
    }

    return (
        <div>
            <form onSubmit = {changeCity}>
                <label for="kaupunki">Enter city name:</label><br/>
                <input type="text" id="kaupunki"/>
                <button type="submit">Submit</button>
            </form>
            <section>{content}</section>
            <button onClick={fetchWeatherData}>Update weather data</button>
            <section>
            <Maps coords={useLoc}/>
            </section>   
        </div>
    );
};
export default WeatherPage;

