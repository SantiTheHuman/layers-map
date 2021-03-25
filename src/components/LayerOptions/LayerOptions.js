import React, { useState } from "react";
import { DELETE_LAYER, MAKE_PUBLIC } from "./layer-queries";
import { useMutation } from "@apollo/react-hooks";
import { updateCache } from "../../data/helpers";

export default function LayerOptions({ layer }) {
  const [showOptions, setShowOptions] = useState(false);
  const [deleteLayer, { loading: deleteLoading }] = useMutation(DELETE_LAYER, {
    update: updateCache,
  });
  const [makePublic, { loading: updateLoading }] = useMutation(MAKE_PUBLIC, {
    update: updateCache,
  });

  return (
    <div className="LayerOptions">
      <button
        className="layer-options-button"
        onClick={() => {
          setShowOptions((prev) => !prev);
        }}
      >
        ...
      </button>
      {showOptions && (
        <ul>
          <li>
            <button
              disabled={deleteLoading || updateLoading}
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                makePublic({
                  variables: { id: layer.id, public: !layer.public },
                });
              }}
            >
              {layer.public ? "Make private" : "Make public"}
            </button>
          </li>
          <li>
            <button
              disabled={deleteLoading || updateLoading}
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                deleteLayer({ variables: { id: layer.id } });
              }}
            >
              Remove
            </button>{" "}
          </li>
        </ul>
      )}
    </div>
  );
}
