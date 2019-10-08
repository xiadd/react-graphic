import React, { Component } from 'react'
import G from '@antv/g'
import ReactFiberReconciler from 'react-reconciler'
import * as HostConfig from './ReactGHostConfig'

class Canvas extends Component {

  componentDidMount () {
    this.canvas = new G.Canvas({
      width: this.props.width,
      height: this.props.height,
      containerId: this.props.id
    })
    if (!this._mountNode) {
      this._mountNode = GRenderer.createContainer(this.canvas)
    }
    GRenderer.updateContainer(this.props.children, this._mountNode, this, () => {
      this.canvas.draw()
    })
  }

  componentDidUpdate () {
    GRenderer.updateContainer(this.props.children, this._mountNode, this, () => {
      this.canvas.draw()
    })
  }

  render() {
    return <div id={this.props.id} />
  }
}

const G_NODES = [
  'Group',
  'Rect',
  'Circle',
  'Path',
  'Line',
  'Polyline',
  'Image',
  'Text',
  'Marker',
  'Fan',
  'Arc',
  'Ellipse',
  'Cubic',
  'Quadratic'
]

const TYPES = {}

G_NODES.forEach(function(nodeName) {
  TYPES[nodeName] = nodeName;
})

const GRenderer = ReactFiberReconciler(HostConfig)

GRenderer.injectIntoDevTools({
  findFiberByHostInstance: () => null,
  bundleType: process.env.NODE_ENV !== 'production' ? 1 : 0,
  version: React.version,
  rendererPackageName: 'react-g'
})

export default {
  ...TYPES,
  Canvas
}