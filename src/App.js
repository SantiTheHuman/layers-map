import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { graphClient } from "./data/apollo-client";
import Prototype1 from "./components/Prototype1/Prototype1";
import Prototype2 from "./components/Prototype2/Prototype2";
import "./App.css";

function App() {
  return (
    <Router>
      <ApolloProvider client={graphClient}>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <>
                <h1>LAYERS</h1>
                <h3>currently in development</h3>
                <Link to="/Prototype">Prototype</Link>
              </>
            )}
          />
          <Route exact path="/Prototype" render={() => <Prototype2 />} />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
