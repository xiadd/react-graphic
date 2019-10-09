import G from '@antv/g'
import invariant from './invariant'
import { applyNodeProps } from './makeUpdates'
import {
  unstable_scheduleCallback as scheduleDeferredCallback,
  unstable_cancelCallback as cancelDeferredCallback
} from 'scheduler'


export * from './HostConfigWithNoPersistence'
export * from './HostConfigWithNoHydration'

export {
  unstable_now as now,
  unstable_scheduleCallback as scheduleDeferredCallback,
  unstable_shouldYield as shouldYield,
  unstable_cancelCallback as cancelDeferredCallback
} from 'scheduler'

const NO_CONTEXT = {}
const UPDATE_SIGNAL = {}

export function appendInitialChild(parentInstance, child) {
  if (typeof child === 'string') {
    // Noop for string children of Text (eg <Text>foo</Text>)
    invariant(
      false,
      'Don not use plain text as child of G.Node. You are using text: "%s"',
      child
    )
    return
  }

  parentInstance.add(child)
}

export function createInstance(type, props, internalInstanceHandle) {
  const NodeClass = G[type]
  if (!NodeClass) {
    invariant(
      instance,
      'G has no node with the type "%s". If you use minimal version of react-G, just import required nodes into G: `import "G/lib/shapes/%s"`  If you want to render DOM elements as part of canvas tree take a look into this demo: https://Gjs.github.io/docs/react/DOM_Portal.html',
      type,
      type
    )
    return
  }

  const instance = new NodeClass()
  applyNodeProps(instance, props)

  return instance
}

export function createTextInstance(
  text,
  rootContainerInstance,
  internalInstanceHandle
) {
  invariant(
    false,
    'Text components are not supported for now in ReactG. You text is: "' +
      text +
      '"'
  )
}

export function finalizeInitialChildren(domElement, type, props) {
  return false
}

export function getPublicInstance(instance) {
  return instance
}

export function prepareForCommit() {
  // Noop
}

export function prepareUpdate(domElement, type, oldProps, newProps) {
  return UPDATE_SIGNAL
}

export function resetAfterCommit() {
  // Noop
}

export function resetTextContent(domElement) {
  // Noop
}

export function shouldDeprioritizeSubtree(type, props) {
  return false
}

export function getRootHostContext() {
  return NO_CONTEXT
}

export function getChildHostContext() {
  return NO_CONTEXT
}

export const scheduleTimeout = setTimeout
export const cancelTimeout = clearTimeout
export const noTimeout = -1
export const schedulePassiveEffects = scheduleDeferredCallback
export const cancelPassiveEffects = cancelDeferredCallback

export function shouldSetTextContent(type, props) {
  return false
}

// The G renderer is secondary to the React DOM renderer.
export const isPrimaryRenderer = false

export const supportsMutation = true

export function appendChild(parentInstance, child) {
  if (child.parent === parentInstance) {
    child.moveToTop()
  } else {
    parentInstance.add(child)
  }
}

export function appendChildToContainer(parentInstance, child) {
  if (child.parent === parentInstance) {
    child.moveToTop()
  } else {
    parentInstance.add(child)
  }
}

export function insertBefore(parentInstance, child, beforeChild) {
  invariant(
    child !== beforeChild,
    'ReactG: Can not insert node before itself'
  )
  // child._remove() will not stop dragging
  // but child.remove() will stop it, but we don't need it
  // removing will reset zIndexes
  child._remove()
  parentInstance.add(child)
  child.setZIndex(beforeChild.getZIndex())
}

export function insertInContainerBefore(parentInstance, child, beforeChild) {
  insertBefore(parentInstance, child, beforeChild)
}

export function removeChild(parentInstance, child) {
  child.destroy()
}

export function removeChildFromContainer(parentInstance, child) {
  child.destroy()
}

export function commitTextUpdate(textInstance, oldText, newText) {
  invariant(
    false,
    'Text components are not yet supported in ReactG. You text is: "' +
      newText +
      '"'
  )
}

export function commitMount(instance, type, newProps) {
  // Noop
}

export function commitUpdate(
  instance,
  updatePayload,
  type,
  oldProps,
  newProps
) {
  applyNodeProps(instance, newProps, oldProps)
}

export function hideInstance(instance) {
  instance.hide()
}

export function hideTextInstance(textInstance) {
  // Noop
}

export function unhideInstance(instance, props) {
  if (props.visible == null || props.visible) {
    instance.show()
  }
}

export function unhideTextInstance(textInstance, text) {
  // Noop
}