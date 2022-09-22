import React, {useEffect, useState} from "react";
import {Table } from 'reactstrap'

const Weather  = (props) => {
    let coordinates = props.coordinates
    console.log(coordinates);
    // APIkey = {9aa8802ae46e3d51ec1865382cfb3405};
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    // const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    const [weatherData, setWeatherData] = useState("");
    
    async function weatherDataFetch(){
        let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIkey}`
        console.log(process.env)
        try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setWeatherData(data);
        console.log(data.main.feels_like);

    } catch(err){
        console.error(err);
    }
}
function KToF (kelvin){
let tempK = kelvin;
let KToF = ((tempK - 273.15) * 9 / 5 + 32);
let roundedKToF = KToF.toFixed(1);
 return roundedKToF;
};

function KToC (kelvin){
let tempK = kelvin;
let KToC = tempK - 273.15;
let roundedKToC = KToC.toFixed(1);
 return roundedKToC;
};

    
    useEffect(() => {
        if(lat !== undefined && lon !== undefined)
        weatherDataFetch();
    }, [props.coordinates.lat, props.coordinates.lon]);


    return (
        <>
    <h1>Current weather in: {weatherData.name}</h1>
    <h3>Temperature</h3>
    <Table bordered>
  <thead>
    <tr>
        <th>
        Units
      </th>
      <th>
        Feels like
      </th>
      <th>
        Actual
      </th>
      <th>
        Minimum
      </th>
      <th>
        Maximum
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Metric ({'\u00b0'}C)
      </th>
      <td>
      {KToC(weatherData.main.feels_like)}
      </td>
      <td>
      {KToC(weatherData.main.temp)}
      </td>
      <td>
      {KToC(weatherData.main.temp_min)}
      </td>
      <td>
      {KToC(weatherData.main.temp_max)}
      </td>
    </tr>
    <tr>
      <th scope="row">
        Imperial ({'\u00b0'}F)
      </th>
      <td>
      {KToF(weatherData.main.feels_like)}
      </td>
      <td>
      {KToF(weatherData.main.temp)}
      </td>
      <td>
      {KToF(weatherData.main.temp_min)}
      </td>
      <td>
      {KToF(weatherData.main.temp_max)}
      </td>
    </tr>
  </tbody>
</Table>
<h3>Cloud conditions</h3>
<p>{weatherData.weather[0].description}</p>
<h3>Wind:</h3> 
<p>{weatherData.wind.speed}mph</p>
    </> 
    );
}
 
export default Weather;