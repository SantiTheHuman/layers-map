import React from 'react'
import LayerOptions from "./LayerOptions";


export default function LayerThumbnail({ props }) {
    const { layer, index, labelStyles } = props;

    return (
        <li className="LayerThumbnail" key={index}>
            <div className="layer-headline">
            <span role="img">{'\u{1F30F}'}</span>
            <h3 {...labelStyles}>{layer.name}</h3>
            </div>
              <LayerOptions layer={layer} />
        </li>
    )
}
