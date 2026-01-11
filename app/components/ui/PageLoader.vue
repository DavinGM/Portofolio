<template>
  <div class="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
    <div 
      ref="progressBar" 
      class="h-[2px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)] w-0"
    ></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const { $router } = useNuxtApp()
const progressBar = ref(null)
let tl

onMounted(() => {
  // Setup Timeline
  tl = gsap.timeline({ paused: true })
  
  tl.to(progressBar.value, {
    width: '30%',
    duration: 0.4,
    ease: 'power2.out'
  })
  .to(progressBar.value, {
    width: '70%',
    duration: 1.2,
    ease: 'slow(0.7, 0.7, false)'
  })

  // Hook Router Nuxt
  $router.beforeEach(() => {
    gsap.set(progressBar.value, { opacity: 1, width: 0 })
    tl.restart()
  })

  $router.afterEach(() => {
    tl.play() // Lanjutkan ke sisa progress
    gsap.to(progressBar.value, {
      width: '100%',
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(progressBar.value, {
          opacity: 0,
          duration: 0.3,
          delay: 0.1
        })
      }
    })
  })
})
</script>