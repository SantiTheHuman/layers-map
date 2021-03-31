import { gql } from "@apollo/client";

export const MARKERS_QUERY = gql`
  query markersOnEG($layer_id: uuid!) {
    markers(where: { layer_id: { _eq: $layer_id } }) {
      title
      location
      icon
      marker_id
    }
  }
`;

export const ALL_MARKERS = gql`
  query allMarkers {
    markers {
      title
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

export const DELETE_MARKER = gql`
  mutation deleteMarker($marker_id: uuid!) {
    delete_markers_by_pk(marker_id: $marker_id) {
      marker_id
    }
  }
`;

export const updateMarkersCache = (cache, { data }) => {
  // Fetch the todos from the cache
  const markersList = cache.readQuery({
    query: MARKERS_QUERY,
    variables: { layer_id: "2b1f5094-90fc-4cee-b5ea-0943e369c7b1" },
  });
  // Add the new todo to the cache
  const queryName = Object.keys(data)[0];
  const newMarker = data[queryName];
  if (data.location) {
    cache.writeQuery({
      query: MARKERS_QUERY,
      variables: { layer_id: "2b1f5094-90fc-4cee-b5ea-0943e369c7b1" },
      data: { markers: [newMarker, ...markersList.markers] },
    });
  } else {
    cache.evict({ marker_id: data.marker_id });
    cache.gc();
  }
};
