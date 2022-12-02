import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { graphClient } from "./data/apollo-client";
import MapContainer from "./components/Map/MapContainer";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={graphClient}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <h1>LAYERS</h1>
                <h3>A Collaborative Map</h3>
                <p>Currently in development.</p>
              </div>
            }
          />
          <Route exact path="/Map" element={<MapContainer />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
