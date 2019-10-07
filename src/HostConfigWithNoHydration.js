import invariant from './invariant';

// Renderers that don't support hydration
// can re-export everything from this module.

function shim() {
  invariant(
    false,
    'The current renderer does not support hyration. ' +
      'This error is likely caused by a bug in React. ' +
      'Please file an issue.'
  );
}

// Hydration (when unsupported)
export const supportsHydration = false;
export const canHydrateInstance = shim;
export const canHydrateTextInstance = shim;
export const getNextHydratableSibling = shim;
export const getFirstHydratableChild = shim;
export const hydrateInstance = shim;
export const hydrateTextInstance = shim;
export const didNotMatchHydratedContainerTextInstance = shim;
export const didNotMatchHydratedTextInstance = shim;
export const didNotHydrateContainerInstance = shim;
export const didNotHydrateInstance = shim;
export const didNotFindHydratableContainerInstance = shim;
export const didNotFindHydratableContainerTextInstance = shim;
export const didNotFindHydratableInstance = shim;
export const didNotFindHydratableTextInstance = shim