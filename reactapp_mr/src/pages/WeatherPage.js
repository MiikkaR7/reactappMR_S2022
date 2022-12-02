import Weather from "../components/Weather";
import { useEffect, useState } from "react";

const WeatherPage = () => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [useUrl, setUrl] = useState("https://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d");

    useEffect(() => {
        fetchWeatherData();
        },[]);
        

    const changeCity = (event) => {
        event.preventDefault();
        setUrl("https://api.openweathermap.org/data/2.5/weather?q=" + event.target.elements.kaupunki.value + "&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d");
        if (event.target.elements.kaupunki.value == "") {
            setUrl("https://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=ca44062fdced26e6c6655bb10a60eb4d");
        }
        fetchWeatherData();
    }

    const fetchWeatherData = async () => {
        setLoading(true);

        try {

        const response = await fetch(useUrl)

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);

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
            <button onClick={fetchWeatherData}>Update weather data</button>
            <form onSubmit = {changeCity}>
                <label for="kaupunki">Enter city name:</label><br/>
                <input type="text" id="kaupunki"/>
                <button type="submit">Submit</button>
            </form>
            <section>{content}</section>
        </div>
    );
};

export default WeatherPage;
