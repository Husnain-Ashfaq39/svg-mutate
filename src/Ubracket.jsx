import React, { useState } from 'react';

function Ubracket() {
  const [width, setWidth] = useState(200);
  const [topWidth, setTopWidth] = useState(150);
  const [topRadius, setTopRadius] = useState(50);
  const [arcCentreHeight, setArcCentreHeight] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <>
      <div>
        <label>
          Width (A):
          <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
        </label>
        <label>
          Top Width (B):
          <input type="number" value={topWidth} onChange={(e) => setTopWidth(Number(e.target.value))} />
        </label>
        <label>
          Top Radius (C):
          <input type="number" value={topRadius} onChange={(e) => setTopRadius(Number(e.target.value))} />
        </label>
        <label>
          Arc Centre Height (D):
          <input type="number" value={arcCentreHeight} onChange={(e) => setArcCentreHeight(Number(e.target.value))} />
        </label>
        <label>
          Height (E):
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </label>
      </div>
      <svg
        className="injected-svg partViewerSvgNqp"
        style={{ width: '100%', height: '90vh' }}
        viewBox={`-${width / 2} -${height / 2} ${width * 1.5} ${height * 1.5}`}
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        height="200px"
        width="200px"
        id="svgMain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs xmlns="http://www.w3.org/2000/svg">
          <marker id="ArrowEnd-1" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
          </marker>
          <marker id="ArrowStart-1" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
          </marker>
          <marker id="HoverArrowEnd-1" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim" d="M 0 0 L 10 3 L 0 6 z"></path>
          </marker>
          <marker id="HoverArrowStart-1" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim" d="M 10 0 L 0 3 L 10 6 z"></path>
          </marker>
          <marker id="SelectedArrowEnd" viewBox="0 0 10 6" refX="10" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim selectedDim" d="M 0 0 L 10 3 L 0 6 z"></path>
          </marker>
          <marker id="SelectedArrowStart" viewBox="0 0 10 6" refX="0" refY="3" markerUnits="strokeWidth" markerWidth="10" markerHeight="10" orient="auto">
            <path className="Dim selectedDim" d="M 10 0 L 0 3 L 10 6 z"></path>
          </marker>
        </defs>
        <g xmlns="http://www.w3.org/2000/svg" id="all" transform={`translate(0,${height}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
          <path
            fill="#E9E9F0"
            d={`M 0.00 0.00 L ${width}.00 0.00 L ${width - (width - topWidth) / 2}.00 ${arcCentreHeight}.00 
            A${topRadius},${topRadius} 0 1,0 ${width - topWidth}.00 ${arcCentreHeight}.00 L ${width - (width - topWidth) / 2}.00 ${arcCentreHeight}.00 
            L 25.00 ${arcCentreHeight}.00 L 0.00 0.00`}
          ></path>
          <circle className="construction" cx={`${width / 2}.00`} cy={`${arcCentreHeight / 2}.00`} r={`${topRadius}.00`}></circle>
          <g id="engrave" fill="black" stroke="none"></g>
          <g fontSize="13.9" fill="black">
            <g id="dim_dx" className="Dim" xmlns:ip="http://www.iplaser.com/shapeMate" ip:index="0" fill="" stroke="" strokeWidth="0.25%">
              <line x1="0.00" y1="0.00" x2="0.00" y2="-32.86"></line>
              <line x1={`${width}.00`} y1="0.00" x2={`${width}.00`} y2="-32.86"></line>
              <line className="arrowHeadStart arrowHeadEnd" x1="0.00" y1="-25.00" x2={`${width}.00`} y2="-25.00" markerStart="url(#ArrowStart-1)" markerEnd="url(#ArrowEnd-1)"></line>
              <text transform={`rotate(0.0000,${width / 2}.00,-25.00) scale(1,-1) translate(0,63.90)`} textAnchor="middle" x={`${width / 2}.00`} y="-25.00" dx="1.96" dy="-16.68">A</text>
            </g>
            <g id="dim_dy" className="Dim" xmlns:ip="http://www.iplaser.com/shapeMate" ip:index="4" fill="" stroke="" strokeWidth="0.25%">
              <line x1={`${width}.00`} y1="0.00" x2="232.86" y2="0.00"></line>
              <line x1={`${width - 25}.00`} y1={`${arcCentreHeight}.00`} x2="232.86" y2={`${arcCentreHeight}.00`}></line>
              <line className="arrowHeadStart arrowHeadEnd" x1="225.00" y1="0.00" x2="225.00" y2={`${arcCentreHeight}.00`} markerStart="url(#ArrowStart-1)" markerEnd="url(#ArrowEnd-1)"></line>
              <text transform={`rotate(90.0000,225.00,${arcCentreHeight / 2}.00) scale(1,-1) translate(0,-86.10)`} textAnchor="middle" x="225.00" y={`${arcCentreHeight / 2}.00`} dx="1.96" dy="-16.68">E</text>
            </g>
            <g id="dim_tdx" className="Dim" xmlns:ip="http://www.iplaser.com/shapeMate" ip:index="1" fill="" stroke="" strokeWidth="0.25%">
              <line x1="25.00" y1={`${arcCentreHeight}.00`} x2="25.00" y2="132.86"></line>
              <line x1={`${width - 25}.00`} y1={`${arcCentreHeight}.00`} x2={`${width - 25}.00`} y2="132.86"></line>
              <line className="arrowHeadStart arrowHeadEnd" x1="25.00" y1="125.00" x2={`${width - 25}.00`} y2="125.00" markerStart="url(#ArrowStart-1)" markerEnd="url(#ArrowEnd-1)"></line>
              <text transform={`rotate(0.0000,${width / 2}.00,125.00) scale(1,-1) translate(0,-236.10)`} textAnchor="middle" x={`${width / 2}.00`} y="125.00" dx="1.96" dy="-16.68">B</text>
            </g>
            <g id="dim_tr" className="Dim" xmlns:ip="http://www.iplaser.com/shapeMate" ip:index="2" fill="" stroke="" strokeWidth="0.25%">
              <line x1="64.64" y1="64.64" x2={`${width / 2}.00`} y2={`${arcCentreHeight / 2}.00`}></line>
              <line className="arrowHeadStart" x1="64.64" y1="64.64" x2="36.87" y2="36.87" markerStart="url(#ArrowStart-1)"></line>
              <text transform={`rotate(45.0000,36.87,36.87) scale(1,-1) translate(0,-59.83)`} textAnchor="start" x="36.87" y="36.87" dx="1.96" dy="-16.68">rC</text>
            </g>
            <g id="dim_tcy" className="Dim" xmlns:ip="http://www.iplaser.com/shapeMate" ip:index="3" fill="" stroke="" strokeWidth="0.25%">
              <line x1="0.00" y1="0.00" x2="-32.86" y2="0.00"></line>
              <line x1="25.00" y1={`${arcCentreHeight}.00`} x2="-32.86" y2={`${arcCentreHeight}.00`}></line>
              <line className="arrowHeadStart arrowHeadEnd" x1="-25.00" y1="0.00" x2="-25.00" y2={`${arcCentreHeight}.00`} markerStart="url(#ArrowStart-1)" markerEnd="url(#ArrowEnd-1)"></line>
              <text transform={`rotate(90.0000,-25.00,${arcCentreHeight / 2}.00) scale(1,-1) translate(0,-86.10)`} textAnchor="middle" x="-25.00" y={`${arcCentreHeight / 2}.00`} dx="1.96" dy="-16.68">D</text>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default Ubracket;
