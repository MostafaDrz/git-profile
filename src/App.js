import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    userName: "",
    response: null
  };

  onInputChange = event => {
    this.setState({ userName: event.target.value });
  };

  getUserInfo = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ response: data });
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Git Profile</h1>
        <input
          placeholder="username..."
          onChange={this.onInputChange}
          className="userInput"
        />
        <button onClick={this.getUserInfo} className="btn btn-primary">
          Search
        </button>
      </div>
    );
  }
}

export default App;
