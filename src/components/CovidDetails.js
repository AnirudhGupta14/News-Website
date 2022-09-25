import React, { useEffect, useState } from 'react';
import '../css/CovidDetails.css';

export default function CovidDetails()
{
    const [search, setSearch] = useState("India");
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    let componentMounted = true;

    useEffect(() => {
                const fetchApi= async () => {
                const url = `https://coronavirus-19-api.herokuapp.com/countries/${search}`;
                const response = await fetch(url);
                const resjson = await response.json();
                if(componentMounted){
                    setData(resjson);
                }
                return () => {
                    componentMounted = false;
                }
            }
            fetchApi();
    },[search]);

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", {month: 'long'});
    let day = d.toLocaleString("default", {weekday: 'long'});

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    return(
        <div className="container covid-box">
            <div className="covid-heading">
                <h4>Covid-19 Details</h4>
            </div>
            <div className="covid-search">
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-4 mx-auto w-80">
                        <input type="search" className="form-control" placeholder="Search Country" aria-label="Search Country" aria-describedby="basic-addon2" name="search" value={input} onChange={(e)=>{setInput(e.target.value)}} required/>
                        <button type="submit" className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="card text-center border-0 covid-details-box">
                <h2><b>{data.country}</b></h2>
                <p className="lead fw-bolder mb-0 text-info">Last Updated At:</p>
                <p className="card-text lead">{month} {date}, {year}</p>
                <p className="lead fw-bolder mb-0 text-warning">T. Confirmed Cases:</p>
                <p className="card-text lead covid-data">{data.cases}</p>
                <p className="lead fw-bolder mb-0 text-success">Total Recovered:</p>
                <p className="card-text lead covid-data">{data.recovered}</p>
                <p className="lead fw-bolder mb-0 text-primary">Total Active Cases:</p>
                <p className="card-text lead covid-data">{data.active}</p>
                <p className="lead fw-bolder mb-0 text-danger">Total Deaths:</p>
                <p className="card-text lead covid-data">{data.deaths}</p>
                <div className="d-flex justify-content-evenly my-1">
                    <img className="covid-img" src="https://cdn-icons-png.flaticon.com/512/2785/2785840.png" alt="" />
                    <img className="covid-img" src="https://cdn-icons-png.flaticon.com/512/2913/2913584.png" alt="" />
                    <img className="covid-img" src="https://cdn-icons-png.flaticon.com/512/2785/2785809.png" alt="" />
                </div>
            </div>
        </div>
    )
}
    
  