import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_MARKER, updateMarkersCache } from "../../data/marker-queries";
import MarkerIcon from "./MarkerIcon";
import MarkerTitle from "./MarkerTitle";

export default function MarkerInput({ marker, setExpandMarker }) {
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
    <div className="MarkerInput">
      <button onClick={(e) => closeInput(e)}>close</button>
      <MarkerIcon
        icon={marker.icon}
        editThis={editThis}
        setEditThis={setEditThis}
      />

      <MarkerTitle
        title={marker.title}
        id={marker.marker_id}
        editThis={editThis}
        setEditThis={setEditThis}
      />

      <button
        onClick={() =>
          deleteMarker({ variables: { marker_id: marker.marker_id } })
        }
      >
        delete
      </button>
    </div>
  );
}
