import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  DELETE_MARKER,
  updateMarkersCache,
} from "../../../data/marker-queries";
import MarkerIcon from "../MarkerIcon/MarkerIcon";
import MarkerTitle from "../MarkerTitle/MarkerTitle";
import MarkerButtons from "../MarkerButtons/MarkerButtons";
import classes from "../MarkerComponent.module.css";

export default function MarkerPopUp({
  marker,
  setExpandMarker,
  editThis,
  setEditThis,
}) {
  const [deleteMarker, { loading }] = useMutation(DELETE_MARKER, {
    update: updateMarkersCache,
    onCompleted: () => setExpandMarker(null),
  });

  const closeInput = (e) => {
    setTimeout(() => {
      setExpandMarker(null);
    }, 300);
  };

  return (
    <div className={classes.markerPopUp}>
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
