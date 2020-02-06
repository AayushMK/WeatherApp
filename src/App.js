import React from "react";
import Weather from "./containers/Weather/Weather";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
