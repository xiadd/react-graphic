const propsToSkip = {
  children: true,
  ref: true,
  key: true,
  style: true,
  forwardedRef: true,
  unstable_applyCache: true,
  unstable_applyDrawHitFromCache: true
}

export function applyNodeProps (instance, props, oldProps = {}) {
  for (let key in oldProps) {
    if (propsToSkip[key]) {
      continue
    }
    const isEvent = key.slice(0, 2) === 'on'
    const propChanged = oldProps[key] !== props[key]
    const toRemove = !props.hasOwnProperty(key)

    if (isEvent && propChanged) {
      const eventName = key.substr(2).toLowerCase()
      instance.off(eventName, oldProps[key]);
    }

    if (toRemove) {
      instance.attr(key, undefined);
    }
  }

  for (let key in props) {
    if (propsToSkip[key]) {
      continue
    }
    const isEvent = key.slice(0, 2) === 'on'
    const toAdd = oldProps[key] !== props[key]
    if (isEvent && toAdd) {
      var eventName = key.substr(2).toLowerCase()
      if (props[key]) {
        instance.on(eventName, props[key])
      }
    }
    if (!isEvent && toAdd) {
      instance.attr(key, props[key])
    }
  }
}