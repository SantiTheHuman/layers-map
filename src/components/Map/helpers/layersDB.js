const tempLayer = {
  id: "tempLayer",
  data: {
    type: "FeatureCollection",
    features: [],
  },
};

const layers = [tempLayer];

export function getLayerData(layerName) {
  const layerData = layers.find((l) => l.id === layerName);
  return layerData;
}

export function addToLayersDB(layerId, coords) {
  const foundLayer = layers.find((l) => l.id === layerId);
  const newMarker = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: coords,
    },
    properties: {
      title: "Fave Spot",
    },
  };
  foundLayer.data.features.push(newMarker);
  const myPlaces = foundLayer.data.features;
  console.log(myPlaces);
}
