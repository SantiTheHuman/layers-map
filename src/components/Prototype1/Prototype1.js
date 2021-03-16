import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "./Prototype1.css";

mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FudGl0aGVodW1hbiIsImEiOiJja2x4Z2c4NWgwaTJpMnNseWl3YmptaGo5In0.qF7SiRjy-aHf-W_OGcbApg";

export default function Prototype1() {
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/santithehuman/cklzgm5d274ud17pnqg71odfu/draft",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainer} />;
}
