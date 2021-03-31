import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import ReactMapGL from "react-map-gl";
import AllMarkers from "./AllMarkers";
import { ADD_MARKER, updateMarkersCache } from "../../data/marker-queries";
import "./Map.css";

export default function Map({ userCoord }) {
  const [viewport, setViewport] = useState({
    latitude: userCoord[0],
    longitude: userCoord[1],
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  const [layer, setLayer] = useState("2b1f5094-90fc-4cee-b5ea-0943e369c7b1");
  const [expandMarker, setExpandMarker] = useState(null);
  const [addMarker, { loading }] = useMutation(ADD_MARKER, {
    update: updateMarkersCache,
    // onCompleted: () => {
    // },
  });

  useEffect(() => {
    setViewport({
      latitude: userCoord[0],
      longitude: userCoord[1],
      zoom: 14,
      bearing: 0,
      pitch: 0,
    });
  }, [userCoord]);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onClick={(e) =>
        !expandMarker &&
        addMarker({
          variables: { layer_id: layer, title: null, point: e.lngLat },
        })
      }
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/santithehuman/cklzgm5d274ud17pnqg71odfu/draft"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <AllMarkers props={{ layer, expandMarker, setExpandMarker }} />
    </ReactMapGL>
  );
}
