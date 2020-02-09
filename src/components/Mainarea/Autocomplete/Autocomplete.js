import React, { Component } from "react";
import mystyle from "../Placeanddate/Placeanddate.module.css";
import "./Autocomplete.css";

export default class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.items = [
      "Bhojpur",
      "Dhankuta",
      "Ilam",
      "Jhapa",
      "Khotang",
      "Morang",
      "Okhaldhunga",
      "Panchthar",
      "Sankhuwasabha",
      "Solukhumbu",
      "Sunsari",
      "Taplejung",
      "Terhathum",
      "Udayapur",
      "Bara",
      "Parsa",
      "Dhanusha",
      "Mahottari",
      "Rautahat",
      "Saptari",
      "Sarlahi",
      "Siraha",
      "Bhaktapur",
      "Chitwan",
      "Dhading",
      "Dolakha",
      "Kathmandu",
      "Kavrepalanchok",
      "Lalitpur",
      "Makwanpur",
      "Nuwakot",
      "Ramechhap",
      "Rasuwa",
      "Sindhuli",
      "Sindhupalchok",
      "Baglung",
      "Gorkha",
      "Kaski",
      "Lamjung",
      "Manang",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Parbat",
      "Syangja",
      "Tanahun",
      "Arghakhanchi",
      "Banke",
      "Bardiya",
      "Dang",
      "Eastern Rukum",
      "Gulmi",
      "Kapilavastu",
      "Parasi",
      "Palpa",
      "Pyuthan",
      "Rolpa",
      "Rupandehi",
      "Dailekh",
      "Dolpa",
      "Humla",
      "Jajarkot",
      "Jumla",
      "Kalikot",
      "Mugu",
      "Salyan",
      "Surkhet",
      "Western Rukum",
      "Achham",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Dadeldhura",
      "Darchula",
      "Doti",
      "Kailali",
      "Kanchanpur"
    ];
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionsSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input
          autocomplete="off"
          value={text}
          onChange={this.onTextChanged}
          type="text"
          name="city"
        />
        <button className={mystyle.button} type="submit">
          Search
        </button>
        <div className={text !== "" ? "auto-list" : ""}>
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }
}
