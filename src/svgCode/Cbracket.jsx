import React, { useState } from 'react';
import DynamicSVG from '../dynamicsvgs/DynamicSVG';
import img from '../assets/img.svg'

function Cbracket() {
  // State variables for the parameters
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [sideWidth, setSideWidth] = useState(20);
  const [sideHeight, setSideHeight] = useState(30);

  return (
    <>
      <div className="input-container">
        <label>
          Width (A):
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <label>
          Height (B):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Side width (C):
          <input
            type="number"
            value={sideWidth}
            onChange={(e) => setSideWidth(e.target.value)}
          />
        </label>
        <label>
          Side height (D):
          <input
            type="number"
            value={sideHeight}
            onChange={(e) => setSideHeight(e.target.value)}
          />
        </label>
      </div>
    
      <DynamicSVG width={width} height={height} sideWidth={sideWidth} sideHeight={sideHeight} />
    </>
  );
}

export default Cbracket;
