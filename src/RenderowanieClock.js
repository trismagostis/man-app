import React from "react";
class RenderowanieClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1); //uruchamia funkcje co okreslony czas
  }
  tick = () => {
    this.setState({ date: new Date() }); //renderowanie setState zawiera metode render
  };
  componentWillUnmount() {
    clearInterval(this.timerID); //przestaje uruchamiać funkcje tick
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
