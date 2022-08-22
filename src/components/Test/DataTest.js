import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  createSpot,
  createLayer,
  deleteSpot,
} from "../../graphql/mutations.ts";
import { listSpots, listLayers } from "../../graphql/queries.ts";

const addLayer = async () => {
  console.log(createLayer);
  const result = await API.graphql(
    graphqlOperation(createLayer, {
      input: {
        name: "My first layer!",
      },
    })
  );
  console.log(result);
};

const addSpot = async () => {
  console.log(createSpot);
  const result = await API.graphql(
    graphqlOperation(createSpot, {
      input: {
        name: "My first spot!",
        layerID: "652b3035-763e-48a3-9fb3-5b5f755bddae",
      },
    })
  );
  console.log(result);
};

const allSpots = async () => {
  console.log(listSpots);
  const result = await API.graphql(graphqlOperation(listSpots));
  console.log(result);
};

const allLayers = async () => {
  console.log(listLayers);
  const result = await API.graphql(graphqlOperation(listLayers));
  console.log(result);
};

export default function DataTest() {
  return (
    <div>
      <h1>Data test</h1>
      <button onClick={() => addLayer()}>Create layer</button>
      <button onClick={() => allLayers()}>List layers</button>
      <button onClick={() => addSpot()}>Create spot</button>
      <button onClick={() => allSpots()}>List spots</button>
    </div>
  );
}
