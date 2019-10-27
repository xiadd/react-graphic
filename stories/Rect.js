import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Canvas, Group, Rect } from '../src/react-g'

storiesOf('DateRangePicker (DRP)', module)
  .add('default', withInfo()(() => (
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
  )))