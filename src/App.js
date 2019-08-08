import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    userName: ""
  };
  render() {
    return (
      <div className="App">
        <h1>Git Profile</h1>
        <input
          placeholder="username..."
          onChange={event => console.log(event.target.value)}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
