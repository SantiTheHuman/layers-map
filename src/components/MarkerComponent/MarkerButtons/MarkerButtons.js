import React from "react";
import classes from "./MarkerButtons.module.css";

export default function MarkerButtons({ id, closeInput, deleteMarker }) {
  return (
    <div className={classes.markerButtons}>
      <button onClick={() => deleteMarker({ variables: { marker_id: id } })}>
        delete
      </button>
      <button onClick={(e) => closeInput(e)}>close</button>
    </div>
  );
}
