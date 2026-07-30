import { animate, stagger } from 'animejs'

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function revealIn(el: HTMLElement, opts: { delay?: number; y?: number } = {}): void {
  const { delay = 0, y = 28 } = opts
  if (prefersReducedMotion()) {
    el.style.opacity = '1'
    return
  }
  animate(el, { opacity: [0, 1], translateY: [y, 0], duration: 720, delay, ease: 'out(3)' })
}

export { animate, stagger }