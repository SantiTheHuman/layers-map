import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_LAYER } from "./layer-queries";
import { updateCache } from "../../data/helpers";

export default function AddLayer() {
  const [showForm, setShowForm] = React.useState(false);
  const [nameInput, setNameInput] = React.useState("");

  const [createLayer, { loading }] = useMutation(CREATE_LAYER, {
    update: updateCache,
    onCompleted: () => {
      setNameInput("");
      setShowForm(false);
    },
  });
  if (showForm) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLayer({ variables: { nameInput: nameInput } });
        }}
      >
        <label>
          <input
            disabled={loading}
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            style={{ marginRight: "5px" }}
          />
        </label>
        <input disabled={loading} type="submit" value="Add" />
      </form>
    );
  }
  return <button onClick={() => setShowForm(true)}>Add Layer</button>;
}
