import React, { useEffect, useState } from "react";
import Map from "../Map/Map";

import "./Prototype1.css";

export default function Prototype1() {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [userCoord, setUserCoord] = useState(null);
  const [map, setMap] = useState(null);

  const success = async (pos) => {
    var crd = await pos.coords;
    setUserCoord([crd.longitude, crd.latitude]);
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <div className="app-container">
      <Map props={{ setMap, setLng, setLat, userCoord }} />
    </div>
  );
}
