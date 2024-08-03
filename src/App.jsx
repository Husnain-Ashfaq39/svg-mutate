
import React, { useState } from 'react';
import DynamicSVG from './DynamicSVG';

const svgOptions = {
  'Circ Flange 2 Pcd': {
    A: 200,
    B: 50,
    C: 150,
    D: 100,
    E: 10,
    F: 8,
    G: 8,
    H: 4,
  },
  'Lifting Lug': {
    A: 200,
    B: 20,
    C: 150,
    D: 50,
  },
  'Lifting Lug with flats': {
    A: 200,
    B: 300,
    C: 150,
    D: 25,
    E: 75,
  },
  'Chamfered Notched Rect Plate with 2 Slots': {
    A: 300,
    B: 200,
    C: 20,
    D: 20,
    E: 100,
    F: 66,
    G: 100,
    H: 66,
    I: 270,
    J: 114,
    K: 10,
    L: 20,
  },
  'Rect Plate With 4 Equally Spaced Bolt Holes': {
    A: 8,
    B: 6,
    C: 0.8,
    D: 0.8,
    E: 0.4,
    F: 0,
  },
  'Rect Plate 4 Corner Holes': {
    A: 8,
    B: 6,
    C: 0.8,
    D: 0.8,
    E: 0.4,
    F: 4,
    G: 3,
    H: 2,
    I: 0,
  },
  'Lifting Lug': {
    A: 200,
    B: 20,
    C: 150,
    D: 50,
  },
  'Rect Plate 2 Bolt Holes': {
    A: 8,
    B: 6,
    C: 2,
    D: 3,
    E: 3,
    F: 0.8,
    G: 0,
  },
  'Semi Donut': {
    A: 100,
    B: 50,
    C: 80,
  },
  'Slot Ext': {
    A: 900,
    B: 700,
  },
  'Semi Circle plus PCD': {
    A: 200,
    B: 100,
    C: 180,
    D: 150,
    E: 10,
    F: 4,
  },
  'Lug Circle': {
    A: 200,
    B: 200,
    C: 100,
    D: 25,
  },
  // Add more SVG templates here...
};

const App = () => {
  const [selectedSvg, setSelectedSvg] = useState('Circ Flange 2 Pcd');
  const [parameters, setParameters] = useState(svgOptions[selectedSvg]);

  const handleSelectChange = (e) => {
    const svgName = e.target.value;
    setSelectedSvg(svgName);
    setParameters(svgOptions[svgName]);
  };

  const handleParameterChange = (e, param) => {
    setParameters({
      ...parameters,
      [param]: parseFloat(e.target.value),
    });
  };

  return (
    <div>
      <label>
        Select SVG:
        <select value={selectedSvg} onChange={handleSelectChange}>
          {Object.keys(svgOptions).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <div>
        {Object.keys(parameters).map((param) => (
          <label key={param}>
            {param}:
            <input
              type="number"
              value={parameters[param]}
              onChange={(e) => handleParameterChange(e, param)}
            />
          </label>
        ))}
      </div>
      <div>
        <DynamicSVG svgType={selectedSvg} parameters={parameters} />
      </div>
    </div>
  );
};

export default App;
