import React from 'react'
import { Canvas, Group, Rect } from 'react-graphic'

export const codeString = `<Canvas id="rect-graph" width={480} height={480}>
  <Group>
    <Rect  
      cursor="pointer" 
      x={100} 
      y={100} 
      width={100} 
      height={100} 
      fill="#d44131" 
      onClick={(e) => console.log(e)}
    />
  </Group>
</Canvas>`

export default function RectGraph () {
  return (
    <Canvas id="rect-graph" width={480} height={400}>
      <Group>
        <Rect  
          cursor="pointer" 
          x={100} 
          y={100} 
          width={100} 
          height={100} 
          fill="#d44131" 
          onClick={(e) => console.log(e)}
        />
      </Group>
    </Canvas>
  )
}