import React from "react";
import Placeanddate from "./Placeanddate/Placeanddate";
import Tempandicon from "./Tempandicon/Tempandicon";
import mystyle from "./Mainarea.module.css";
const mainarea = props => (
  <div className={mystyle.Mainarea}>
    <Placeanddate
      city={props.city}
      country={props.country}
      loadWeather={props.loadWeather}
    />
    <Tempandicon
      temperature={props.temperature}
      description={props.description}
    />
  </div>
);
export default mainarea;
