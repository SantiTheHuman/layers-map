import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hasuraAPI } from "./data/apollo-client";
import Prototype1 from "./components/Prototype1/Prototype1";
import "./App.css";

function App() {
  return (
    <Router>
      <ApolloProvider client={hasuraAPI}>
        <div className="App">
          <h1>LAYERS</h1>
          <h3>currently in development</h3>
          <Link to="/Prototype1">Prototype Playground</Link>
          <Route exact path="/Prototype1" render={() => <Prototype1 />} />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
