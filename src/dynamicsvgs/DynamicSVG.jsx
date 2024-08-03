import React from 'react';

const DynamicSVG = ({ A, B, C, D }) => {
  const halfHeight = D / 2;
  const centerX = A / 2;

  return (
    <svg width="200" height="100" viewBox={`-50 -50 ${A + 100} ${D + 100}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="green" />
        </marker>
      </defs>
      {/* Main shape */}
      <rect x="0" y="0" width={A} height={D} rx={halfHeight} ry={halfHeight} fill="#E9E9F0" stroke="black" />
      
      {/* Bolt holes */}
      <circle cx="0" cy={halfHeight} r={B / 2} fill="white" stroke="black" />
      <circle cx={A} cy={halfHeight} r={B / 2} fill="white" stroke="black" />
      
      {/* Inner hole */}
      <circle cx={centerX} cy={halfHeight} r={C / 2} fill="white" stroke="black" />
      
      {/* Dimensions */}
      <line x1="0" y1={D + 20} x2={A} y2={D + 20} stroke="green" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x={centerX} y={D + 35} textAnchor="middle" fill="green">A</text>
      
      <line x1={A + 20} y1="0" x2={A + 20} y2={D} stroke="green" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x={A + 30} y={halfHeight} textAnchor="middle" fill="green">D</text>
      
      <line x1="0" y1={halfHeight} x2={B / 2 + 10} y2={halfHeight} stroke="green" markerEnd="url(#arrow)" />
      <text x={B / 4} y={halfHeight - 10} textAnchor="middle" fill="green">ØB</text>
      
      <line x1={centerX} y1={halfHeight} x2={centerX + C / 2 + 10} y2={halfHeight} stroke="green" markerEnd="url(#arrow)" />
      <text x={centerX + C / 4} y={halfHeight - 10} textAnchor="middle" fill="green">ØC</text>
    </svg>
  );
};

export default DynamicSVG;
