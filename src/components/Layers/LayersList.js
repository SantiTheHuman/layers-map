import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { LAYERS_QUERY } from "./layer-queries";
import LayerThumbnail from './LayerThumbnail'

export default function LayersList({ showLayers}) {
  const { data, loading } = useQuery(LAYERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className={`LayersList ${!showLayers && "hidden-list"}`}>
      {data &&
        data.layers.map((layer, index) => {
          const labelStyles = layer.public ? { style: { color: "green" } } : {};
          return (
              <LayerThumbnail props={{layer, index, labelStyles}} />
          );
        })}
    </ul>
  );
}
