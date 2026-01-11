import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}
