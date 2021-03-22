import React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
const LAYERS_QUERY = gql`
  {
    allLayers {
      data {
        _id
        name
        public
      }
    }
  }
`;
const DELETE_LAYER = gql`
  mutation DeleteItem($id: ID!) {
    deleteLayer(id: $id) {
      _id
    }
  }
`;
const UPDATE_LAYER = gql`
  mutation UpdateLayer($id: ID!, $public: Boolean!) {
    updateLayer(id: $id, data: { public: $public }) {
      _id
      public
    }
  }
`;

export function LayersList() {
  const { data, loading } = useQuery(LAYERS_QUERY);
  const [deleteLayer, { loading: deleteLoading }] = useMutation(DELETE_LAYER, {
    refetchQueries: [{ query: LAYERS_QUERY }],
  });
  const [updateLayer, { loading: updateLoading }] = useMutation(UPDATE_LAYER);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      <h4>Testing Database</h4>

      {data &&
        data.allLayers.data.map((layer) => {
          const labelStyles = layer.public ? { style: { color: "green" } } : {};
          return (
            <li key={layer._id}>
              <span {...labelStyles}>{layer.name}</span>
              <button
                disabled={deleteLoading || updateLoading}
                style={{ marginLeft: "10px" }}
                onClick={(e) => {
                  e.preventDefault();
                  updateLayer({
                    variables: { id: layer._id, public: !layer.public },
                  });
                }}
              >
                {layer.public ? "Make private" : "Make public"}
              </button>
              {/* <button
                disabled={deleteLoading || updateLoading}
                style={{ marginLeft: "10px" }}
                onClick={(e) => {
                  e.preventDefault();
                  deleteLayer({ variables: { id: layer._id } });
                }}
              >
                Remove
              </button> */}
            </li>
          );
        })}
    </ul>
  );
}
