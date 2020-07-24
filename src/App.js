import React from "react";
import "./Asset/Style/App.css";
import "antd/dist/antd.css";
import HomePage from "./Pages/HomePage";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
