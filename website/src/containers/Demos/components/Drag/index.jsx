import React, {Component} from 'react'

import { Canvas, Group, Rect } from 'react-graphic'
import DemoWrap from '../../../../components/DemoWrap'

const codeString = `class RectGraph extends Component {
  constructor () {
    super()
    this.state = {
      position: {
        x: 100,
        y: 100
      }
    }
  }

  handleDragStart = (evt) => {
    this.origin = {
      x: evt.x,
      y: evt.y
    }
  }

  handleDrag = (evt) => {
    this.setState({
      position: {
        x: evt.x - this.origin.x + this.state.position.x,
        y: evt.y - this.origin.y + this.state.position.y
      }
    }, () => {
      this.origin = {
        x: evt.x,
        y: evt.y
      }
    })
  }

  handleDragEnd = () => {
    this.origin = null
  }

  render() {
    const { x, y } = this.state.position
    return (
      <Canvas id="c1" width={480} height={400}>
        <Group>
          <Rect 
            cursor="pointer" 
            x={x} 
            y={y} 
            width={100} 
            height={100} 
            fill="#d44131" 
            onDragStart={this.handleDragStart}
            onDrag={this.handleDrag}
            onDragEnd={this.handleDragEnd}
          />
        </Group>
      </Canvas>
    )
  }
}`

class RectGraph extends Component {

  constructor () {
    super()
    this.state = {
      position: {
        x: 100,
        y: 100
      }
    }
  }

  handleDragStart = (evt) => {
    this.origin = {
      x: evt.x,
      y: evt.y
    }
  }

  handleDrag = (evt) => {
    this.setState({
      position: {
        x: evt.x - this.origin.x + this.state.position.x,
        y: evt.y - this.origin.y + this.state.position.y
      }
    }, () => {
      this.origin = {
        x: evt.x,
        y: evt.y
      }
    })
  }

  handleDragEnd = () => {
    this.origin = null
  }

  render() {
    const { x, y } = this.state.position
    return (
      <Canvas id="c1" width={480} height={400}>
        <Group>
          <Rect 
            cursor="pointer" 
            x={x} 
            y={y} 
            width={100} 
            height={100} 
            fill="#d44131" 
            onDragStart={this.handleDragStart}
            onDrag={this.handleDrag}
            onDragEnd={this.handleDragEnd}
          />
        </Group>
      </Canvas>
    )
  }
}


export default function RectDemo () {
  return <DemoWrap 
    Demo={RectGraph} 
    codeString={codeString} 
    title="Rect的使用"
    desc="本及介绍创建大量标记的基本用法"
  />
}