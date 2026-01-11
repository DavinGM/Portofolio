<template>
  <section
    ref="sectionEl"
    class="relative py-48 md:py-64 overflow-hidden bg-transparent"
  >
    <!-- ANIMATED CLOUDS BACKGROUND -->
    <div class="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none">
      <div
        v-for="i in 6"
        :key="i"
        ref="cloudEls"
        class="absolute rounded-full blur-3xl"
        :class="[
          i % 3 === 0 ? 'bg-emerald-500/30' : i % 2 === 0 ? 'bg-blue-500/30' : 'bg-purple-500/30',
          i % 2 === 0 ? 'w-96 h-96' : 'w-80 h-80'
        ]"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }"
      ></div>
    </div>

    <!-- BIG BACKDROP WORD -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
    >
      <span class="text-[32vw] font-black uppercase tracking-tighter text-white">
        THINK
      </span>
    </div>

    <!-- CONTAINER DENGAN MAX WIDTH YANG KONSISTEN -->
    <div class="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- HEADER -->
      <header class="grid grid-cols-12 gap-6 mb-40">
        <div class="col-span-12 md:col-span-3">
          <span
            ref="eyebrowEl"
            class="block text-[10px] font-bold tracking-[0.45em] uppercase text-zinc-500"
          >
            How I Think
          </span>
        </div>

        <div class="col-span-12 md:col-span-9">
          <h2
            ref="titleEl"
            class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-white"
          >
            Design isn't about taste,.<br />
            it's about the best experience.
          </h2>
        </div>
      </header>

      <!-- CONTENT DENGAN GRID LAYOUT YANG BALANCE -->
      <div class="grid grid-cols-12 gap-8 lg:gap-12 relative">
        
        <!-- LEFT SIDE - MENU ITEMS -->
        <div 
          class="col-span-12 lg:col-span-7"
          @mouseleave="handleContainerLeave"
        >
          <ul class="space-y-20 lg:space-y-28">
            <li
              v-for="(item, idx) in SITE_ITEMS"
              :key="item.id"
              ref="itemEls"
              class="group cursor-pointer"
              @mouseenter="handleMouseEnter(item.id, idx)"
            >
              <div class="grid grid-cols-12 gap-6 items-start">
                <!-- LEFT LINE -->
                <div class="col-span-1 hidden md:block relative">
                  <span
                    class="absolute left-1/2 top-0 h-full w-px bg-white opacity-[0.08] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700"
                  ></span>
                </div>

                <!-- MAIN CONTENT -->
                <div class="col-span-12 md:col-span-11">
                  <div class="flex items-baseline gap-6 mb-4">
                    <span
                      class="text-[10px] font-mono tracking-widest text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300"
                    >
                      {{ item.code }}
                    </span>

                    <h3
                      class="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-500"
                    >
                      {{ item.title }}
                    </h3>
                  </div>

                  <p
                    class="max-w-xl text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500"
                  >
                    {{ item.desc }}
                  </p>

                  <!-- ICON INDICATOR -->
                  <div class="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="idx === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path v-else-if="idx === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        <path v-else-if="idx === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <span class="text-xs text-emerald-400/60 font-mono">Explore →</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- RIGHT SIDE - STICKY IMAGE CARD CONTAINER -->
        <div 
          class="hidden lg:block col-span-5 relative"
          @mouseenter="handleCardHover"
        >
          <div class="sticky top-32">
            <!-- FIXED HEIGHT CONTAINER -->
            <div class="w-full h-[580px] relative">
              
              <!-- GLOW EFFECT -->
              <div 
                class="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-3xl rounded-3xl transition-opacity duration-700"
                :class="hoveredItem ? 'opacity-60' : 'opacity-0'"
              ></div>
              
              <!-- MAIN CARD -->
              <div class="relative w-full h-full rounded-2xl overflow-hidden border bg-zinc-900/90 backdrop-blur-xl shadow-2xl transition-all duration-700"
                :class="hoveredItem ? 'border-white/10' : 'border-white/5'"
              >
                <!-- ANIMATED GRADIENT OVERLAY -->
                <div 
                  class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 transition-opacity duration-700"
                  :class="hoveredItem ? 'opacity-50' : 'opacity-20'"
                ></div>
                
                <!-- IMAGE SECTION WITH REVEAL ANIMATION -->
                <div 
                  ref="imageContainerEl" 
                  class="relative h-[65%] overflow-hidden"
                >
                  <!-- SLIDING REVEAL OVERLAY -->
                  <div 
                    class="absolute inset-0 bg-zinc-900 z-10 transition-transform duration-1000 ease-out origin-left"
                    :style="{ transform: hoveredItem ? 'scaleX(0)' : 'scaleX(1)' }"
                  ></div>
                  
                  <img
                    v-if="hoveredItem"
                    :key="hoveredItem.id"
                    :src="hoveredItem.image"
                    :alt="hoveredItem.title"
                    class="w-full h-full object-cover transition-all duration-700 ease-out"
                    :style="{ 
                      transform: `scale(${isImageHovered ? 1.05 : 1}) translate(${parallaxX}px, ${parallaxY}px)`,
                      opacity: hoveredItem ? 1 : 0
                    }"
                  />
                  
                  <!-- DEFAULT STATE -->
                  <div 
                    v-else
                    class="w-full h-full bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center"
                  >
                    <div class="text-center space-y-3">
                      <svg class="w-16 h-16 text-zinc-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p class="text-xs text-zinc-600 font-medium px-8">
                        Hover menu untuk visual
                      </p>
                    </div>
                  </div>
                  
                  <!-- FLOATING OVERLAY GRADIENT -->
                  <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                  
                  <!-- FLOATING NUMBER WITH SLIDE IN -->
                  <div 
                    class="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-700 ease-out"
                    :style="{
                      opacity: hoveredItem ? 1 : 0,
                      transform: hoveredItem ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.8)'
                    }"
                  >
                    <span class="text-xl font-black text-white">{{ hoveredItem?.code || '—' }}</span>
                  </div>
                </div>

                <!-- CARD CONTENT WITH STAGGERED ANIMATION -->
                <div class="relative p-8 h-[35%] flex flex-col justify-between overflow-hidden">
                  <div>
                    <h4 
                      class="text-2xl font-bold text-white mb-3 leading-tight min-h-[64px] transition-all duration-700 ease-out"
                      :style="{
                        opacity: hoveredItem ? 1 : 0.4,
                        transform: hoveredItem ? 'translateY(0)' : 'translateY(10px)'
                      }"
                    >
                      {{ hoveredItem?.title || 'Hover untuk melihat detail' }}
                    </h4>
                    <p 
                      class="text-sm text-zinc-400 leading-relaxed line-clamp-3 min-h-[60px] transition-all duration-700 ease-out delay-75"
                      :style="{
                        opacity: hoveredItem ? 1 : 0.3,
                        transform: hoveredItem ? 'translateY(0)' : 'translateY(10px)'
                      }"
                    >
                      {{ hoveredItem?.desc || 'Arahkan kursor ke salah satu menu di sebelah kiri untuk melihat visual dan informasi lebih detail.' }}
                    </p>
                  </div>

                  <!-- TAGS WITH STAGGERED ENTRANCE -->
                  <div class="flex gap-2 flex-wrap min-h-[32px]">
                    <span
                      v-for="(tag, idx) in hoveredItem?.tags || []"
                      :key="tag"
                      class="px-3 py-1.5 text-xs font-medium bg-white/5 text-emerald-400 rounded-full border border-emerald-500/20 transition-all duration-500 ease-out"
                      :style="{
                        opacity: hoveredItem ? 1 : 0,
                        transform: hoveredItem ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
                        transitionDelay: `${150 + (idx * 50)}ms`
                      }"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- DECORATIVE CORNER WITH FADE -->
                <div 
                  class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full transition-all duration-700"
                  :style="{
                    opacity: hoveredItem ? 1 : 0.3,
                    transform: hoveredItem ? 'scale(1)' : 'scale(0.8)'
                  }"
                ></div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const sectionEl = ref<HTMLElement | null>(null)
const eyebrowEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)
const itemEls = ref<HTMLElement[]>([])
const cloudEls = ref<HTMLElement[]>([])
const cardEl = ref<HTMLElement | null>(null)
const imageContainerEl = ref<HTMLElement | null>(null)

const hoveredId = ref<number | null>(null)
const isImageHovered = ref(false)
const parallaxX = ref(0)
const parallaxY = ref(0)

let ctx: gsap.Context | null = null
let cloudTimelines: gsap.core.Timeline[] = []

const hoveredItem = computed(() => {
  return SITE_ITEMS.find(item => item.id === hoveredId.value) || null
})

const handleMouseEnter = (id: number, index: number) => {
  hoveredId.value = id
  isImageHovered.value = true
}

const handleCardHover = () => {
  // Keep card active when hovering over it
  isImageHovered.value = true
}

const handleContainerLeave = () => {
  // Only clear when leaving the entire left container
  // This creates a "bridge" - card stays active between items
  setTimeout(() => {
    if (!isImageHovered.value) {
      hoveredId.value = null
    }
  }, 100)
  isImageHovered.value = false
}

// Mouse move handler for parallax
const handleMouseMove = (e: MouseEvent) => {
  if (!imageContainerEl.value || !hoveredId.value) return
  
  const rect = imageContainerEl.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15
  
  parallaxX.value = x
  parallaxY.value = y
}

onMounted(() => {
  ctx = gsap.context(() => {
    // Header animations
    gsap.from([eyebrowEl.value, titleEl.value], {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionEl.value,
        start: 'top 75%'
      }
    })

    // Item animations
    itemEls.value.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      })
    })

    // Animated clouds - floating effect
    cloudEls.value.forEach((cloud, i) => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      
      tl.to(cloud, {
        x: `${Math.random() * 100 - 50}px`,
        y: `${Math.random() * 100 - 50}px`,
        duration: 8 + Math.random() * 4,
        ease: 'sine.inOut'
      })
      
      cloudTimelines.push(tl)
    })
  }, sectionEl)

  // Add mouse move listener
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  ctx?.revert()
  cloudTimelines.forEach(tl => tl.kill())
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
section,
li {
  opacity: 1;
  transform: none;
}

/* Smooth line clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>