import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactG from '../../src'

const { Canvas, Group, Rect } = ReactG

class Demo extends Component {
  render() {
    return <div>
      <h1>react-g Demo</h1>
      <Canvas id="c1" width={1000} height={1000}>
        <Group>
          <Rect 
            cursor="pointer" 
            x={100} 
            y={100} 
            width={100} 
            height={100} 
            fill="red" 
          />
        </Group>
      </Canvas>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
