import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_MARKER, updateMarkersCache } from "../../data/marker-queries";
import MarkerIcon from "./MarkerIcon";
import MarkerTitle from "./MarkerTitle";
import MarkerButtons from "./MarkerButtons/MarkerButtons";
import { Marker } from "mapbox-gl";

export default function MarkerContent({ marker, setExpandMarker }) {
  const [deleteMarker, { loading }] = useMutation(DELETE_MARKER, {
    update: updateMarkersCache,
    onCompleted: () => setExpandMarker(null),
  });

  const [editThis, setEditThis] = useState("no");

  const closeInput = (e) => {
    setTimeout(() => {
      setExpandMarker(null);
    }, 300);
  };

  return (
    <div className="MarkerContent">
      <MarkerIcon
        icon={marker.icon}
        id={marker.marker_id}
        editThis={editThis}
        setEditThis={setEditThis}
      />

      <MarkerTitle
        title={marker.title}
        id={marker.marker_id}
        editThis={editThis}
        setEditThis={setEditThis}
      />
      <MarkerButtons
        id={marker.marker_id}
        closeInput={closeInput}
        deleteMarker={deleteMarker}
      />
    </div>
  );
}
