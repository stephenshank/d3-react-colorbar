import React from "react";
import { AxisLeft } from "d3-react-axis";

function Colorbar(props) {
  return (<>
    <defs>
      <linearGradient id={props.id} x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="100%" stopColor="#0000FF" />
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
  id: "colorbar-gradient"
};

export default Colorbar
