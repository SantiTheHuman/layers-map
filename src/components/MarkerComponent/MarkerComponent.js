import React from "react";
import { Marker } from "react-map-gl";
import MarkerHead from "./MarkerHead/MarkerHead";
import MarkerStandSVG from "./assets/MarkerStandSVG";

export default function MarkerComponent({ props }) {
  const { marker, expandMarker, setExpandMarker } = props;

  return (
    <Marker
      className={expandMarker === marker.marker_id ? "active" : ""}
      longitude={marker.location.coordinates[0]}
      latitude={marker.location.coordinates[1]}
      offsetTop={-28}
      offsetLeft={-20}
    >
      <MarkerHead props={{ marker, expandMarker, setExpandMarker }} />
      <MarkerStandSVG />
    </Marker>
  );
}
