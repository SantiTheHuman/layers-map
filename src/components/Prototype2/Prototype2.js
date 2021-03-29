import React, { useEffect, useState } from "react";
import Map from "./Map";

export default function Prototype2() {
  const [userCoord, setUserCoord] = useState([37.8, -122.4]);

  const getUserLocation = () => {
    const success = async (pos) => {
      const crd = await pos.coords;
      //   console.log([crd.latitude, crd.longitude]);
      setUserCoord([crd.latitude, crd.longitude]);
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      <Map userCoord={userCoord} />
    </div>
  );
}
