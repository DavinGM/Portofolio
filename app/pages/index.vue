<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { killAllScrollTriggers } from '@/utils/gsapCleanup'
import Contact from '~/components/landing/Contact.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // pastikan scroll ke atas
  window.scrollTo(0, 0)
})

onBeforeUnmount(() => {
  // PENTING: matikan semua GSAP
  killAllScrollTriggers()
})
</script>


<template>
  <div>
    <LandingHeroSection />
    <LandingExpertise />
    <LandingProject />
    <LandingDesignDNA />
    <Contact />
    </div>
</template>

<style scoped>
  .section {
  opacity: 1;
  transform: none;
}
</style>