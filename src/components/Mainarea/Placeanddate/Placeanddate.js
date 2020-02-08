import React from "react";
import mystyle from "./Placeanddate.module.css";
const placeanddate = props => (
  <div className={mystyle.PlaceandDate}>
    <form onSubmit={props.loadWeather}>
      <input type="text" placeholder="Enter city" name="city" />
      <button className={mystyle.button} type="submit">
        Search
      </button>
    </form>
    <div className={mystyle.location}>
      <h1>
        {props.city}, {props.country}
      </h1>
    </div>
  </div>
);

export default placeanddate;
