import React, { Component, Fragment } from "react";
import axios from "axios";

import mystyle from "./Weather.module.css";
import Mainarea from "../../components/Mainarea/Mainarea";
import Map from "../Map/Map";

const apiKey = "fec48bbea9bb9b422877166ba713d662";

class Weather extends Component {
  constructor(props) {
    super(props);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        this.getlocation(position)
      );
    }

    this.state = {
      temp: null,
      description: null,
      country: null,
      city: null,
      icon: null,
      long: null,
      lat: null
    };
  }
  getlocation = position => {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
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
          icon: url,
          long: long,
          lat: lat
        });
      });
  };

  componentDidMount() {}
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
        const rlong = response.data.coord.lon;
        const rlat = response.data.coord.lat;
        const url = `http://openweathermap.org/img/wn/${ricon}@2x.png`;
        console.log(response);
        this.setState({
          temp: tempInKelvin,
          description: des,
          city: rcity,
          country: rcountry,
          icon: url,
          long: rlong,
          lat: rlat
        });
      });
  };
  clicked = event => {
    console.log(event.lngLat[0]);
    const lat = event.lngLat[1];
    const long = event.lngLat[0];

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
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
          icon: url,
          long: long,
          lat: lat
        });
      });
  };

  render() {
    let mainarea;
    if (this.state.country && this.state.city) {
      mainarea = (
        <Mainarea
          temperature={this.state.temp}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          loadWeather={event => this.getWeather(event)}
          icon={this.state.icon}
        />
      );
    } else {
      mainarea = (
        <div>
          <h1>Getting Location....</h1>
        </div>
      );
    }
    let map;
    if (this.state.long) {
      map = (
        <Map
          long={this.state.long}
          lat={this.state.lat}
          clicked={event => this.clicked(event)}
        />
      );
    } else {
      map = <div>Loading...</div>;
    }
    let adv;
    let jac;
    if (this.state.temp >= 10) {
      adv = (
        <div className={mystyle.adv}>
          <img src={require("../../cola.gif")} alt="cocacola" />
        </div>
      );
    } else {
      adv = (
        <div className={mystyle.adv}>
          <img src={require("../../coca.gif")} alt="cocacola" />
        </div>
      );
      jac = (
        <div className={mystyle.jac}>
          <img src={require("../../jac.gif")} alt="cocacola" />
        </div>
      );
    }
    return (
      <div className={mystyle.Head}>
        <div className={mystyle.Weather}>
          <div className={mystyle.dummy}></div>
          {mainarea}
          <div className={mystyle.adv}></div>
        </div>
        <div className={mystyle.map}>{map}</div>
      </div>
    );
  }
}

export default Weather;
