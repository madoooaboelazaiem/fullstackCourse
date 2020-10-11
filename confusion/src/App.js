import React, { Component } from "react";
import "./App.css";
import { Dishes } from "./shared/dishes";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
    };
  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
