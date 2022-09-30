import React from "react";
class KomponentKlasowyObslugaZdarzen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick = () => {
    this.setState((prevState) => {return{
      
        isToggleOn: !prevState.isToggleOn,
      }
  });
  };
  render() {
    let napis = "";
    if (this.state.isToggleOn) {
      napis = "wlaczony";
    } else {
      napis = "wylaczony";
    }

    return <button onClick={this.handleClick}>{napis}</button>;
  }
}
export default KomponentKlasowyObslugaZdarzen;
