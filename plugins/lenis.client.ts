import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 2.0,      // Semakin tinggi angka, semakin lambat & "berat" scroll-nya
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi pelambatan (elegant feel)
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8, // Sensitivitas scroll (0.8 agar terasa lebih mantap)
    touchMultiplier: 2,
    infinite: false,
  })

  // Sinkronisasi dengan GSAP (Penting agar ScrollTrigger tetap akurat)
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return {
    provide: {
      lenis
    }
  }
})