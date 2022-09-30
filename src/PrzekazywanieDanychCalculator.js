import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class PrzekazywanieDanychCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange = (temperature) => {
    //przekazywanie danych w gore miejsce3 z 3
    this.setState({ ...this.state, scale: "c", temperature: temperature }); //dekonstrukcja obiektu stanu
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f",temperature });
  };

  render() {
    function toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    function toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }

    function tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return "";
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="calculatorContainer">
        <TemperatureInput
          scale="c" //przekazywanie danych w dol
          temperature={celsius} //przekazywanie danych w dol
          onTemperatureChange={this.handleCelsiusChange} //przekazywanie danych w gore miejsce 2 z 3
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default PrzekazywanieDanychCalculator;
