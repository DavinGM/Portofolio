<template>
  <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4">
    <nav 
      ref="navDock"
      class="bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 flex items-center gap-1 shadow-2xl shadow-emerald-500/5 opacity-0 translate-y-20"
    >
      <div class="px-4 border-r border-white/5 mr-2">
        <div class="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-black font-black text-[10px]">
          D
        </div>
      </div>

      <div class="flex items-center gap-1">
        <NuxtLink 
          v-for="(item, index) in navLinks" 
          :key="index"
          :to="item.path"
          class="relative px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden"
          :class="route.path === item.path ? 'text-white' : 'text-zinc-500 hover:text-emerald-400'"
        >
          <span v-if="route.path === item.path" class="absolute inset-0 bg-emerald-500/10 -z-10"></span>
          <span v-if="route.path === item.path" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-emerald-500"></span>
          
          <span class="relative z-10">{{ item.name }}</span>
        </NuxtLink>
      </div>

      <div class="ml-2 pl-2 border-l border-white/5">
        <button class="w-10 h-10 flex items-center justify-center bg-white rounded-xl group hover:bg-emerald-500 transition-all duration-500">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="stroke-black group-hover:rotate-45 transition-transform duration-500">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const route = useRoute()
const navDock = ref(null)

const navLinks = [
  { name: 'Base', path: '/' },
  { name: 'project', path: '/project' },
  { name: 'about', path: '/about' },
  { name: 'Studio', path: '/studio' },
]

onMounted(() => {
  // GSAP Entrance: Floating up effect
  gsap.to(navDock.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo.out',
    delay: 1 // Muncul setelah Hero mulai
  })

  // Efek Magnetic Sederhana (Hover)
  const items = document.querySelectorAll('nav a, nav button')
  items.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out'
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
    })
  })
})
</script>