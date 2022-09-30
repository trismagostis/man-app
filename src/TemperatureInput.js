import React from "react";
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value); //przekazywanie danych w gore miejsce 1 z 3
  };

  render() {
    const scaleNames = {
      c: "Celsjus",
      f: "Fahrenheit",
    };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default TemperatureInput;
