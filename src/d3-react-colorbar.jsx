import React from "react";
import { extent } from "d3-array";
import { AxisLeft } from "d3-react-axis";

function Colorbar(props) {
  const { scale, colorRange } = props;
  if(colorRange.length != scale.domain().length) {
    throw "Incompatible scale and color range!";
  }
  const [min_domain, max_domain] = extent(scale.domain()),
    range_domain = max_domain - min_domain;
  return (<>
    <defs>
      <linearGradient id={props.id} x1="0%" x2="0%" y1="0%" y2="100%">
        {scale.domain().map((value, index) => {
          return (<stop
            key={index}
            offset={100*(value-min_domain)/range_domain + "%"}
            stopColor={colorRange[index]}
          />)
        })}
      </linearGradient>
    </defs>
    <g transform={`translate(${props.translateX}, ${props.translateY})`}>
      <AxisLeft
        scale={props.scale}
        transform='translate(-1, 0)'
      />
      <rect
        fill={`url(#${props.id})`}
        x={0}
        y={0}
        width={props.width}
        height={props.scale.range()[1]}
      />
    </g>
  </>);
}

Colorbar.defaultProps = {
  translateX: 0,
  translateY: 0,
  width: 20,
  height: 300,
  colorRange: ["red", "blue"],
  id: "colorbar-gradient"
};

export default Colorbar
