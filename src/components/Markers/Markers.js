import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MARKERS_QUERY } from "../../data/marker-queries";
import MarkerComponent from "../MarkerComponent/MarkerComponent";

export default function Markers({ props }) {
  const { layer, expandMarker, setExpandMarker } = props;
  const { data, error, loading } = useQuery(MARKERS_QUERY, {
    variables: { layer_id: layer },
  });

  const markers =
    data &&
    data.markers.map((marker, index) => (
      <MarkerComponent
        key={index}
        props={{ marker, expandMarker, setExpandMarker }}
      />
    ));

  return <div>{markers}</div>;
}
