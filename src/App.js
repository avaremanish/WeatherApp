// src/App.js
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Forecast from './components/Forecast';
import TemparetureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './services/weatherServices';




function App() {

  const [query, setQuery] = useState({q:'berlin'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)





  useEffect(() =>{
    const fetchWeather = async () => {
const message = query.q ? query.q : "current location.";

toast.info("Fetching weather for " + message);


      const data = await getFormattedWeatherData( {...query,units} ).then(
        (data) => {

          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );
          setWeather(data);
        });
        console.log(data);
};

fetchWeather();

  },[query, units])

const formatBackground = () => {
  if (!weather) return ' from-cyan-700 to-blue-700'
  const threshold = units === 'metric' ? 20 : 50
  if (weather.temp <= threshold ) return 'from-cyan-700 to-blue-700'
  
  return 'from-yellow-700 to-orange-700'
  
}




  return (
  <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>

          <TopButtons setQuery = {setQuery}/> 
          <Inputs setQuery = {setQuery} units = {units} setUnits = {setUnits} />
          {weather && (
            <div>
          <TimeAndLocation weather= {weather} />
          <TemparetureAndDetails weather ={weather}   />
          <Forecast title ="hourly forecast" items={weather.hourly}/>
          <Forecast title ="daily forecast" items={weather.daily}/>
            </div> 
          )}

         <ToastContainer autoClose={5000} theme = "colored" newsOnTop={true} /> 
  </div>
  );
}

export default App;
