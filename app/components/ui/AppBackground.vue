<template>
  <div class="fixed inset-0 -z-10 bg-[#000000] overflow-hidden">
    <div class="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] invert"></div>

    <div 
      ref="glow"
      class="absolute top-[-20%] left-[-10%] w-[100vw] h-[60vh] bg-emerald-900/10 blur-[150px] rounded-[100%] will-change-transform"
    ></div>

    <div class="absolute top-24 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const glow = ref(null)

onMounted(() => {
  // Animasi GSAP untuk membuat pendaran hijau bergerak organik (floating)
  gsap.to(glow.value, {
    x: '15%',
    y: '10%',
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })

  // Reaksi cahaya terhadap gerakan Mouse (Subtle Parallax)
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    const xPos = (clientX / window.innerWidth - 0.5) * 50
    const yPos = (clientY / window.innerHeight - 0.5) * 50

    gsap.to(glow.value, {
      x: `+=${xPos}`,
      y: `+=${yPos}`,
      duration: 2,
      ease: "power2.out"
    })
  })
})
</script>

<style scoped>
/* Memastikan performa halus untuk animasi blur yang berat */
.will-change-transform {
  will-change: transform;
}
</style>