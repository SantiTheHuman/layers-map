import mapboxgl from "mapbox-gl";
import { addToLayersDB } from "./layersDB";

const updateMarker = (marker) => {
  const newCoords = marker.getLngLat();
  console.log(newCoords);
};

export default function createMarker(map, layerId, coords) {
  var el = document.createElement("div");
  el.className = "marker";

  const marker = new mapboxgl.Marker(el, {
    draggable: true,
    anchor: "bottom",
  })
    .setLngLat(coords)
    .addTo(map);
  addToLayersDB(layerId, coords);
  marker.on("dragend", updateMarker(marker));
}
