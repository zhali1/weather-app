import React, {useState} from 'react';
import Form from "./form";
import Weather from "./weather";

function App() {
    const [weather, setWeather ] = useState({});
    const [city, setCity] = useState('');
    return (
        <div className='app'>
            <div className="weather-container">
                <Form setWeather = {setWeather} city={city} setCity={setCity} />
                {Object.keys(weather).length === 0 ? <div>Тут отобразиться погода</div> : <Weather weather={weather} />}
            </div>
        </div>
    );
}

export default App;

