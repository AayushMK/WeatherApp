import React, { Component } from "react";
import axios from "axios";

import mystyle from "./Weather.module.css";
import Mainarea from "../../components/Mainarea/Mainarea";

const apiKey = "fec48bbea9bb9b422877166ba713d662";

class Weather extends Component {
  state = {
    temp: null,
    description: null,
    country: null,
    city: null,
    icon: null
  };
  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=${apiKey}`
      )
      .then(response => {
        const tempInKelvin = Math.floor(response.data.main.temp - 273.15);
        const des = response.data.weather[0].description;
        const rcity = response.data.name;
        const rcountry = response.data.sys.country;
        const ricon = response.data.weather[0].icon;
        const url = `http://openweathermap.org/img/wn/${ricon}@2x.png`;
        console.log(response);
        this.setState({
          temp: tempInKelvin,
          description: des,
          city: rcity,
          country: rcountry,
          icon: url
        });
      });
  }
  getWeather = e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then(response => {
        const tempInKelvin = Math.floor(response.data.main.temp - 273.15);
        const des = response.data.weather[0].description;
        const rcity = response.data.name;
        const rcountry = response.data.sys.country;
        const ricon = response.data.weather[0].icon;
        const url = `http://openweathermap.org/img/wn/${ricon}@2x.png`;
        console.log(response);
        this.setState({
          temp: tempInKelvin,
          description: des,
          city: rcity,
          country: rcountry,
          icon: url
        });
      });
  };
  getlocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
  };

  render() {
    return (
      <div className={mystyle.Weather}>
        <Mainarea
          temperature={this.state.temp}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          loadWeather={event => this.getWeather(event)}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default Weather;
