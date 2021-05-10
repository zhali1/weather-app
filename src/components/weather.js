import React from 'react';

const Weather = ({weather}) => {
    const getTime = () => {
        const unixTimeStamp = weather.dt * 1000;
        const date = new Date(unixTimeStamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const sec = date.getSeconds();
        return `${hours} : ${minutes}: ${sec}`
    };
    return (
        <div>
            <p>Город: {weather.name}</p>
            <p>Страна: {weather.sys.country}</p>
            <p>Температура: {(weather.main.temp - 273.15).toFixed(2)} *C <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon"/></p>
            <p>Влажность воздуха: {weather.main.humidity} %</p>
            <p>Скорость ветра: {weather.wind.speed} м/с</p>
            <p>Текущее время: {getTime()}</p>
            <p>Восход: {weather.sys.sunrise}</p>
            <p>Закат: {weather.sys.sunset}</p>
        </div>
    );
};

export default Weather;
