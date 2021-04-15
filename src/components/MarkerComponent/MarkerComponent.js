import React, { useState } from "react";
import { Marker } from "react-map-gl";
import MarkerIcon from "./MarkerIcon/MarkerIcon";
import MarkerPopUp from "./MarkerPopUp/MarkerPopUp";
import MarkerStandSVG from "./assets/MarkerStandSVG";
import classes from "./MarkerComponent.module.css";

export default function MarkerComponent({ props }) {
  const { marker, expandMarker, setExpandMarker } = props;
  const [editThis, setEditThis] = useState("no");

  return (
    <Marker
      className={expandMarker === marker.marker_id ? classes.active : ""}
      longitude={marker.location.coordinates[0]}
      latitude={marker.location.coordinates[1]}
      offsetTop={-28}
      offsetLeft={-20}
    >
      <div className={classes.markerHead}>
        <MarkerIcon
          icon={marker.icon}
          id={marker.marker_id}
          editThis={editThis}
          setEditThis={setEditThis}
          expanded={expandMarker === marker.marker_id ? true : false}
          setExpandMarker={setExpandMarker}
        />
        {expandMarker === marker.marker_id ? (
          <MarkerPopUp
            marker={marker}
            editThis={editThis}
            setEditThis={setEditThis}
            setExpandMarker={setExpandMarker}
          />
        ) : (
          <>{marker.title && <h3 className={classes.ellipsis}>...</h3>}</>
        )}
      </div>
      <MarkerStandSVG className={classes.markerStand} />
    </Marker>
  );
}
