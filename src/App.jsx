import "./App.css";
import Nasa from "./components/Nasa.jsx";
import TicketMaster from "./components/TicketMaster.jsx";
import Weather from "./components/Weather.jsx";
import { useState } from "react";
import { useEffect } from "react";

function App(props) {
  const [coordinates, setCoordinates] = useState({});

  const getUserLocation = () => {
    //Javascript method that gets permission from client to use location
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  console.log(coordinates);

  return (
    <>
      <h1>Hello from Location Station</h1>
      <h3>This is from the develop branch!</h3>

      <h4>Elena</h4>

      <h4>DAVES BRANCH!</h4>

      <Weather coordinates={coordinates}/>
      <TicketMaster coordinates={coordinates}/>
      <Nasa coordinates={coordinates}/>
    </>
  );
}

export default App;
