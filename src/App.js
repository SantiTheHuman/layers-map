import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { graphClient } from "./data/apollo-client";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import MapContainer from "./components/Map/MapContainer";
import "./App.css";
import DataTest from "./components/Test/DataTest";

Amplify.configure(awsconfig);

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
                <Link to="/Map">Layers Map 0.00001</Link>
                <Link to="/data-test">Data test</Link>
              </div>
            }
          />
          <Route exact path="/Map" element={<MapContainer />} />
          <Route path="/*" element={<DataTest />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
