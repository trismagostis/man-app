import React from "react";
class FormBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }

  handleInputChange=(event) =>{
    
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
    alert(`Nazwa inputa ktry się zmienił ${name} wartość tego inputa ${value}`)
  }

  render() {
    return (
      <form>
        <label>
          Wybiera się:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Liczba gości:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
export default FormBox
