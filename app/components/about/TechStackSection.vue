<template>
  <div class="relative overflow-hidden">
    <!-- Section Tech Stack -->
    <section ref="techSection" class="min-h-screen py-32 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="mb-16 text-center">
          <div ref="sectionLabel" class="inline-block mb-6">
            <div class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span class="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Tech Stack</span>
            </div>
          </div>
          
          <h2 ref="sectionTitle" class="text-4xl lg:text-6xl font-bold text-white mb-6">
            Technologies I Use
          </h2>
          
          <p ref="sectionDesc" class="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tools and frameworks I work with to build modern, scalable applications
          </p>
        </div>

        <!-- Tech Grid - Vite Style (Lebih Kecil & Rapat) -->
        <div ref="techGrid" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          
          <!-- Tech Item -->
          <div 
            v-for="(tech, index) in techStack" 
            :key="index"
            :ref="el => setTechItemRef(el, index)"
            @mouseenter="handleMouseEnter(tech, index)"
            @mouseleave="handleMouseLeave"
            class="tech-item group relative aspect-square bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-900/60 overflow-visible"
          >
            <!-- Glow effect on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/5 group-hover:to-transparent transition-all duration-300 rounded-xl"></div>
            
            <!-- Icon -->
            <div class="relative z-10 transition-transform duration-300 group-hover:scale-110 mb-2">
              <Icon 
                :name="tech.icon" 
                class="w-10 h-10 sm:w-12 sm:h-12 transition-colors duration-300"
                :style="{ color: tech.color }"
              />
            </div>

            <!-- Tech Name -->
            <div class="relative z-10 text-center">
              <span class="text-[9px] sm:text-[10px] font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300">{{ tech.name }}</span>
            </div>
          </div>

        </div>

        <!-- Hover Detail Card (Fixed Position Smart) -->
        <div 
          v-show="hoveredTech"
          ref="detailCard"
          @mouseenter="isHoveringCard = true"
          @mouseleave="handleCardLeave"
          class="fixed z-[60] w-96 bg-zinc-900/98 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl shadow-emerald-500/20 opacity-0"
          :style="cardStyle"
        >
          <div v-if="hoveredTech">
            <!-- Header -->
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon 
                  :name="hoveredTech.icon" 
                  class="w-9 h-9"
                  :style="{ color: hoveredTech.color }"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-bold text-white truncate">{{ hoveredTech.name }}</h3>
                <p class="text-xs text-zinc-500 truncate">{{ hoveredTech.category }}</p>
              </div>
            </div>

            <!-- Proficiency Bar -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-zinc-400">Proficiency</span>
                <span class="text-xs font-bold text-emerald-400">{{ hoveredTech.proficiency }}%</span>
              </div>
              <div class="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  ref="proficiencyBar"
                  class="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-0"
                ></div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-sm text-zinc-400 mb-4 leading-relaxed">
              {{ hoveredTech.description }}
            </p>

            <!-- Links -->
            <div class="space-y-2">
              <!-- GitHub Link -->
              <a 
                v-if="hoveredTech.github"
                :href="hoveredTech.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-zinc-500 hover:text-emerald-400 transition-colors group/link"
              >
                <Icon name="mdi:github" class="w-4 h-4" />
                <span class="group-hover/link:underline">View on GitHub</span>
                <Icon name="mdi:arrow-top-right" class="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>

              <!-- Documentation Link -->
              <a 
                :href="hoveredTech.docs" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xs text-zinc-500 hover:text-emerald-400 transition-colors group/link"
              >
                <Icon name="mdi:book-open-variant" class="w-4 h-4" />
                <span class="group-hover/link:underline">Documentation</span>
                <Icon name="mdi:arrow-top-right" class="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>

            <!-- Arrow Indicator (Dynamic Position) -->
            <div 
              class="absolute w-4 h-4 bg-zinc-900 border border-emerald-500/30 rotate-45"
              :style="arrowStyle"
            ></div>
          </div>
        </div>

      </div>

      <!-- Background Decorations -->
      <div class="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const techSection = ref(null)
const sectionLabel = ref(null)
const sectionTitle = ref(null)
const sectionDesc = ref(null)
const techGrid = ref(null)
const detailCard = ref(null)
const proficiencyBar = ref(null)

// Tech items refs (untuk track position)
const techItemRefs = ref([])
const setTechItemRef = (el, index) => {
  if (el) techItemRefs.value[index] = el
}

// State
const hoveredTech = ref(null)
const hoveredIndex = ref(null)
const isHoveringCard = ref(false)
const cardPosition = ref({ top: 0, left: 0, arrowLeft: 0, arrowPosition: 'bottom' })

const techStack = [
  {
    name: 'Vite',
    icon: 'logos:vitejs',
    color: '#646CFF',
    category: 'Build Tool',
    proficiency: 98,
    description: 'Next-generation frontend tooling that provides an extremely fast development experience with Hot Module Replacement (HMR).',
    github: 'https://github.com/vitejs/vite',
    docs: 'https://vitejs.dev'
  },
  {
    name: 'GSAP',
    icon: 'simple-icons:greensock',
    color: '#88CE02',
    category: 'Animation Library',
    proficiency: 90,
    description: 'The industry standard for high-performance web animations, bringing UIs to life with smooth micro-interactions.',
    github: 'https://github.com/greensock/GSAP',
    docs: 'https://gsap.com'
  },
  {
    name: 'React',
    icon: 'logos:react',
    color: '#61dafb',
    category: 'Frontend Library',
    proficiency: 85,
    description: 'A JavaScript library for building component-based user interfaces with a vast and robust ecosystem.',
    github: 'https://github.com/facebook/react',
    docs: 'https://react.dev'
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    color: '#06b6d4',
    category: 'CSS Framework',
    proficiency: 95,
    description: 'A utility-first CSS framework for rapidly building custom designs directly within your markup.',
    github: 'https://github.com/tailwindlabs/tailwindcss',
    docs: 'https://tailwindcss.com'
  },
  {
    name: 'Nuxt.js',
    icon: 'logos:nuxt-icon',
    color: '#00DC82',
    category: 'Meta Framework',
    proficiency: 92,
    description: 'An intuitive Vue framework for building modern web applications with SSR, ISR, and optimized performance.',
    github: 'https://github.com/nuxt/nuxt',
    docs: 'https://nuxt.com'
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    color: '#42b883',
    category: 'Frontend Framework',
    proficiency: 95,
    description: 'A progressive framework that is highly flexible and easy to learn for building reactive web interfaces.',
    github: 'https://github.com/vuejs/core',
    docs: 'https://vuejs.org'
  },
  {
    name: 'Python',
    icon: 'logos:python',
    color: '#3776AB',
    category: 'Programming Language',
    proficiency: 80,
    description: 'A versatile, high-level language used for web development, data science, and automation with a focus on readability.',
    github: 'https://github.com/python/cpython',
    docs: 'https://www.python.org'
  },
  {
    name: 'Laravel',
    icon: 'logos:laravel',
    color: '#FF2D20',
    category: 'Backend Framework',
    proficiency: 88,
    description: 'A PHP framework for web artisans, providing expressive and elegant syntax for modern backend development.',
    github: 'https://github.com/laravel/laravel',
    docs: 'https://laravel.com'
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    color: '#3178c6',
    category: 'Programming Language',
    proficiency: 90,
    description: 'A typed superset of JavaScript that enhances scalability and minimizes bugs through static type checking.',
    github: 'https://github.com/microsoft/TypeScript',
    docs: 'https://www.typescriptlang.org'
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    color: '#F7DF1E',
    category: 'Programming Language',
    proficiency: 95,
    description: 'The primary language of the web, enabling interactive functionality across both client and server sides.',
    github: null,
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'Ubuntu',
    icon: 'logos:ubuntu',
    color: '#E95420',
    category: 'OS / Server',
    proficiency: 80,
    description: 'A popular Debian-based Linux operating system widely used for server environments and application deployment.',
    github: null,
    docs: 'https://ubuntu.com'
  },
  {
    name: 'Figma',
    icon: 'logos:figma',
    color: '#F24E1E',
    category: 'Design Tool',
    proficiency: 85,
    description: 'A collaborative cloud-based design tool for UI/UX creation, prototyping, and developer handoff.',
    github: null,
    docs: 'https://www.figma.com'
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
    color: '#4479A1',
    category: 'Database',
    proficiency: 85,
    description: 'A reliable open-source Relational Database Management System (RDBMS) for secure application data storage.',
    github: null,
    docs: 'https://www.mysql.com'
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
    color: '#2496ED',
    category: 'DevOps',
    proficiency: 75,
    description: 'Containerization technology used to package applications and dependencies for consistent cross-environment performance.',
    github: 'https://github.com/docker',
    docs: 'https://docs.docker.com'
  },
  {
    name: 'Visual Studio Code',
    icon: 'vscode-icons:file-type-vscode',
    color: '#007ACC',
    category: 'Editor',
    proficiency: 100,
    description: 'The most popular code editor with extensive extension support to accelerate development workflows.',
    github: 'https://github.com/microsoft/vscode',
    docs: 'https://code.visualstudio.com'
  },
  {
    name: 'Visual Studio IDE',
    icon: 'logos:visual-studio',
    color: '#5C2D91',
    category: 'IDE',
    proficiency: 70,
    description: 'A powerful Integrated Development Environment (IDE) for enterprise application and .NET development.',
    github: null,
    docs: 'https://visualstudio.microsoft.com'
  },
  {
    name: 'Sass',
    icon: 'logos:sass',
    color: '#CC6699',
    category: 'CSS Preprocessor',
    proficiency: 90,
    description: 'A powerful CSS extension featuring variables, nested rules, and mixins for organized styling.',
    github: 'https://github.com/sass/sass',
    docs: 'https://sass-lang.com'
  },
  {
    name: 'PHP',
    icon: 'logos:php',
    color: '#777BB4',
    category: 'Programming Language',
    proficiency: 85,
    description: 'A server-side scripting language that serves as the foundation for frameworks like Laravel and WordPress.',
    github: 'https://github.com/php/php-src',
    docs: 'https://www.php.net'
  },
  {
    name: 'GitHub',
    icon: 'logos:github-icon',
    color: '#FFFFFF',
    category: 'Version Control Host',
    proficiency: 95,
    description: 'The world’s most popular Git-based collaboration platform for hosting open-source and private projects.',
    github: 'https://github.com',
    docs: 'https://docs.github.com'
  },
  {
    name: 'GitLab',
    icon: 'logos:gitlab',
    color: '#FC6D26',
    category: 'Version Control Host',
    proficiency: 85,
    description: 'A comprehensive DevOps platform providing the entire software development lifecycle in a single application.',
    github: null,
    docs: 'https://docs.gitlab.com'
  },
  {
    name: 'Postman',
    icon: 'logos:postman-icon',
    color: '#FF6C37',
    category: 'API Testing Tool',
    proficiency: 92,
    description: 'A leading API platform for building, testing, and documenting APIs collaboratively.',
    github: null,
    docs: 'https://www.postman.com'
  }
];

// Computed styles
const cardStyle = computed(() => ({
  top: cardPosition.value.top + 'px',
  left: cardPosition.value.left + 'px',
  transform: 'translateX(-50%)'
}))

const arrowStyle = computed(() => {
  const pos = cardPosition.value.arrowPosition
  const base = {
    left: cardPosition.value.arrowLeft + 'px'
  }
  
  if (pos === 'top') {
    return {
      ...base,
      top: '-2px',
      borderTop: 'none',
      borderLeft: 'none'
    }
  } else {
    return {
      ...base,
      bottom: '-2px',
      borderBottom: 'none',
      borderRight: 'none'
    }
  }
})

// Calculate smart card position
const calculateCardPosition = (index) => {
  const element = techItemRefs.value[index]
  if (!element) return
  
  const rect = element.getBoundingClientRect()
  const cardWidth = 384 // 96 * 4 (w-96)
  const cardHeight = 400 // Approximate height
  const spacing = 20
  const arrowSize = 8
  
  // Default: card di bawah
  let top = rect.bottom + spacing
  let arrowPosition = 'top'
  
  // Jika tidak cukup ruang di bawah, taruh di atas
  if (top + cardHeight > window.innerHeight - 20) {
    top = rect.top - cardHeight - spacing
    arrowPosition = 'bottom'
  }
  
  // Center card horizontally relative to viewport
  let left = window.innerWidth / 2
  
  // Arrow position relative to card (pointing to hovered item)
  const itemCenterX = rect.left + rect.width / 2
  const cardLeft = left - cardWidth / 2
  let arrowLeft = itemCenterX - cardLeft - arrowSize
  
  // Constrain arrow to be within card bounds
  arrowLeft = Math.max(20, Math.min(arrowLeft, cardWidth - 20))
  
  cardPosition.value = {
    top,
    left,
    arrowLeft,
    arrowPosition
  }
}

// Timeout reference untuk cleanup
let hideTimeout = null

// Handle mouse enter - show card with GSAP
const handleMouseEnter = (tech, index) => {
  // Clear timeout jika ada (cancel hide animation)
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  
  // Kill semua animasi card yang sedang berjalan
  if (detailCard.value) {
    gsap.killTweensOf(detailCard.value)
  }
  if (proficiencyBar.value) {
    gsap.killTweensOf(proficiencyBar.value)
  }
  
  // Update state
  hoveredTech.value = tech
  hoveredIndex.value = index
  isHoveringCard.value = false
  
  calculateCardPosition(index)
  
  // Reset proficiency bar immediately
  if (proficiencyBar.value) {
    gsap.set(proficiencyBar.value, { width: '0%' })
  }
  
  // Animate card entrance dengan GSAP
  nextTick(() => {
    if (detailCard.value) {
      gsap.to(detailCard.value, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      
      // Animate proficiency bar
      if (proficiencyBar.value) {
        gsap.to(proficiencyBar.value, {
          width: tech.proficiency + '%',
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.05
        })
      }
    }
  })
}

// Handle mouse leave from item
const handleMouseLeave = () => {
  // Delay untuk cek apakah user pindah ke card
  hideTimeout = setTimeout(() => {
    if (!isHoveringCard.value) {
      hideCard()
    }
  }, 100)
}

// Handle mouse leave from card
const handleCardLeave = () => {
  isHoveringCard.value = false
  hideCard()
}

// Hide card function
const hideCard = () => {
  if (detailCard.value) {
    // Kill animasi yang sedang berjalan
    gsap.killTweensOf(detailCard.value)
    
    gsap.to(detailCard.value, {
      opacity: 0,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        hoveredTech.value = null
        hoveredIndex.value = null
        if (proficiencyBar.value) {
          gsap.set(proficiencyBar.value, { width: '0%' })
        }
      }
    })
  }
}

// Animation timeline
let tl = null

const initAnimations = () => {
  // Kill previous
  if (tl) tl.kill()
  ScrollTrigger.getAll().forEach(t => t.kill())

  // Set initial state
  gsap.set([sectionLabel.value, sectionTitle.value, sectionDesc.value], {
    opacity: 0,
    y: 30
  })

  const techItems = document.querySelectorAll('.tech-item')
  gsap.set(techItems, {
    opacity: 0,
    scale: 0.8,
    y: 20
  })

  // Header animations
  gsap.to(sectionLabel.value, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: techSection.value,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })

  gsap.to(sectionTitle.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: techSection.value,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })

  gsap.to(sectionDesc.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4,
    scrollTrigger: {
      trigger: techSection.value,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })

  // Stagger tech items
  gsap.to(techItems, {
    opacity: 1,
    scale: 1,
    y: 0,
    stagger: {
      amount: 0.6,
      from: 'start'
    },
    duration: 0.5,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: techGrid.value,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 100)
  
  // Recalculate on window resize
  window.addEventListener('resize', () => {
    if (hoveredIndex.value !== null) {
      calculateCardPosition(hoveredIndex.value)
    }
  })
})

onBeforeUnmount(() => {
  if (tl) tl.kill()
  ScrollTrigger.getAll().forEach(t => t.kill())
  
  // Clear timeout dan kill card animations
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
  if (detailCard.value) {
    gsap.killTweensOf(detailCard.value)
  }
  if (proficiencyBar.value) {
    gsap.killTweensOf(proficiencyBar.value)
  }
})

onActivated(() => {
  nextTick(() => {
    setTimeout(() => {
      initAnimations()
    }, 100)
  })
})
</script>

<style scoped>
/* Smooth transitions */
</style>