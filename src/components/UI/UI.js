import React, { useState } from "react";
import LayersList from "../LayersMenu/LayersList";
import AddLayer from "./AddLayer";
import "./UI.css";

export default function UI() {
  const [showLayers, setShowLayers] = useState(false);

  return (
    <div className="UI">
      <button
        className="show-layers-button"
        onClick={() => setShowLayers((prev) => !prev)}
      >
        My layers
      </button>
      <div className={`LayersContainer ${!showLayers && "hidden-container"}`}>
        {/* <LayersList showLayers={ showLayers} /> */}
        <AddLayer />
      </div>
    </div>
  );
}
