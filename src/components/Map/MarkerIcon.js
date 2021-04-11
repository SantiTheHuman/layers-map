import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_ICON, updateMarkersCache } from "../../data/marker-queries";
import EditSVG from "./assets/EditSVG";
import SparkSVG from "./assets/SparkSVG";
import HeartSVG from "./assets/HeartSVG";
import WarningSVG from "./assets/WarningSVG";
import Emoji from "./assets/Emoji";

export default function MarkerIcon({ icon, id, editThis, setEditThis }) {
  const [iconInput, setIconInput] = useState(icon);
  const [updateIcon] = useMutation(UPDATE_ICON, {
    variables: {
      marker_id: id,
      icon: iconInput,
    },
    update: updateMarkersCache,
    onCompleted: () => setEditThis(null),
  });

  let rightIcon;

  switch (iconInput) {
    case "spark":
      rightIcon = <SparkSVG />;
      break;
    case "heart":
      rightIcon = <HeartSVG />;
      break;
    case "warning":
      rightIcon = <WarningSVG />;
      break;
    default:
      rightIcon = <SparkSVG />;
  }

  let displayIcon = (
    <>
      {rightIcon}{" "}
      {editThis && editThis !== "icon" && (
        <button className="edit-button" onClick={() => setEditThis("icon")}>
          <EditSVG />
        </button>
      )}
    </>
  );

  const submitIcon = (e) => {
    e.preventDefault();
    updateIcon();
  };

  const editIcon = (
    <form
      onSubmit={(e) => submitIcon(e)}
      onChange={(e) => {
        e.preventDefault();
        setIconInput(e.target.value);
      }}
    >
      Marker Icon:
      <select name="icon">
        <option value="spark">Spark</option>
        <option value="heart">Heart</option>
        <option value="warning">Warning</option>
        <option value="emoji">Emoji</option>
      </select>
      <button onClick={() => setEditThis(null)}>Cancel</button>
      <button type="submit">Save</button>
    </form>
  );

  return (
    <div className="marker-row">
      {displayIcon}
      {editThis && editThis === "icon" && editIcon}
    </div>
  );
}
