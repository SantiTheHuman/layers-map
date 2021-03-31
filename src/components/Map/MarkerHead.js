import React from "react";
import MarkerInput from "./MarkerInput";
import MarkerIcon from "./MarkerIcon";

export default function MarkerHead({ props }) {
  const { marker, index, expandMarker, setExpandMarker } = props;

  return (
    <div className="MarkerHead" onClick={() => setExpandMarker(index)}>
      {expandMarker === index ? (
        <MarkerInput marker={marker} setExpandMarker={setExpandMarker} />
      ) : (
        <MarkerIcon icon={marker.icon} />
      )}
      {marker.title && <span>...</span>}
    </div>
  );
}
