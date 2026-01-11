<template>
  <section class="relative min-h-screen py-32 px-6 overflow-hidden">
    <!-- Smooth Dark Background dengan Subtle Gradient -->
    <div class="absolute inset-0 bg-black"></div>
    
    <!-- Subtle Glow Spots - Organic & Minimal -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div ref="glow1" class="absolute w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[120px] -top-40 -left-40"></div>
      <div ref="glow2" class="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-[100px] top-1/2 right-0"></div>
      <div ref="glow3" class="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/3 blur-[80px] bottom-0 left-1/3"></div>
    </div>
    
    <!-- Subtle Noise Texture untuk depth -->
    <div class="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div ref="headerRef" class="mb-24 opacity-0">
        <div class="inline-block mb-4">
          <span class="text-emerald-500 text-sm font-mono tracking-wider uppercase px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-500/5">
            My Journey
          </span>
        </div>
        <h2 class="text-6xl md:text-8xl font-black text-white mb-6">
          The Road<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">So Far</span>
        </h2>
        <p class="text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Every line of code tells a story. Here's mine—from curiosity to creation.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Progress Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800">
          <div ref="progressLine" class="w-full bg-gradient-to-b from-emerald-500 to-emerald-400 origin-top" style="height: 0%"></div>
        </div>

        <!-- Timeline Items -->
        <div class="space-y-24">
          <div 
            v-for="(item, index) in journeyItems" 
            :key="index"
            :ref="el => itemRefs[index] = el"
            class="relative opacity-0"
            :class="index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'"
          >
            <!-- Timeline Dot -->
            <div 
              class="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10"
              :class="item.type === 'education' ? 'bg-emerald-500' : item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'"
            >
              <div class="absolute inset-0 rounded-full animate-ping opacity-20" :class="item.type === 'education' ? 'bg-emerald-500' : item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'"></div>
            </div>

            <!-- Content Card -->
            <div 
              class="ml-20 md:ml-0 group cursor-pointer"
              :class="index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'"
            >
              <div class="relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5">
                <!-- Glow Effect on Hover -->
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div class="relative z-10">
                  <!-- Year Badge -->
                  <div class="inline-flex items-center gap-2 mb-4">
                    <div class="w-2 h-2 rounded-full" :class="item.type === 'education' ? 'bg-emerald-500' : item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'"></div>
                    <span class="text-zinc-500 font-mono text-sm font-bold">{{ item.year }}</span>
                  </div>

                  <!-- Title -->
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {{ item.title }}
                  </h3>

                  <!-- Subtitle -->
                  <p class="text-emerald-500 font-semibold mb-4">{{ item.subtitle }}</p>

                  <!-- Description -->
                  <p class="text-zinc-400 leading-relaxed mb-6">
                    {{ item.description }}
                  </p>

                  <!-- Tags/Highlights -->
                  <div class="flex flex-wrap gap-2" :class="index % 2 !== 0 ? 'md:justify-end' : ''">
                    <span 
                      v-for="(tag, idx) in item.tags" 
                      :key="idx"
                      class="px-3 py-1 bg-zinc-800/50 border border-white/5 rounded-lg text-xs font-mono text-zinc-400"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Summary -->
      <div ref="statsRef" class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32 opacity-0">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center p-8 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-500 group"
        >
          <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
            {{ stat.value }}
          </div>
          <div class="text-zinc-500 text-sm font-semibold uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)
const progressLine = ref(null)
const statsRef = ref(null)
const itemRefs = ref([])
const glow1 = ref(null)
const glow2 = ref(null)
const glow3 = ref(null)

// Data Journey - Sesuaikan dengan journey Anda!
const journeyItems = [
  {
    year: '2024',
    type: 'work',
    title: 'Senior Frontend Developer',
    subtitle: 'Tech Startup Inc.',
    description: 'Leading frontend architecture with Nuxt.js and Vue 3. Building scalable applications with modern web technologies and mentoring junior developers.',
    tags: ['Nuxt.js', 'Vue 3', 'TypeScript', 'Team Lead']
  },
  {
    year: '2023',
    type: 'achievement',
    title: 'Open Source Contributor',
    subtitle: 'Vue.js Ecosystem',
    description: 'Contributing to Vue.js ecosystem projects. Sharing knowledge through technical writing and helping the developer community grow.',
    tags: ['Open Source', 'Community', 'Mentoring']
  },
  {
    year: '2022',
    type: 'work',
    title: 'Full Stack Developer',
    subtitle: 'Digital Agency',
    description: 'Developed multiple client projects using modern JavaScript frameworks. Focused on creating performant and accessible web applications.',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'REST API']
  },
  {
    year: '2021',
    type: 'education',
    title: 'Started Web Development Journey',
    subtitle: 'Self-Taught & Online Courses',
    description: 'Began learning web development through online courses and building personal projects. Fell in love with Vue.js and modern web technologies.',
    tags: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Learning']
  }
]

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '3+', label: 'Years Exp' },
  { value: '15+', label: 'Tech Stack' },
  { value: '99%', label: 'Coffee Fuel' }
]

let scrollTriggers = []

onMounted(() => {
  // Reset GSAP animations to prevent bugs on route change
  gsap.set([headerRef.value, statsRef.value, ...itemRefs.value], { clearProps: 'all' })
  gsap.set(progressLine.value, { height: '0%' })
  
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    initAnimations()
  }, 100)
})

const initAnimations = () => {
  // Subtle floating animation untuk glow spots
  gsap.to(glow1.value, {
    x: 100,
    y: 50,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  
  gsap.to(glow2.value, {
    x: -80,
    y: -100,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  
  gsap.to(glow3.value, {
    x: -50,
    y: 80,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Header Animation
  const headerTrigger = gsap.to(headerRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
  scrollTriggers.push(headerTrigger.scrollTrigger)

  // Progress Line Animation
  const progressTrigger = gsap.to(progressLine.value, {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: progressLine.value.parentElement,
      start: 'top 50%',
      end: 'bottom 80%',
      scrub: 1
    }
  })
  scrollTriggers.push(progressTrigger.scrollTrigger)

  // Timeline Items Stagger Animation
  itemRefs.value.forEach((item, index) => {
    if (!item) return
    
    const isEven = index % 2 === 0
    
    const itemTrigger = gsap.fromTo(item,
      {
        opacity: 0,
        x: isEven ? -100 : 100,
        y: 50
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
    scrollTriggers.push(itemTrigger.scrollTrigger)
  })

  // Stats Animation
  const statsTrigger = gsap.fromTo(statsRef.value,
    {
      opacity: 0,
      y: 80
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: statsRef.value,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    }
  )
  scrollTriggers.push(statsTrigger.scrollTrigger)
}

onBeforeUnmount(() => {
  // Clean up semua ScrollTrigger untuk prevent bugs
  scrollTriggers.forEach(trigger => {
    if (trigger) trigger.kill()
  })
  scrollTriggers = []
  
  // Reset refs
  itemRefs.value = []
})
</script>

<style scoped>
/* Custom scrollbar styling jika diperlukan */
</style>