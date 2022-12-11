import './weatherpage.css';


const MainPage = () => {

return (
    <div className="about">
        <h2>About</h2>
        <p>This react app retrieves weather data from the OpenWeather API and displays it. 
        It also utilizes the Google Maps API and Geocode API to update the map according to the selected city.</p>
    </div>
    );
};

export default MainPage;