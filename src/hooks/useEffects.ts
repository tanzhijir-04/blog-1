import {
  useLayoutEffect,
  type DependencyList,
  type EffectCallback,
  useRef,
} from 'react'
export const useLayoutMount = (effect: EffectCallback) =>
  // eslint-disable-next-line
  useLayoutEffect(effect, [])

export const useLayoutUpdate = (
  effect: EffectCallback,
  deps?: DependencyList,
) => {
  const isMount = useRef(false)
  useLayoutEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return
    }
    return effect()
    // eslint-disable-next-line
  }, deps)
}
