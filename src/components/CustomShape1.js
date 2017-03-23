import React from 'react'
/*
    <svg width="246" height="420" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 208
               A 123 123, 0, 1, 1, 228 188
               A 13 13, 0, 1, 1, 211 208
               A 123 123, 0, 0, 1, 192 224
               A 100 100, 0, 0, 1, 204 360
               A 13 13, 0, 1, 1, 185 378
               A 100 100, 0, 0, 1, 44 234
               A 20 20, 0, 0, 1, 34 208
               " stroke="white" strokeWidth="1"  fill="black" fillOpacity="0.6"/>

    </svg>
*/
const CustomShape1 = (props) => {
  //@see: https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths
  const width = 244, height = 420
  const r1 = width / 2, r2 = 20, r3 = 13, r4 = 100
  const p7 = { x: 33, y: 205 },
  p1 = {x: 226, y: 186},
  p2 = {x: 210, y: 207},
  p3 = {x: 191, y: 223},
  p4 = {x: 202, y: 358},
  p5 = {x: 184, y: 376},
  p6 = {x: 44, y: 236}

  return (
    <svg width="246" height="420" xmlns="http://www.w3.org/2000/svg">
      {props.debug
      ?
      <g>
        <circle cx={`${r1}`} cy={`${r1}`} r={`${r1}`} stroke="white" strokeWidth="1" fill="black" fillOpacity="0.6" />

        <circle cx="218" cy="196" r={`${r3}`} stroke="white" strokeWidth="1" fill="black" fillOpacity="0.6" />
        <circle cx={`${p1.x}`} cy={`${p1.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />
        <circle cx={`${p2.x}`} cy={`${p2.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />

        <circle cx="123" cy="297" r={`${r4}`} stroke="white" strokeWidth="1" fill="black" fillOpacity="0.6" />
        <circle cx={`${p3.x}`} cy={`${p3.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />

        <circle cx="193" cy="367" r={`${r3}`} stroke="white" strokeWidth="1" fill="black" fillOpacity="0.6" />
        <circle cx={`${p4.x}`} cy={`${p4.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />
        <circle cx={`${p5.x}`} cy={`${p5.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />

        <circle cx="50" cy="217" r={`${r2}`} stroke="white" strokeWidth="1" fill="black" fillOpacity="0.6" />
        <circle cx={`${p7.x}`} cy={`${p7.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />
        <circle cx={`${p6.x}`} cy={`${p6.y}`} r="2" stroke="red" strokeWidth="1" fill="red" />
      </g>
      :
      <path d={`M${p7.x} ${p7.y}
               A ${r1} ${r1}, 0, 1, 1, ${p1.x} ${p1.y}
               A ${r3} ${r3}, 0, 1, 1, ${p2.x} ${p2.y}
               A ${r1} ${r1}, 0, 0, 1, ${p3.x} ${p3.y}
               A ${r4} ${r4}, 0, 0, 1, ${p4.x} ${p4.y}
               A ${r3} ${r3}, 0, 1, 1, ${p5.x} ${p5.y}
               A ${r4} ${r4}, 0, 0, 1, ${p6.x} ${p6.y}
               A ${r2} ${r2}, 0, 0, 1, ${p7.x} ${p7.y}
               `} stroke="white" strokeWidth="1"  fill="black" fillOpacity="0.6"/>
      }
    </svg>
  )
}

export default CustomShape1