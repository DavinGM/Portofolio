<template>
  <section class="relative min-h-[100svh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-transparent">
    
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
      <span class="text-[30vw] font-black leading-none uppercase tracking-tighter">ENGINEER</span>
    </div>

    <div class="container max-w-7xl relative z-10 w-full flex flex-col items-center">
      
      <header class="w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-12 md:mb-20">
        <div class="brand-line flex items-center gap-3">
          <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span class="text-[16 px] font-bold tracking-[0.4em] text-zinc-500 uppercase">hay👋 im {{ SITE_DATA.profile.name }}</span>
        </div>
        <div class="brand-line hidden md:block">
          <span class="text-[10px] font-mono text-zinc-700 tracking-widest uppercase italic">// Availability: Q1 2026</span>
        </div>
      </header>

      <div class="w-full text-center lg:text-left">
        <h1 class="text-[clamp(2.8rem,11vw,9.5rem)] font-black leading-[0.85] tracking-tighter text-white uppercase italic-none">
          <div class="overflow-hidden mb-1 md:mb-0">
            <span class="line-v1 block">{{ SITE_DATA.profile.Fist_role }}</span>
          </div>
          <div class="overflow-hidden flex flex-col lg:flex-row items-center lg:items-end gap-2 md:gap-8">
            <span class="line-v2 block text-emerald-500 italic">{{ SITE_DATA.profile.Last_role }}</span>
            
            <div class="hero-stats flex gap-6 mt-4 lg:mt-0 mb-4 lg:mb-4">
              <div class="flex flex-col items-center lg:items-start">
                <span class="text-[8px] text-zinc-600 tracking-[0.3em] uppercase mb-1 font-bold">Focus</span>
                <span class="text-[10px] text-zinc-400 font-mono tracking-tighter">Nuxt Ecosystem</span>
              </div>
              <div class="flex flex-col items-center lg:items-start border-l border-white/10 pl-6">
                <span class="text-[8px] text-zinc-600 tracking-[0.3em] uppercase mb-1 font-bold">Role</span>
                <span class="text-[10px] text-zinc-400 font-mono tracking-tighter">Lead Developer</span>
              </div>
            </div>
          </div>
        </h1> 
      </div>

      <footer class="w-full grid grid-cols-1 lg:grid-cols-12 mt-12 md:mt-16 gap-10 items-end">
        <div class="lg:col-span-5 desc-text order-2 lg:order-1">
        <p class="text-sm md:text-base text-zinc-400 font-casual leading-medium text-center lg:text-left">
        Uniting <span class="text-white italic">algorithmic logic</span> with <span class="text-white">visual aesthetics</span>.
        Building web experiences that not only function, but also live.
        </p>
        </div>
        
        <div class="lg:col-start-10 lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="btn-action group relative">
            <div class="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          <NuxtLink 
                to="/about" 
                class="group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-emerald-500 shadow-xl shadow-emerald-500/10"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  class="stroke-black group-hover:stroke-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    stroke-width="2.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>

                <span class="text-[10px] font-black text-black group-hover:text-white mt-1 uppercase tracking-tighter transition-colors duration-500"> 
                  How?
                </span>
              </NuxtLink>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { SITE_DATA } from '#imports';
import { gsap } from 'gsap'




onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    // KUNCI: Kita gunakan .from() bukan .to()
    // Ini artinya elemen sudah ada di posisi akhir (tampil), 
    // lalu GSAP menariknya ke posisi awal (tersembunyi) sesaat saat JS load.
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } })

    tl.from('.brand-line', { opacity: 0, y: 20, stagger: 0.1 })
      .from('.line-v1', { y: '100%', skewY: 10 }, "-=1")
      .from('.line-v2', { y: '100%', skewY: -10 }, "-=1.3")
      .from('.hero-stats', { opacity: 0, x: -20 }, "-=1")
      .from('.desc-text', { opacity: 0, y: 30 }, "-=1.2")
      .from('.btn-action', { opacity: 0, scale: 0 }, "-=1.4")

    return () => tl.kill()
  });
});
</script>