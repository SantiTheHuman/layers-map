import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_TITLE, updateMarkersCache } from "../../data/marker-queries";
import EditSVG from "./assets/EditSVG";

export default function MarkerName({ title, id, editThis, setEditThis }) {
  const [titleInput, setTitleInput] = useState(title);
  const [updateTitle] = useMutation(UPDATE_TITLE, {
    variables: {
      marker_id: id,
      title: titleInput,
    },
    update: updateMarkersCache,
    onCompleted: () => setEditThis(null),
  });

  const displayName = title ? <h4>{title}</h4> : <span>Add Marker Name</span>;

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
    <div className="marker-row">
      {editThis === "title" ? (
        nameForm
      ) : (
        <>
          {displayName}
          <button className="edit-button" onClick={() => setEditThis("title")}>
            <EditSVG />
          </button>
        </>
      )}
    </div>
  );
}
