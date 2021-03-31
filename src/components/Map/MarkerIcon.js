import React, { useState } from "react";
import EditSVG from "./assets/EditSVG";

import SparkSVG from "./assets/SparkSVG";
import HeartSVG from "./assets/HeartSVG";
import WarningSVG from "./assets/WarningSVG";
import Emoji from "./assets/Emoji";

export default function MarkerIcon({ icon, editThis, setEditThis }) {
  const [iconInput, setIconInput] = useState(icon);

  let rightIcon;

  switch (icon) {
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

  const updateIcon = (e) => {
    e.preventDefault();
    console.log(iconInput);
  };

  const editIcon = (
    <form
      onSubmit={(e) => updateIcon(e)}
      onChange={() => {
        console.log(iconInput);
      }}
    >
      Marker Icon:
      <select name="icon">
        <option value="spark">Spark</option>
        <option value="heart">Heart</option>
        <option value="warning">Warning</option>
        <option value="emoji">Emoji</option>
      </select>
      <button onClick={() => setEditThis("no")}>Cancel</button>
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
