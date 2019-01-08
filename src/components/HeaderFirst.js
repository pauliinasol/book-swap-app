import React from "react";
import { Header, Segment, Button } from "semantic-ui-react";

const HeaderFirst = () => (
  <div>
    <header className="App-header">
      <Header
        as="h2"
        content="Turn your household chores into a game where everyone wins"
        inverted
        style={{
          backgroundColor: "black",
          padding: "0.5em",
          fontWeight: "normal",
          borderRadius: "10px"
        }}
      />
      <p>
        <Button
          secondary
          style={{
            margin: "10px"
          }}
        >
          Log in
        </Button>
        <Button
          secondary
          style={{
            margin: "10px"
          }}
        >
          Sign up
        </Button>
      </p>
    </header>
  </div>
);

export default HeaderFirst;
