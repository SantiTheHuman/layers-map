import React, { useEffect, useState } from "react";
import LayersMenu from "../LayersMenu/LayersMenu";
import { useLocation } from "react-router-dom";

export default function DataTest() {
  let location = useLocation();

  return (
    <div>
      <h1>{location.pathname}</h1>
      <LayersMenu />
    </div>
  );
}
