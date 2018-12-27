import React, { Component } from "react";
import Nav from "./components/Nav.js";
import books from "./books.jpg";

import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <Button>Click Here</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
