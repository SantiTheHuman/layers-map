import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import openLayer from "./helpers/openLayer";
import createMarker from "./helpers/createMarker";
import "./Map.css";

mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map({ props }) {
  const { setMap, setLng, setLat, userCoord } = props;
  const mapContainer = useRef();
  const [zoom, setZoom] = useState(9);
  const [activeLayer, setActiveLayer] = useState(
    "2b1f5094-90fc-4cee-b5ea-0943e369c7b1"
  );

  useEffect(() => {
    if (userCoord) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/santithehuman/cklzgm5d274ud17pnqg71odfu/draft",
        center: userCoord,
        zoom: zoom,
        attributionControl: false,
      });
      // Share map object accross app
      setMap(map);

      // Initialize the geolocate control.
      var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      });
      // Add the control to the map.
      map.addControl(geolocate, "bottom-right");
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "bottom-right");
      map.addControl(
        new mapboxgl.FullscreenControl({
          container: document.querySelector("body"),
        })
      );
      map.addControl(new mapboxgl.AttributionControl(), "bottom-left");
      map.on("load", function () {
        // Display default layer on load
        // openLayer(map, activeLayer);
      });
      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
      // Listen for click events
      map.on("click", function (e) {
        // The event object (e) contains information like the
        // coordinates of the point on the map that was clicked.
        createMarker(map, activeLayer, e.lngLat);
      });

      return () => map.remove();
    }
  }, [userCoord]);

  return <div className="map-container" ref={mapContainer} />;
}
