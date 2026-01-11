<template>
  <div class="bg-black min-h-screen selection:bg-emerald-500/30">
    <div class="custom-scrollbar">
      <div ref="thumb" class="custom-scrollbar-thumb h-0"></div>
    </div>
    <UiPageLoader />
    <UiAppBackground />
    <FragmentsNavbar />
    <UiAppSocialSide />
    
    <main>
      <slot />
    </main> 
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const thumb = ref(null)

onMounted(() => {
  // Animasi progress scrollbar samping
  gsap.to(thumb.value, {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      end: 'bottom bottom',
      scrub: true // Mengikuti kecepatan scroll
    }
  })
})
</script>