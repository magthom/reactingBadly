import React, { Component } from "react";

// const App = (props) => {
//     return (
//     <h1>{props.text}</h1>
//     )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: "Your Name",
      input: "",
      hasLoaded: false,
    };
  }

  handleInputChange = (value) => {
    this.setState({ input: value });
  };

  handleClick = () => {
    if (this.state.hasLoaded === false) {
      this.setState({ hasLoaded: true });
    } else {
      this.setState({ hasLoaded: false });
    }
  };

  componentDidMount = () => {
    this.setState({hasLoaded: true})
  }

  render() {
    if (this.state.hasLoaded === false) {
      return (
        <div>
          <h1>Loading...</h1>
          <button onClick={() => this.handleClick()}>Toggle</button>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Hi there</h1>
          <input
            placeholder={this.state.placeholderText}
            value={this.state.value}
            onChange={(event) => this.handleInputChange(event.target.value)}
          />
          <button onClick={() => this.handleClick()}>Toggle</button>
        </React.Fragment>
      );
    }
  }
}

export default App;