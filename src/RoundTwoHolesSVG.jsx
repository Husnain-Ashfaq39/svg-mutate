import React from 'react';

const RoundTwoHolesSVG = ({ A, B, C, D, E }) => {
  const outerRadius = A / 2;
  const innerRadius = B / 2;
  const boltHoleRadius = D / 2;

  return (
    <svg viewBox={`-${A} -${A} ${2 * A} ${2 * A}`} width="600" height="600">
      <defs>
        <marker id="ArrowEnd" viewBox="0 0 10 6" refX="10" refY="3" markerWidth="10" markerHeight="10" orient="auto">
          <path d="M 0 0 L 10 3 L 0 6 z" fill="green" />
        </marker>
        <marker id="ArrowStart" viewBox="0 0 10 6" refX="0" refY="3" markerWidth="10" markerHeight="10" orient="auto">
          <path d="M 10 0 L 0 3 L 10 6 z" fill="green" />
        </marker>
      </defs>
      <g stroke="black" fill="none">
        <path
          fill="#E9E9F0"
          d={`M -${outerRadius / 2} ${outerRadius / 2} 
            L -${outerRadius} ${outerRadius / 4} 
            A${E},${E} 0 0,1 -${outerRadius},-${outerRadius / 4}  
            L -${outerRadius / 2},-${outerRadius / 2} 
            A${outerRadius},${outerRadius} 0 0,1 ${outerRadius / 2},-${outerRadius / 2}  
            L ${outerRadius},-${outerRadius / 4} 
            A${E},${E} 0 0,1 ${outerRadius},${outerRadius / 4}  
            L ${outerRadius / 2},${outerRadius / 2} 
            A${outerRadius},${outerRadius} 0 0,1 -${outerRadius / 2},${outerRadius / 2} `}
        />
        <circle fill="white" cx="0" cy="0" r={innerRadius} />
        <circle fill="white" cx={`-${C / 2}`} cy="0" r={boltHoleRadius} />
        <circle fill="white" cx={`${C / 2}`} cy="0" r={boltHoleRadius} />
      </g>
      <g fontSize="20" fill="green">
        <line x1="0" y1="0" x2={innerRadius} y2="0" markerEnd="url(#ArrowEnd)" />
        <text x={innerRadius / 2} y="-5" textAnchor="middle">ØB</text>
        <line x1="0" y1="0" x2={`-${C / 2}`} y2={`${(outerRadius - innerRadius) / 2}`} markerEnd="url(#ArrowEnd)" />
        <line x1={`-${C / 2}`} y1="0" x2={`${C / 2}`} y2="0" markerStart="url(#ArrowStart)" markerEnd="url(#ArrowEnd)" />
        <text x="0" y="15" textAnchor="middle">C</text>
        <line x1={`${C / 2}`} y1="0" x2={`${C / 2}`} y2={`${boltHoleRadius + 10}`} markerStart="url(#ArrowStart)" />
        <text x={`${C / 2 + 10}`} y={`${boltHoleRadius + 5}`} textAnchor="middle">ØD</text>
        <line x1={`-${C / 2}`} y1="0" x2={`-${C / 2}`} y2={`-${boltHoleRadius + 10}`} markerStart="url(#ArrowStart)" />
        <text x={`-${C / 2 - 10}`} y={`-${boltHoleRadius - 5}`} textAnchor="middle">rE</text>
      </g>
    </svg>
  );
};

export default RoundTwoHolesSVG;
