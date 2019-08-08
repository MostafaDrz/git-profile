import React from "react";
import "./App.css";
import styled from "styled-components";

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
    const { response } = this.state;
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
        {response ? (
          <Container>
            <ImageContainer src={response.avatar_url} alt={response.name} />
            <h2>{response.name}</h2>
            <p>{response.bio}</p>
          </Container>
        ) : null}
      </div>
    );
  }
}

const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 700px;
  h2 {
    color: blue;
    &:hover {
      color: red;
    }
  }
  p {
    font-weight: 400;
  }
`;

export default App;
