import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import {
  createSpot,
  createLayer,
  deleteSpot,
} from "../../graphql/mutations.ts";
import { listSpots, listLayers } from "../../graphql/queries.ts";
import "./LayersMenu.css";

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
      setLayersList(result);
      console.log(result);
    };
    allLayers();
  }, []);

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
        layersList.map(({ name, id, createdAt }) => {
          return (
            <div className="layer-thumbnail">
              <h4>{name}</h4>
              <h4>{createdAt}</h4>
            </div>
          );
        })}
    </div>
  );
}
