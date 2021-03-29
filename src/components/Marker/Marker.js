import mapboxgl from "mapbox-gl";
import { ADD_MARKER } from "../../data/marker-queries";

const updateMarker = (marker) => {
  const newCoords = marker.getLngLat();
  console.log(newCoords);
};

export default function createMarker(map, layerId, coords) {
  var el = document.createElement("div");
  el.className = "marker";
  const point = { type: "Point", coordinates: coords };
  const marker = new mapboxgl.Marker(el, {
    draggable: true,
    anchor: "bottom",
  })
    .setLngLat(coords)
    .addTo(map);
  ADD_MARKER(layerId, point);
  marker.on("dragend", updateMarker(marker));
}
