import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createSpot, updateSpot, deleteSpot } from "./mutations";
import { listSpots } from "./queries";

const addSpot = async () => {
  const result = await API.graphql(
    graphqlOperation(createSpot, {
      input: {
        name: "My first spot!",
      },
    })
  );
  console.log(result);
};

const allSpots = async () => {
  const result = await API.graphql(graphqlOperation(listSpots));
  console.log(listSpots);
  console.log(result);
};

export default function DataTest() {
  return (
    <div>
      <h1>Data test</h1>
      <button onClick={() => addSpot()}>Create spot</button>
      <button onClick={() => allSpots()}>List spots</button>
    </div>
  );
}
