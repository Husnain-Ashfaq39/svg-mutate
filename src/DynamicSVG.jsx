import React from 'react';

const DynamicSVG = ({ svgType, parameters }) => {
  const renderSVG = () => {
    switch (svgType) {
      case 'Circ Flange 2 Pcd': {
        const { A, B, C, D, E, F, G, H } = parameters;
        const E_half = E / 2;
        const F_half = F / 2;
        
        const outerHoles = Array.from({ length: G }, (_, i) => (
          <circle
            key={`outer-${i}`}
            cx={(C / 2) * Math.cos((i * 2 * Math.PI) / G)}
            cy={(C / 2) * Math.sin((i * 2 * Math.PI) / G)}
            r={E_half}
            fill="white"
          />
        ));

        const innerHoles = Array.from({ length: H }, (_, i) => (
          <circle
            key={`inner-${i}`}
            cx={(D / 2) * Math.cos((i * 2 * Math.PI) / H)}
            cy={(D / 2) * Math.sin((i * 2 * Math.PI) / H)}
            r={F_half}
            fill="white"
          />
        ));

        return (
          <svg
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
            viewBox="-200 -200 400 400"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r={A / 2} fill="#E9E9F0" stroke="black" />
            <circle cx="0" cy="0" r={B / 2} fill="white" />
            {outerHoles}
            {innerHoles}
            <circle cx="0" cy="0" r={C / 2} fill="none" stroke="black" strokeDasharray="4" />
            <circle cx="0" cy="0" r={D / 2} fill="none" stroke="black" strokeDasharray="4" />
          </svg>
        );
      }

      case 'Lifting Lug': {
        const { A, B, C, D } = parameters;
        const A_half = A / 2;
        const D_cos_45 = D * Math.cos(Math.PI / 4);
        const D_sin_45 = D * Math.sin(Math.PI / 4);

        return (
          <svg
            style={{ width: '100%', height: '90vh' }}
            viewBox={`-43.00 -5.50 ${A + 86} ${C + D + 36}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${C + D}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M 0 0 L ${A} 0 L ${A_half + D_cos_45} ${C + D_sin_45} A${D},${D} 0 0,1 ${A_half - D_cos_45},${C + D_sin_45} L 0 0`}
              />
              <circle fill="white" cx={A_half} cy={C} r={B / 2} />
            </g>
          </svg>
        );
      }

      case 'Lifting Lug with flats': {
        const { A, B, C, D, E } = parameters;
        const width_half = A / 2;
        const slot_radius = D / 2;

        return (
          <svg width={A} height="800px" viewBox={`0 0 ${A} ${B}`} xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width={A} height={B} fill="#E9E9F0" />
            <path
              d={`M 0 ${B} A ${width_half},${width_half} 0 1,1 ${A} ${B} A ${width_half},${width_half} 0 0,1 0 ${B} Z`}
              fill="#E9E9F0"
            />
            <rect
              x={(A - D) / 2}
              y={C - E / 2}
              width={D}
              height={E}
              rx={slot_radius}
              ry={slot_radius}
              fill="white"
            />
            <text x={width_half} y={B / 2} textAnchor="middle" fontSize="20" fill="black">A</text>
            <text x={width_half} y={B - 20} textAnchor="middle" fontSize="20" fill="black">B</text>
            <text x={width_half - 20} y={C} textAnchor="middle" fontSize="20" fill="black">C</text>
            <text x={width_half} y={C + E / 2 + 20} textAnchor="middle" fontSize="20" fill="black">D</text>
            <text x={width_half + D / 2 + 20} y={C} textAnchor="middle" fontSize="20" fill="black">E</text>
          </svg>
        );
      }

      case 'Chamfered Notched Rect Plate with 2 Slots': {
        const {
          A, B, C, D, E, F, G, H, I, J, K, L
        } = parameters;
        const A_minus_E = A - E;
        const B_minus_F = B - F;
        const B_minus_H = B - H;
        const E_half = E / 2;
        const F_half = F / 2;
        const H_half = H / 2;
        const K_half = K / 2;
        const L_half = L / 2;

        return (
          <svg
            className="injected-svg partViewerSvgNqp"
            style={{ width: '100%', height: '90vh' }}
            viewBox={`-${C / 2} -${D / 2} ${A + C} ${B + D}`}
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${B}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M ${C} 0 L ${A_minus_E} 0 L ${A_minus_E} ${F} L ${A} ${F} L ${A} ${B_minus_H} L ${A - G} ${B_minus_H} L ${A - G} ${B} L ${C} ${B} L 0 ${B - D} L 0 ${D} L ${C} 0`}
              />
              <rect
                fill="white"
                x={I - L_half}
                y={J - K_half}
                width={L}
                height={K}
                rx={K_half}
                ry={K_half}
              />
              <rect
                fill="white"
                x={I - L_half}
                y={B - J - K_half}
                width={L}
                height={K}
                rx={K_half}
                ry={K_half}
              />
            </g>
          </svg>
        );
      }

      case 'Rect Plate With 4 Equally Spaced Bolt Holes': {
        const { A, B, C, D, E, F } = parameters;
        const A_minus_F = A - F;
        const B_minus_F = B - F;
        const A_minus_C = A - C;
        const B_minus_D = B - D;
        const E_half = E / 2;

        return (
          <svg
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
            viewBox={`0 0 ${A} ${B}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${B}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M ${F} 0.00 L ${A_minus_F} 0.00 A${F},${F} 0  0,1 ${A},${F}  L ${A} ${B_minus_F} A${F},${F} 0  0,1 ${A_minus_F},${B}  L ${F} ${B} A${F},${F} 0  0,1 0.00,${B_minus_F}  L 0.00 ${F} A${F},${F} 0  0,1 ${F},0.00`}
              />
              <circle fill="white" cx={C} cy={D} r={E_half} />
              <circle fill="white" cx={A_minus_C} cy={D} r={E_half} />
              <circle fill="white" cx={A_minus_C} cy={B_minus_D} r={E_half} />
              <circle fill="white" cx={C} cy={B_minus_D} r={E_half} />
            </g>
          </svg>
        );
      }

      case 'Rect Plate 4 Corner Holes': {
        const { A, B, C, D, E, F, G, H, I } = parameters;
        const A_minus_I = A - I;
        const B_minus_I = B - I;
        const A_minus_C = A - C;
        const B_minus_D = B - D;
        const E_half = E / 2;
        const H_half = H / 2;

        return (
          <svg
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
            viewBox={`0 0 ${A} ${B}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${B}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M ${I} 0.00 L ${A_minus_I} 0.00 A${I},${I} 0  0,1 ${A},${I}  L ${A} ${B_minus_I} A${I},${I} 0  0,1 ${A_minus_I},${B}  L ${I} ${B} A${I},${I} 0  0,1 0.00,${B_minus_I}  L 0.00 ${I} A${I},${I} 0  0,1 ${I},0.00`}
              />
              <circle fill="white" cx={C} cy={D} r={E_half} />
              <circle fill="white" cx={A_minus_C} cy={D} r={E_half} />
              <circle fill="white" cx={A_minus_C} cy={B_minus_D} r={E_half} />
              <circle fill="white" cx={C} cy={B_minus_D} r={E_half} />
              <circle fill="white" cx={F} cy={G} r={H_half} />
            </g>
          </svg>
        );
      }
      case 'Rect Plate 2 Bolt Holes': {
        const { A, B, C, D, E, F, G } = parameters;
        const A_minus_G = A - G;
        const B_minus_G = B - G;
        const C_plus_E = C + E;
        const F_half = F / 2;

        return (
          <svg
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
            viewBox={`0 0 ${A} ${B}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <g transform={`translate(0,${B}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M ${G} 0.00 L ${A_minus_G} 0.00 A${G},${G} 0 0,1 ${A},${G} L ${A} ${B_minus_G} A${G},${G} 0 0,1 ${A_minus_G},${B} L ${G} ${B} A${G},${G} 0 0,1 0.00,${B_minus_G} L 0.00 ${G} A${G},${G} 0 0,1 ${G},0.00`}
              />
              <circle fill="white" cx={C} cy={D} r={F_half} />
              <circle fill="white" cx={C_plus_E} cy={D} r={F_half} />
            </g>
          </svg>
        );
      }

      case 'Semi Donut': {
        const { A, B, C } = parameters;
        const largeArcFlag = C > 180 ? 1 : 0;
        const outerX1 = A * Math.cos((Math.PI * C) / 180);
        const outerY1 = A * Math.sin((Math.PI * C) / 180);
        const innerX1 = B * Math.cos((Math.PI * C) / 180);
        const innerY1 = B * Math.sin((Math.PI * C) / 180);
        const outerX2 = A * Math.cos((Math.PI * -C) / 180);
        const outerY2 = A * Math.sin((Math.PI * -C) / 180);
        const innerX2 = B * Math.cos((Math.PI * -C) / 180);
        const innerY2 = B * Math.sin((Math.PI * -C) / 180);

        return (
          <svg
            style={{ width: '100%', height: '90vh' }}
            viewBox="-168.15 -75.74 336.29 336.29"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0,134.65) scale(1,-1)" strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M 0 0 L ${A} 0 A ${A} ${A} 0 ${largeArcFlag} 1 ${outerX1} ${outerY1} L ${innerX1} ${innerY1} A ${B} ${B} 0 ${largeArcFlag} 0 ${B} 0 M 0 0 L ${A} 0 A ${A} ${A} 0 ${largeArcFlag} 0 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${B} ${B} 0 ${largeArcFlag} 1 ${B} 0 Z`}
              />
              <circle className="construction" cx="0.00" cy="0.00" r={A} />
              <circle className="construction" cx="0.00" cy="0.00" r={B} />
            </g>
          </svg>
        );
      }

      case 'Slot Ext': {
        const { A, B } = parameters;
        const A_half = A / 2;
        const B_half = B / 2;

        return (
          <svg
            style={{ width: '100%', height: '90vh' }}
            viewBox="-694.00 -494.00 2288.00 2288.00"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0,1000.00) scale(1,-1)" strokeWidth="0.25%" stroke="black" fill="none">
              <path fill="#E9E9F0" d={`M 0 0 L ${A} 0 A 175 ${B_half} 0 1 1 ${A} ${B} L 0 ${B} A 175 ${B_half} 0 1 1 0 0 Z`} />
            </g>
          </svg>
        );
      }

      case 'Semi Circle plus PCD': {
        const { A, B, C, D, E, F } = parameters;
        const largeArcFlag = C > 180 ? 1 : 0;
        const outerX1 = (A / 2) * Math.cos((Math.PI * C) / 180);
        const outerY1 = (A / 2) * Math.sin((Math.PI * C) / 180);
        const innerX1 = (B / 2) * Math.cos((Math.PI * C) / 180);
        const innerY1 = (B / 2) * Math.sin((Math.PI * C) / 180);
        const outerX2 = (A / 2) * Math.cos((Math.PI * -C) / 180);
        const outerY2 = (A / 2) * Math.sin((Math.PI * -C) / 180);
        const innerX2 = (B / 2) * Math.cos((Math.PI * -C) / 180);
        const innerY2 = (B / 2) * Math.sin((Math.PI * -C) / 180);
        const holes = Array.from({ length: F }, (_, i) => (
          <circle
            key={`hole-${i}`}
            cx={(D / 2) * Math.cos((i * 2 * Math.PI) / F)}
            cy={(D / 2) * Math.sin((i * 2 * Math.PI) / F)}
            r={E / 2}
            fill="white"
          />
        ));

        return (
          <svg
            style={{ width: '100%', height: '90vh' }}
            viewBox="-143.00 -28.07 286.00 286.00"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${A / 2}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M ${innerX1} ${innerY1} L ${outerX1} ${outerY1} A ${A / 2} ${A / 2} 0 ${largeArcFlag} 1 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${B / 2} ${B / 2} 0 ${largeArcFlag} 0 ${innerX1} ${innerY1}`}
              />
              <circle className="construction" cx="0" cy="0" r={B / 2} />
              <circle className="construction" cx="0" cy="0" r={A / 2} />
              <circle className="construction" cx="0" cy="0" r={D / 2} />
              {holes}
            </g>
          </svg>
        );
      }

      case 'Lug Circle': {
        const { A, B, C, D } = parameters;
        const width_half = A / 2;
        const hole_radius = D / 2;

        return (
          <svg
            style={{ width: '100%', height: '90vh' }}
            viewBox="-114.50 -8.25 1000 200"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(0,${B}) scale(1,-1)`} strokeWidth="0.25%" stroke="black" fill="none">
              <path
                fill="#E9E9F0"
                d={`M 0.00 0.00 L ${A} 0.00 L ${A} ${B} A100.00,100.00 0 1,1 0.00,${B} L 0.00 0.00`}
              />
              <circle fill="white" cx={width_half} cy={C} r={hole_radius} />
            </g>
          </svg>
        );
      }
      

      default:
        return null;
    }
  };

  return (
    <div>
      {renderSVG()}
    </div>
  );
};

export default DynamicSVG;

