import React from "react";
class RenderowanieClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000); //uruchamia funkcje co okreslony czas
  }
  tick = () => {
    this.setState({ date: new Date() }); //renderowanie setState zawiera metode render
  };
  componentWillUnmount() {
    clearInterval(); //przestaje uruchamiać funkcje tick
  }

  render() {
    return (
      <div>
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default RenderowanieClock;
