import React, { Component } from "react";
import Nav from "./components/Nav";
// import books from "./books.jpg";
import IntroCard from "./components/IntroCard";
import "./App.css";
import UserPage from "./components/UserPage";
import AboutUs from "./components/AboutUs";
import HeaderFirst from "./components/HeaderFirst";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Nav />
            <Route exact path="/" component={HeaderFirst} />
            <Route path="/loginform" component={LoginForm} />
            <UserPage />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
