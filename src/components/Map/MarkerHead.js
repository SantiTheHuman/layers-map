import React from "react";
import MarkerContent from "./MarkerContent";
import MarkerIcon from "./MarkerIcon";

export default function MarkerHead({ props }) {
  const { marker, expandMarker, setExpandMarker } = props;

  return (
    <div
      className="MarkerHead"
      onClick={() => setExpandMarker(marker.marker_id)}
    >
      {expandMarker === marker.marker_id ? (
        <MarkerContent marker={marker} setExpandMarker={setExpandMarker} />
      ) : (
        <>
          <MarkerIcon icon={marker.icon} />
          {marker.title && <span>...</span>}
        </>
      )}
    </div>
  );
}
