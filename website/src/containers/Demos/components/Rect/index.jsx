import React from 'react'
import { Canvas, Group, Rect } from 'react-graphic'
import DemoWrap from '../../../../components/DemoWrap'

const codeString = `import React from 'react'
import { Canvas, Group, Rect } from 'react-graphic'

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
}`

function RectGraph () {
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

export default function RectDemo () {
  return <DemoWrap 
    Demo={RectGraph} 
    codeString={codeString} 
    title="Rect的使用"
    desc="本及介绍创建大量标记的基本用法"
  />
}