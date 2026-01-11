<template>
  <section 
    ref="sectionRef"
    class="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-4 select-none"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-emerald-500/10 blur-[150px] rounded-full"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center w-full max-w-full">
      
      <p class="text-emerald-500 font-mono tracking-[0.4em] mb-4 text-xs md:text-sm uppercase italic opacity-90">
        Have a project in mind?
      </p>

      <div class="relative perspective-2000 w-full flex justify-center">
        <h2 
          ref="mainTitle" 
          class="lets-talk-text font-black uppercase whitespace-nowrap cursor-pointer transition-colors duration-500"
        >
          Let's Talk
        </h2>
      </div>

      <div class="flex flex-wrap justify-center gap-8 md:gap-24 mt-24">
        <div 
          v-for="link in SITE_DATA.socials" 
          :key="link.name"
          class="magnetic-social"
        >
          <a 
            :href="link.url"
            target="_blank"
            class="group flex flex-col items-center text-zinc-500 hover:text-emerald-400 transition-colors duration-500"
          >
            <span class="text-[10px] font-mono mb-2 text-emerald-500/30 group-hover:text-emerald-500 tracking-widest">
              {{ link.name.toUpperCase() }}
            </span>
            <span class="text-xl md:text-3xl font-bold tracking-tighter">
              {{ link.name }}
            </span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const sectionRef = ref(null)
const mainTitle = ref(null)


onMounted(() => {
  const handleMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    // Hitung offset dari tengah layar
    const xPos = (clientX / innerWidth) - 0.5
    const yPos = (clientY / innerHeight) - 0.5

    // Animasi Teks Utama mengikuti kursor dengan jangkauan luas
    gsap.to(mainTitle.value, {
      x: xPos * 200, // Pergerakan horizontal lebih jauh
      y: yPos * 120, // Pergerakan vertikal
      rotateY: xPos * 15, // Efek rotasi 3D halus
      rotateX: -yPos * 10,
      skewX: xPos * 5,
      duration: 1.5,
      ease: "power3.out"
    })
  }

  const handleLeave = () => {
    gsap.to(mainTitle.value, {
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      skewX: 0,
      duration: 2,
      ease: "elastic.out(1, 0.3)"
    })
  }

  sectionRef.value.addEventListener('mousemove', handleMove)
  sectionRef.value.addEventListener('mouseleave', handleLeave)

  // --- Magnetic Socials ---
  const socialItems = document.querySelectorAll('.magnetic-social')
  socialItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = item.getBoundingClientRect()
      const x = (clientX - (left + width / 2)) * 0.7
      const y = (clientY - (top + height / 2)) * 0.7

      gsap.to(item, {
        x: x,
        y: y,
        scale: 1.15,
        duration: 0.6,
        ease: "power2.out"
      })
    })

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      })
    })
  })
})
</script>

<style scoped>
.lets-talk-text {
  /* Teks Sejajar & Sangat Besar */
  font-size: clamp(4rem, 16vw, 18rem);
  color: white;
  letter-spacing: -0.04em;
  /* Mencegah teks turun ke bawah */
  display: inline-block;
  will-change: transform;
}

.lets-talk-text:hover {
  color: #10b981; /* Emerald 500 */
}

.perspective-2000 {
  perspective: 2000px;
}

.magnetic-social {
  display: inline-block;
}

/* Memastikan teks tidak overflow di layar sangat kecil */
@media (max-width: 640px) {
  .lets-talk-text {
    font-size: 14vw;
  }
}
</style>