import { LAYERS_QUERY } from "./layer-queries";

export const updateCache = (cache, { data }) => {
  // Fetch the todos from the cache
  const layersList = cache.readQuery({
    query: LAYERS_QUERY,
  });
  // Add the new todo to the cache
  const queryName = Object.keys(data)[0];
  const newLayer = data[queryName].returning[0];
  cache.writeQuery({
    query: LAYERS_QUERY,
    data: { layers: [newLayer, ...layersList.layers] },
  });
};
