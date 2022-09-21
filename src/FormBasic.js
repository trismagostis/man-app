import React from 'react';
class FormBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event)=> {
    this.setState({ value: event.target.value });
  }

  handleSubmit =(event) =>{
    alert("Podano następujące imię: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Imię:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}
export default FormBasic
