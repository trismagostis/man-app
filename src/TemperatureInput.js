class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
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
export default TemperatureInput
