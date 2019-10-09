import React, { Component } from 'react'
import G from '@antv/g'
import ReactFiberReconciler from 'react-reconciler'
import * as HostConfig from './ReactGHostConfig'

const GRenderer = ReactFiberReconciler(HostConfig)

GRenderer.injectIntoDevTools({
  findFiberByHostInstance: () => null,
  bundleType: process.env.NODE_ENV !== 'production' ? 1 : 0,
  version: React.version,
  rendererPackageName: 'react-g'
})

export const Group = 'Group'
export const Rect = 'Rect'
export const Circle = 'Circle'
export const Path = 'Path'
export const Line = 'Line'
export const Polyline = 'Polyline'
export const Image = 'Image'
export const Text = 'Text'
export const Marker = 'Marker'
export const Fan = 'Fan'
export const Arc = 'Arc'
export const Ellipse = 'Ellipse'
export const Cubic = 'Cubic'
export const Quadratic = 'Quadratic'

export class Canvas extends Component {

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
