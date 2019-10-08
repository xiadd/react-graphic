import React, {Component} from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import {render} from 'react-dom'

import ReactG from '../../src'

const { Canvas, Group, Rect } = ReactG

const scope = { Canvas, Group, Rect }

const demoCode = `
<Canvas id="c1" width={1000} height={1000}>
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
`

class Demo extends Component {
  render() {
    return (
      <LiveProvider code={demoCode} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
