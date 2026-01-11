<template>
  <div class="relative overflow-hidden">
    <!-- Section Hero/Profile -->
    <section ref="heroSection" class="min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
      <div class="max-w-7xl w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <!-- Left Side - Profile Image -->
          <div ref="imageContainer" class="relative order-2 lg:order-1">
            <div class="relative w-full max-w-lg mx-auto lg:mx-0">
              
              <!-- Glow Background Effect -->
              <div 
                ref="glowEffect"
                class="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full scale-75"
              ></div>
              
              <!-- Main Image Frame -->
              <div class="relative z-10">
                <div 
                  ref="imageFrame"
                  class="relative aspect-square rounded-3xl overflow-hidden border border-emerald-500/20 bg-zinc-900/30 backdrop-blur-sm"
                >
                  <!-- Profile Image -->
                  <img 
                    :src="SITE_DATA.profile.Image"
                    alt="Profile Picture"
                    class="w-full h-full object-cover scale-110"
                  />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <!-- Bottom Info Overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-8">
                    <div ref="overlayBadge" class="flex items-center gap-3 opacity-0">
                        <div 
                        class="w-3 h-3 rounded-full transition-colors duration-500"
                        :class="isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'"
                        ></div>
                        
                        <span 
                        class="text-sm font-medium transition-colors duration-500"
                        :class="isOpen ? 'text-emerald-400' : 'text-red-400'"
                        >
                        {{ statusText }}
                        </span>
                    </div>
                    </div>
                </div>

                <!-- Floating Stats Card -->
                <div 
                  ref="statsCard"
                  class="absolute -bottom-8 -right-8 bg-zinc-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 shadow-2xl shadow-emerald-500/10 opacity-0"
                >
                  <div class="flex items-center gap-6">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-emerald-400">{{ SITE_DATA.profile.Experience }}+</div>
                      <div class="text-xs text-zinc-500 mt-1">Years Exp</div>
                    </div>
                    <div class="w-px h-12 bg-zinc-700"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-emerald-400">{{ SITE_DATA.profile.Count_Project }}+</div>
                      <div class="text-xs text-zinc-500 mt-1">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Text Content -->
          <div ref="textContainer" class="order-1 lg:order-2 space-y-8">
            
            <!-- Label Tag -->
            <div ref="labelTag" class="inline-block opacity-0">
              <div class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span class="text-emerald-400 text-xs font-semibold uppercase tracking-widest">About Me</span>
              </div>
            </div>

            <!-- Main Heading -->
            <div class="space-y-4">
              <h1 ref="heading1" class="text-5xl lg:text-7xl font-bold text-white opacity-0">
                {{ SITE_DATA.profile.Fist_name }}
                <span class="block text-emerald-500">{{ SITE_DATA.profile.Last_name }}</span>
              </h1>
              
              <h2 ref="heading2" class="text-2xl lg:text-3xl text-zinc-400 opacity-0">
                Building digital experiences that matter
              </h2>
            </div>

            <!-- Bio Paragraph -->
            <div ref="bioText" class="space-y-4 opacity-0">
              <p class="text-zinc-400 text-lg leading-relaxed">
                I'm a passionate Frontend developer based in <span class="text-emerald-400 font-semibold">{{ SITE_DATA.profile.City }}, {{ SITE_DATA.profile.Country }}</span>. 
                I specialize in crafting beautiful, functional web applications using modern technologies.
              </p>
              <p class="text-zinc-500 leading-relaxed">
                With a keen eye for design and a love for clean code, I transform ideas into 
                seamless digital experiences that users love and businesses need.
              </p>
            </div>

            <!-- Quick Info Grid -->
            <div ref="infoGrid" class="grid grid-cols-2 gap-6 pt-6 opacity-0">
              <div class="space-y-2">
                <div class="text-xs text-zinc-600 uppercase tracking-wider">Location</div>
                <div class="text-white font-medium">Bandung, Indonesia</div>
              </div>
              <div class="space-y-2">
                <div class="text-xs text-zinc-600 uppercase tracking-wider">Role</div>
                <div class="text-white font-medium">Full-Stack Developer</div>
              </div>
              <div class="space-y-2">
                <div class="text-xs text-zinc-600 uppercase tracking-wider">Experience</div>
                <div class="text-white font-medium">5+ Years</div>
              </div>
              <div class="space-y-2">
                <div class="text-xs text-zinc-600 uppercase tracking-wider">Status</div>
                <div class="flex items-center gap-2">
                 <div 
                    class="w-2 h-2 rounded-full transition-colors duration-300"
                    :class="status ? 'bg-emerald-500' : 'bg-red-500'"
                    ></div>

                    <span 
                    class="font-medium transition-colors duration-300"
                    :class="status ? 'text-emerald-400' : 'text-red-400'"
                    >
                    {{ work }}
                    </span>
                </div>
              </div>
            </div>

            <!-- CTA Button (Optional) -->
            <div ref="ctaButton" class="pt-4 opacity-0">
              <button class="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all duration-300 overflow-hidden">
                <span class="relative z-10">Download CV</span>
                <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  </div>
</template>

<script setup>
import { SITE_DATA } from '#imports'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let work = SITE_DATA.Stats.OpenToWork

const status = ref(work) // Ganti ke false untuk melihat warna merah

if (work === true) {
  work = 'Open to work'
}else{
  work = 'Not open to work'
}

// 1. Ambil data asli boolean dari SITE_DATA
const isOpen = SITE_DATA.Stats.AvalibelForProject 

// 2. Tentukan teks secara dinamis
const statusText = computed(() => {
  return isOpen ? 'Available for projects' : 'Currently booked'
})
gsap.registerPlugin(ScrollTrigger)

// Refs untuk elements
const heroSection = ref(null)
const imageContainer = ref(null)
const imageFrame = ref(null)
const glowEffect = ref(null)
const overlayBadge = ref(null)
const statsCard = ref(null)
const textContainer = ref(null)
const labelTag = ref(null)
const heading1 = ref(null)
const heading2 = ref(null)
const bioText = ref(null)
const infoGrid = ref(null)
const ctaButton = ref(null)

// Timeline untuk animasi
let tl = null

// Fungsi untuk init animasi GSAP
const initAnimations = () => {
  // Kill timeline sebelumnya jika ada
  if (tl) {
    tl.kill()
  }

  // Kill semua ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())

  // Buat timeline baru
  tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  })

  // Animasi entrance berurutan
  tl.from(glowEffect.value, {
    scale: 0,
    opacity: 0,
    duration: 1.2
  })
  .from(imageFrame.value, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.6')
  .to(overlayBadge.value, {
    opacity: 1,
    y: 0,
    duration: 0.6
  }, '-=0.4')
  .to(statsCard.value, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, '-=0.3')
  
  // Text animations
  .to(labelTag.value, {
    opacity: 1,
    y: 0,
    duration: 0.6
  }, '-=0.8')
  .to(heading1.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.4')
  .to(heading2.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.6')
  .to(bioText.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.6')
  .to(infoGrid.value, {
    opacity: 1,
    y: 0,
    duration: 0.8
  }, '-=0.6')
  .to(ctaButton.value, {
    opacity: 1,
    y: 0,
    duration: 0.6
  }, '-=0.5')

  // Parallax effect saat scroll
  gsap.to(imageContainer.value, {
    y: -50,
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })

  gsap.to(textContainer.value, {
    y: -30,
    scrollTrigger: {
      trigger: heroSection.value,
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
}

// Lifecycle hooks
onMounted(() => {
  initAnimations()
})

// PENTING: Cleanup saat component unmount
onBeforeUnmount(() => {
  if (tl) {
    tl.kill()
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Re-init saat kembali ke halaman (untuk Nuxt)
onActivated(() => {
  nextTick(() => {
    initAnimations()
  })
})
</script>

<style scoped>
/* Custom animations jika diperlukan */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>