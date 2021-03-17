import mapboxgl from "mapbox-gl";
import { getLayerData } from "./layersDB";

export default function openLayer(map, layerId) {
  const layerData = getLayerData(layerId);
  layerData.data.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });

  map.loadImage("../assets/marker-1.png", function (error, image) {
    if (error) throw error;
    map.addImage("custom-marker", image);
    // Add a symbol layer
    map.addLayer({
      id: layerId,
      type: "symbol",
      source: {
        type: "geojson",
        data: layerData.data,
      },
      layout: {
        "icon-image": "custom-marker",
        // get the title name from the source's "title" property
        "text-field": ["get", "title"],
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 1.25],
        "text-anchor": "top",
      },
    });
  });
}
