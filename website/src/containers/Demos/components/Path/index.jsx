import React from 'react'
import { Canvas, Group, Path } from 'react-graphic'
import DemoWrap from '../../../../components/DemoWrap'

const codeString = `import React from 'react'
import { Canvas, Group, Circle } from 'react-graphic'

export default function RectGraph () {
  return (
    <Canvas id="rect-graph" width={480} height={400}>
      <Group>
        <Path  
          path={[['M', 100, 100], ['L', 200, 200]]}
          stroke='red'
          lineWidth={2}
        />
      </Group>
    </Canvas>
  )
}`

function RectGraph () {
  return (
    <Canvas id="rect-graph" width={480} height={400}>
      <Group>
        <Path  
          path={[['M', 100, 100], ['L', 200, 200]]}
          stroke='red'
          lineWidth={2}
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