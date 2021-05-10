import React from 'react';
import axios from "axios";


const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();
        const API_key = '3aa097d3e383a2bf79a2e28c16787539';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
            .then(({data}) => setWeather(data))
            .catch(() => console.log('что то пошло не так'));
        setCity('')
    };
    const inputHandler = (e) => {
        setCity(e.target.value)

    };
    return (
        <div>
            <form action="" onSubmit={getWeather}>
                <h1 className="text">By Zhali Tegin Erzat</h1>
                <input className='input' type="text" placeholder='Введите город' onChange={inputHandler} value={city}/>
                <button type='submit'>Узнать погоду</button>
            </form>
        </div>
    );
};

export default Form;