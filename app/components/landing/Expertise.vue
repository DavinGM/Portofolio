<template>
  <section id="expertise" class="relative py-24 md:py-44 px-6 overflow-hidden bg-black">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto max-w-7xl relative z-10">
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-[1px] bg-emerald-500"></div>
            <span class="text-[10px] font-bold tracking-[0.4em] text-emerald-500 uppercase">Expertise</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            SOLUTIONS <br> <span class="text-zinc-800 italic">BY DESIGN.</span>
          </h2>
        </div>
        <p class="max-w-xs text-zinc-500 text-sm leading-relaxed font-medium">
          Combining technical excellence with visual aesthetics to create unforgettable digital products.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, i) in expertiseData" 
          :key="i"
          class="expertise-card group relative p-10 md:p-14 rounded-[2.5rem] border border-white/5 bg-zinc-950/20 backdrop-blur-md transition-all duration-700 hover:border-emerald-500/40 hover:-translate-y-2 flex flex-col justify-between min-h-[450px]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]"></div>

          <div class="relative z-10 flex justify-between items-start">
            <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-700 group-hover:rotate-[10deg]">
              <svg viewBox="0 0 24 24" class="w-7 h-7 stroke-emerald-500 group-hover:stroke-black transition-colors" fill="none" stroke-width="1.5">
                <path :d="item.iconPath" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <span class="text-[10px] font-mono text-zinc-700 group-hover:text-emerald-500/50 transition-colors uppercase tracking-widest">
              Level_0{{ i + 1 }}
            </span>
          </div>

          <div class="relative z-10 mt-12">
            <h3 class="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-emerald-500 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
              {{ item.desc }}
            </p>
          </div>

          <div class="relative z-10 mt-10 pt-8 border-t border-white/5 flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-[9px] text-zinc-600 uppercase font-bold tracking-widest mb-1 italic">Focus Stack</span>
              <span class="text-xs text-white font-mono">{{ item.stack }}</span>
            </div>
            <div class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="stroke-emerald-500">
                 <path d="M7 17L17 7M17 7H7M17 7V17" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const expertiseData = SITE_expertiseData


let ctx;
onMounted(() => {
  requestAnimationFrame(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.refresh();
      gsap.from('.expertise-card', {
        scrollTrigger: {
          trigger: '#expertise',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: 'expo.out',
        clearProps: 'all'
      });
    });
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>