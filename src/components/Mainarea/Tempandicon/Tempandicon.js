import React from "react";
import mystyle from "./Tempandicon.module.css";
const tempandicon = props => (
  <div className={mystyle.Tempandicon}>
    <div className={mystyle.Tandi}>
      <div className={mystyle.Temp}>{props.temperature}&deg;C</div>
      <div className={mystyle.Icon}>icon</div>
    </div>

    <div>{props.description}</div>
  </div>
);

export default tempandicon;
