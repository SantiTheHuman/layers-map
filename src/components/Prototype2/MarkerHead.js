import React from 'react'
import SparkSVG from './assets/SparkSVG'
import EllipsisSVG from './assets/EllipsisSVG'
import MarkerInput from './MarkerInput'

export default function MarkerHead({ props }) {
    const { marker, index, expandMarker, setExpandMarker } = props;

    return (
        <div className="MarkerHead" onClick={() =>  setExpandMarker(index)}>
            {expandMarker === index ? <MarkerInput marker={marker} setExpandMarker={setExpandMarker} /> : (marker.title ? <EllipsisSVG/> : <SparkSVG/>)}
        </div>
    )
}
