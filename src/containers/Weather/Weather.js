import React, { Component, Fragment } from "react";
import axios from "axios";
import mystyle from "./Weather.module.css";
const apiKey = "fec48bbea9bb9b422877166ba713d662";
class Weather extends Component {
  state = {
    temp: null
  };
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Kathmandu,np&appid=" +
          apiKey
      )
      .then(response => {
        console.log(response);
        const tempInKelvin = response.data.main.temp - 273.15;
        this.setState({ temp: tempInKelvin });
      });
  }

  render() {
    return (
      <div className={mystyle.Weather}>
        <div>logo</div>
        <div>Search bar</div>
        <div>CurrentWeather</div>
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default Weather;
