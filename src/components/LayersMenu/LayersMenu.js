import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  createSpot,
  createLayer,
  deleteSpot,
  deleteLayer,
} from "../../graphql/mutations.ts";
import { listSpots, listLayers } from "../../graphql/queries.ts";
import "./LayersMenu.css";

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

export default function LayersMenu() {
  const [showLayers, setShowLayers] = useState(true);
  const [layersList, setLayersList] = useState([]);

  useEffect(() => {
    const allLayers = async () => {
      const {
        data: {
          listLayers: { items: result },
        },
      } = await API.graphql(
        graphqlOperation(`query ListLayers(
        $filter: ModelLayerFilterInput
        $limit: Int
        $nextToken: String
      ) {
        listLayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            id
            name
            createdAt
          }
        }
      }`)
      );
      console.log("TEST allLayers", result);
      setLayersList(result);
    };
    allLayers();
  }, []);

  const deleteThisLayer = async (layerID, layerVersion) => {
    // console.log(
    //   graphqlOperation(deleteLayer, {
    //     input: {
    //       id: layerID,
    //       _version: layerVersion,
    //     },
    //   })
    // );
    const result = await API.graphql(
      graphqlOperation(deleteLayer, {
        input: {
          id: layerID,
          _version: layerVersion,
        },
      })
    );
    console.log(result);
  };

  if (!showLayers)
    return (
      <button
        className="show-layers-button"
        onClick={() => setShowLayers(true)}
      >
        Layers menu
      </button>
    );

  return (
    <div className="layers-menu">
      <button
        className="show-layers-button"
        onClick={() => setShowLayers(false)}
      >
        X Close
      </button>
      {layersList.length > 0 &&
        layersList.map(({ name, id, _version, createdAt }) => {
          return (
            <div className="layer-thumbnail">
              <h4>{name}</h4>
              <h4>{createdAt}</h4>
              <button onClick={() => deleteThisLayer(id, _version)}>
                Delete layer &#128465;
              </button>
            </div>
          );
        })}
      <div className="layer-thumbnail">
        <button onClick={() => addLayer()}>Create layer</button>
        <button onClick={() => allLayers()}>List layers</button>
        <button onClick={() => addSpot()}>Create spot</button>
        <button onClick={() => allSpots()}>List spots</button>
      </div>
    </div>
  );
}
