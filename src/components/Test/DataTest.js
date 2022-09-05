import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  createSpot,
  createLayer,
  deleteSpot,
} from "../../graphql/mutations.ts";
import { listSpots, listLayers } from "../../graphql/queries.ts";
import LayersMenu from "../LayersMenu/LayersMenu";
import { useLocation } from "react-router-dom";

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
  const result = await API.graphql(
    graphqlOperation(`query ListLayers(
    $filter: ModelLayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
      startedAt
    }
  }`)
  );
  console.log(result);
};

export default function DataTest() {
  let location = useLocation();

  React.useEffect(() => {
    console.log("TEST location", location);
  }, [location]);

  return (
    <div>
      <h1>{location.pathname}</h1>
      <button onClick={() => addLayer()}>Create layer</button>
      <button onClick={() => allLayers()}>List layers</button>
      <button onClick={() => addSpot()}>Create spot</button>
      <button onClick={() => allSpots()}>List spots</button>
      <LayersMenu />
    </div>
  );
}
