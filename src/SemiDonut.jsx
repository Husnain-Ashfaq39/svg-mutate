import React from 'react';

const SemiDonut = ({ outsideDiameter, insideDiameter, segmentAngle }) => {
  const radiusOuter = outsideDiameter / 2;
  const radiusInner = insideDiameter / 2;
  const angleRad = (segmentAngle * Math.PI) / 180;
  
  const x1Outer = radiusOuter * Math.cos(angleRad);
  const y1Outer = radiusOuter * Math.sin(angleRad);
  const x2Outer = radiusOuter * Math.cos(-angleRad);
  const y2Outer = radiusOuter * Math.sin(-angleRad);

  const x1Inner = radiusInner * Math.cos(angleRad);
  const y1Inner = radiusInner * Math.sin(angleRad);
  const x2Inner = radiusInner * Math.cos(-angleRad);
  const y2Inner = radiusInner * Math.sin(-angleRad);

  return (
    <svg
      style={{ width: '100%', height: '90vh' }}
      viewBox={`-${radiusOuter} -${radiusOuter} ${2 * radiusOuter} ${2 * radiusOuter}`}
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="ArrowEnd" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
        </marker>
        <marker id="ArrowStart" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
          <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
        </marker>
      </defs>
      <g id="all" transform={`translate(0,${radiusOuter}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
        <path
          fill="#E9E9F0"
          d={`M ${x1Outer} ${y1Outer} A${radiusOuter},${radiusOuter} 0 0,0 ${x2Outer} ${y2Outer} L ${x2Inner} ${y2Inner} A${radiusInner},${radiusInner} 0 0,1 ${x1Inner} ${y1Inner} Z`}
        ></path>
      </g>
    </svg>
  );
};

export default SemiDonut;
