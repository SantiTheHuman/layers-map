import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { graphClient } from "./data/apollo-client";
import MapContainer from "./components/Map/MapContainer";
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
                <Link to="/Map">Prototype</Link>
              </>
            )}
          />
          <Route exact path="/Map" render={() => <MapContainer />} />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
