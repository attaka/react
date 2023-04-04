import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const getWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=197391a6980b475095800838230404&q=London&aqi=no"
      )
      .then((res) => console.log(res));
  };
  return (
    <div className="test">
      <Title cityName={city} />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
