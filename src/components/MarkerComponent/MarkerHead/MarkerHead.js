import React from "react";
import MarkerIcon from "../MarkerIcon/MarkerIcon";
import MarkerPopUp from "../MarkerPopUp/MarkerPopUp";

export default function MarkerHead({ props }) {
  const { marker, expandMarker, setExpandMarker } = props;

  return (
    <div
      className="MarkerHead"
      onClick={() => setExpandMarker(marker.marker_id)}
    >
      {expandMarker === marker.marker_id ? (
        <MarkerPopUp marker={marker} setExpandMarker={setExpandMarker} />
      ) : (
        <>
          <MarkerIcon icon={marker.icon} />
          {marker.title && <span>...</span>}
        </>
      )}
    </div>
  );
}
