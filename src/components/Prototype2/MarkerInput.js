import React, { useRef, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_MARKER, updateMarkersCache } from "../../data/marker-queries";
import SparkSVG from "./assets/SparkSVG";

export default function MarkerInput({ marker, setExpandMarker }) {
  const [deleteMarker, { loading }] = useMutation(DELETE_MARKER, {
    update: updateMarkersCache,
    onCompleted: () => setExpandMarker(null),
  });
  const formRef = useRef();
  const [editMode, setEditMode] = useState(false);

  const closeInput = (e) => {
    setTimeout(() => {
      setExpandMarker(null);
    }, 300);
  };

  return (
    <div className="MarkerInput">
      <div className="marker-options">
        <button onClick={(e) => closeInput(e)}>close</button>
      </div>
      {editMode ? (
        <form ref={formRef}>
          <input name="title" type="text" defaultValue={marker.title} />
        </form>
      ) : (
        <h4>{marker.title ? marker.title : <SparkSVG />}</h4>
      )}
      <div className="marker-options">
        <button onClick={() => setEditMode((prev) => !prev)}>edit</button>
        <button
          onClick={() =>
            deleteMarker({ variables: { marker_id: marker.marker_id } })
          }
        >
          delete
        </button>
      </div>
    </div>
  );
}
