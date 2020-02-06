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
    city: null
  };
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=" +
          apiKey
      )
      .then(response => {
        const tempInKelvin = response.data.main.temp - 273.15;
        const des = response.data.weather[0].description;
        const rcity = response.data.name;
        const rcountry = response.data.sys.country;
        this.setState({
          temp: tempInKelvin,
          description: des,
          city: rcity,
          country: rcountry
        });
      });
  }
  getWeather = () => {
    console.log("city");
  };

  render() {
    return (
      <div className={mystyle.Weather}>
        <Mainarea
          temperature={this.state.temp}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          loadWeather={this.getWeather}
        />
      </div>
    );
  }
}

export default Weather;
