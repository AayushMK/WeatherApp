import React from "react";
import mystyle from "./Placeanddate.module.css";
import Autocomplete from "../Autocomplete/Autocomplete";
const placeanddate = props => (
  <div className={mystyle.PlaceandDate}>
    <form onSubmit={props.loadWeather}>
      <Autocomplete />
    </form>
    <div className={mystyle.location}>
      <h1>
        {props.city}, {props.country}
      </h1>
    </div>
  </div>
);

export default placeanddate;
