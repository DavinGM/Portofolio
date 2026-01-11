<template>
  <section id="work" class="relative py-32 md:py-52 bg-black overflow-hidden">
    <div class="container mx-auto px-6 relative z-20">
      
      <div class="absolute -top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h2 class="text-[20vw] font-black text-white/[0.03] uppercase leading-none italic tracking-tighter">
          Selected_Works
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
        
        <div v-for="(project, i) in SITE_DATA.projects_featured" :key="i"
          :class="[
            'project-node relative group',
            i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-32'
          ]"
        >
          <div class="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/5] md:aspect-auto md:h-[600px] bg-zinc-900">
            <img 
              :src="project.image" 
              class="project-img w-full h-full object-cover scale-110 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              alt="Project Showcase"
            >
            
            <div class="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <span class="text-[10px] font-mono text-emerald-500 tracking-[0.4em] uppercase">{{ project.year }}</span>
                  <div class="h-[1px] w-8 bg-emerald-500/50"></div>
                </div>
                <h3 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                  {{ project.title }}
                </h3>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1 italic">/ Project Type</p>
              <h4 class="text-white text-sm font-bold uppercase tracking-tight">{{ project.category }}</h4>
            </div>
            <div class="flex gap-2">
              <span v-for="tag in project.tech" :key="tag" 
                class="text-[8px] font-mono px-2 py-1 border border-white/10 text-zinc-500 uppercase">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="fixed bottom-10 right-10 z-50 pointer-events-none hidden md:block">
      <div class="px-4 py-2 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-full flex items-center gap-3">
        <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        <span class="text-[8px] font-mono text-emerald-500 uppercase tracking-widest italic">Curated_Selection_Active</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



let ctx;

onMounted(() => {
  requestAnimationFrame(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.refresh();

      // Individual Project Animation
      gsap.utils.toArray('.project-node').forEach((node, i) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: 'top 90%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          y: i % 2 === 0 ? 50 : 150, // Ritme asimetris (Kiri-Kanan beda tinggi)
          opacity: 0,
          duration: 1.5,
          ease: 'power4.out'
        });

        // Parallax Effect on Images
        const img = node.querySelector('.project-img');
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: node,
            scrub: true,
          }
        });
      });
    });
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>