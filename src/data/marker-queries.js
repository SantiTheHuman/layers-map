import { gql } from "@apollo/client";

export const MARKERS_QUERY = gql`
  query markersOnLayer($layer_id: uuid!) {
    markers(where: { layer_id: { _eq: $layer_id } }) {
      title
      location
      icon
      marker_id
    }
  }
`;

export const ADD_MARKER = gql`
  mutation addMarker($layer_id: uuid!, $title: String!, $point: Geography!) {
    insert_markers_one(
      object: {
        layer_id: $layer_id
        title: $title
        location: { type: "Point", coordinates: $point }
      }
    ) {
      layer {
        name
      }
      title
      location
      icon
    }
  }
`;

export const UPDATE_TITLE = gql`
  mutation updateTitle($marker_id: uuid!, $title: String!) {
    update_markers_by_pk(
      pk_columns: { marker_id: $marker_id }
      _set: { title: $title }
    ) {
      layer {
        name
      }
      title
      location
      icon
    }
  }
`;

export const UPDATE_ICON = gql`
  mutation updateIcon($marker_id: uuid!, $icon: String!) {
    update_markers_by_pk(
      pk_columns: { marker_id: $marker_id }
      _set: { icon: $icon }
    ) {
      layer {
        name
      }
      title
      location
      icon
    }
  }
`;

export const DELETE_MARKER = gql`
  mutation deleteMarker($marker_id: uuid!) {
    delete_markers_by_pk(marker_id: $marker_id) {
      marker_id
    }
  }
`;

export const updateMarkersCache = (cache, { data }) => {
  // Fetch the markers from the cache
  const allMarkers = cache.readQuery({
    query: MARKERS_QUERY,
    variables: { layer_id: "2b1f5094-90fc-4cee-b5ea-0943e369c7b1" },
  });
  // Add the new marker to the cache
  const queryName = Object.keys(data)[0];
  const newMarker = data[queryName];
  console.log(newMarker);
  if (newMarker.location) {
    cache.writeQuery({
      query: MARKERS_QUERY,
      variables: { layer_id: "2b1f5094-90fc-4cee-b5ea-0943e369c7b1" },
      data: { markers: [newMarker, ...allMarkers.markers] },
    });
    console.log("hi");
  } else {
    // Delete marker from the cache
    cache.evict({ marker_id: data.marker_id });
    cache.gc();
  }
};

// const toggleTodo = (cache) => {
//   const existingTodos = cache.readQuery({ query: GET_MY_TODOS });
//   const newTodos = existingTodos.todos.map((t) => {
//     if (t.id === todo.id) {
//       return { ...t, is_completed: !t.is_completed };
//     } else {
//       return t;
//     }
//   });
//   cache.writeQuery({
//     query: GET_MY_TODOS,
//     data: { todos: newTodos },
//   });
// };
