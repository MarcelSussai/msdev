import type { Action } from 'svelte/action'

export interface Params_action {
  top?:         number
  right?:       number
  bottom?:      number
  left?:        number
  steps?:       number | number[]
  percent_by?:  number
}
export interface Observe_result {
  entry:              IntersectionObserverEntry
  percent:            number
  is_only_by_bottom:  boolean
  is_by_percent:      boolean
}


const stepsToThreshold = (s: number | number[]) => {
  if (typeof s === 'number') { return [...Array(s).keys()].map(n => n / s) }
  return s
}

export const observe: Action<
  HTMLElement
  , Params_action
  , { 'on:intersect': (e: CustomEvent) => void }
> = ( node, { top = 0, right = 0, bottom = 0, left = 0, steps = 100, percent_by = 100 } ) => {

  let observer: IntersectionObserver
  let unobserve: () => void = () => {}

  const fn_observer = (
    entries: IntersectionObserverEntry[],
  ) => {
    entries.forEach((entry) => {
      const observe_result: Observe_result = {
        entry: entry,
        percent: Math.round(Math.ceil(entry.intersectionRatio * 100)),
        is_only_by_bottom: Boolean(
          entry.isIntersecting
          && Math.round(Math.ceil(entry.intersectionRatio * 100)) >= percent_by
        ) || Boolean(
          entry.rootBounds?.bottom &&
          entry.boundingClientRect?.bottom <= entry.rootBounds?.bottom
        ),
        is_by_percent: Boolean(
          entry.isIntersecting
          && Math.round(Math.ceil(entry.intersectionRatio * 100)) >= percent_by
        ),
      }
      node.dispatchEvent( new CustomEvent( 'intersect', { detail: observe_result } ) )
    })
  }

  const opt_observer = {
    rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
    threshold:  stepsToThreshold(steps),
  }

  // eslint-disable-next-line prefer-const
  observer = new IntersectionObserver(fn_observer, opt_observer)
  observer.observe(node)
  unobserve = () => observer.unobserve(node)

  return { destroy() { return unobserve }, }
}
