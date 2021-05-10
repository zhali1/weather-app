import React, {useState} from 'react';
import Form from "./form";
import Weather from "./weather";
import Error from "./error";

function App() {
    const [weather, setWeather ] = useState({});
    const [city, setCity] = useState('');
    return (
        <div className='app'>
            <div className="weather-container">
                <Form setWeather = {setWeather} city={city} setCity={setCity} weather={weather} />
                {Object.keys(weather).length === 0 ? <div>Тут отобразится погода</div> : weather.error ? <Error/> : <Weather weather={weather} />}

            </div>
        </div>
    );
}

export default App;

