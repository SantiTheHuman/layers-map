import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_TITLE, updateMarkersCache } from "../../../data/marker-queries";
import EditSVG from "../assets/EditSVG";
import classes from "../MarkerComponent.module.css";

export default function MarkerTitle({ title, id, editThis, setEditThis }) {
  const [titleInput, setTitleInput] = useState(title);
  const [updateTitle] = useMutation(UPDATE_TITLE, {
    variables: {
      marker_id: id,
      title: titleInput,
    },
    update: updateMarkersCache,
    onCompleted: () => setEditThis(null),
  });

  const displayName = title ? <h4>{title}</h4> : <span>Add marker name?</span>;

  const nameForm = (
    <form
      onSubmit={(e) => {
        submitName(e);
      }}
    >
      Marker Name:
      <input
        type="text"
        name="title"
        defaultValue={title}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <button onClick={() => setEditThis(null)}>Cancel</button>
      <button type="submit">Save</button>
    </form>
  );

  const submitName = (e) => {
    e.preventDefault();

    updateTitle();
  };

  return (
    <div className={classes.markerRow}>
      {editThis === "title" ? (
        nameForm
      ) : (
        <>
          {displayName}
          <button
            className={classes.editButton}
            onClick={() => setEditThis("title")}
          >
            <EditSVG />
          </button>
        </>
      )}
    </div>
  );
}
