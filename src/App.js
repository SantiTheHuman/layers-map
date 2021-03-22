import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { client } from "./data/apollo";
import Prototype1 from "./components/Prototype1/Prototype1";
import { LayersList } from "./components/Layers/LayersList";
import "./App.css";

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <h1>LAYERS</h1>
          <h3>currently in development</h3>
          <Link to="/Prototype1">Prototype Playground</Link>
          <LayersList />
          <Route exact path="/Prototype1" render={() => <Prototype1 />} />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
