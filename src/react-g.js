import React, { Component } from 'react'
import G from '@antv/g'
import ReactFiberReconciler from 'react-reconciler'
import { applyNodeProps } from './makeUpdates'

const NO_CONTEXT = {}
const UPDATE_SIGNAL = {}

const hostConfig = {
  appendInitialChild(parentInstance, child) {
    parentInstance.add(child)
  },

  createInstance(type, props, rootContainerInstance) {
    const NodeClass = G[type]
    if (!NodeClass) {
      return
    }
    const instance = new NodeClass()
    applyNodeProps(instance, props)

    return instance
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    throw new Error("G does't have text mode node")
  },

  finalizeInitialChildren(domElement, type, props) {
    return false
  },

  getPublicInstance(instance) {
    return instance
  },

  prepareForCommit() {
    // Noop
  },

  resetAfterCommit() {
    // Noop
  },

  prepareUpdate(domElement, type, oldProps, newProps) {
    return UPDATE_SIGNAL
  },

  getRootHostContext() {
    return NO_CONTEXT
  },

  getChildHostContext() {
    return NO_CONTEXT
  },

  shouldSetTextContent(type, props) {
    return false
  },

  now() {
    return Date.now
  },

  supportsMutation: true,

  useSyncScheduling: true,

  appendChild(parentInstance, child) {
    if (child.parent === parentInstance) {
      child.moveToTop()
    } else {
      parentInstance.add(child)
    }
  },

  appendChildToContainer(parentInstance, child) {
    if (child.parent === parentInstance) {
      child.moveToTop()
    } else {
      parentInstance.add(child)
    }
  },

  removeChild(parentInstance, child) {
    child.destroy()
  },

  removeChildFromContainer(parentInstance, child) {
    child.destroy()
  },

  insertBefore(parentInstance, child, beforeChild) {
    // child._remove() will not stop dragging
    // but child.remove() will stop it, but we don't need it
    // removing will reset zIndexes
    child._remove()
    parentInstance.add(child)
    child.setZIndex(beforeChild.getZIndex())
  },


  insertInContainerBefore(parentInstance, child, beforeChild) {
    insertBefore(parentInstance, child, beforeChild)
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps
  ) {
    applyNodeProps(instance, newProps, oldProps)
  },

  commitMount(instance, type, newProps) {
    // Noop
  },

  commitTextUpdate(textInstance, oldText, newText) {
    
  },

  resetTextContent(domElement) {
    // Noop
  }
}

const GRenderer = ReactFiberReconciler(hostConfig)

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