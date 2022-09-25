import React, { useEffect, useState } from 'react';
import '../css/NewsArticle.css';

export default function Navbar()
{
    const [search, setSearch] = useState("New Delhi");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentMounted = true;

    useEffect(() => {
                const fetchApi= async () => {
                const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=c1f029e7f96382dec5aecb9a3400604b`;
                const response = await fetch(url);
                const resjson = await response.json();
                const lat = resjson[0].lat;
                const lon = resjson[0].lon;
                const urlmain = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c1f029e7f96382dec5aecb9a3400604b`;
                const mainresponse = await fetch(urlmain);
                const mainresjson = await mainresponse.json();
                if(componentMounted){
                    setData(mainresjson);
                }
                return () => {
                    componentMounted = false;
                }
                }
            fetchApi();
    },[search]);

    let emoji = null;
    if(typeof data.main != "undefined")
    {
        if(data.weather[0].main === "Clouds")
        {
            emoji = "fa-cloud";
        }
        else if(data.weather[0].main === "Thunderstorm")
        {
            emoji = "fa-bolt";
        }
        else if(data.weather[0].main === "Drizzle")
        {
            emoji = "fa-cloud-rain";
        }
        else if(data.weather[0].main === "Rain")
        {
            emoji = "fa-cloud-shower-heavy";
        }
        else if(data.weather[0].main === "Snow")
        {
            emoji = "fa-snow-flake";
        }
        else
        {
            emoji = "fa-smog";
        }
    }
    else
    {
        return (
            <div>Loading ...</div>
        )
    }

    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month: 'long'});
    let day = d.toLocaleString("default", {weekday: 'long'});

    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    return(
        <div className="container box">
            <div className="card text-white text-center border-0 box-weather">
                <img src={`https://source.unsplash.com/600x900?${data.weather[0].main}`} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-4 mx-auto w-75">
                                <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" name="search" value={input} onChange={(e)=>{setInput(e.target.value)}} required/>
                                <button type="submit"className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                            </div>
                        </form>
                        <div className="bg-dark bg-opacity-50 py-3">
                            <h2 className="card-title">{data.name}</h2>
                            <p className="card-text lead">{day}</p>
                            <p className="card-text lead">{month} {date}, {year}</p>
                            <br />
                            {time}
                            <hr />
                            <i className={`fas ${emoji} fa-4x`}></i>
                            <h1 className="fw-bolder mb-4">{temp} &deg;C</h1>
                            <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                            <p className="lead">{temp_max} &deg;C | {temp_min} &deg;C</p>
                            <hr />
                            <p className="lead fw-bolder mb-0">Humidity: {data.main.humidity} %</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
    
  