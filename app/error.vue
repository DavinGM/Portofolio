<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  error: Object
})

const containerRef = ref(null)

// Fungsi Reset Error
const handleError = () => clearError({ redirect: '/' })

onMounted(() => {
  const tl = gsap.timeline()

  // Animasi masuk utama
  tl.from(".glass-card", {
    opacity: 0,
    scale: 0.95,
    y: 20,
    duration: 1,
    ease: "expo.out"
  })

  // Efek khusus Error 500 (Horror Tech)
  if (props.error.statusCode === 500) {
    // Animasi flicker background
    gsap.to(".horror-overlay", {
      opacity: 0.05,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "none"
    })
    
    // Animasi teks bergetar halus
    gsap.to(".glitch-status", {
      x: 2,
      repeat: -1,
      yoyo: true,
      duration: 0.1,
      ease: "power1.inOut"
    })
  }
})
</script>

<template>
  <div 
    class="min-h-screen bg-[#02040a] text-slate-300 font-sans flex items-center justify-center p-4 relative overflow-hidden"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#00dc82] opacity-[0.05] blur-[120px] rounded-full"></div>
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
    </div>

    <div 
      v-if="error.statusCode === 500" 
      class="horror-overlay absolute inset-0 bg-red-900 opacity-0 pointer-events-none z-10"
    ></div>

    <div class="glass-card relative z-20 w-full max-w-2xl bg-[#0d1117]/80 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
      
      <div class="flex justify-center mb-8">
        <div 
          :class="[
            'px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest border',
            error.statusCode === 500 
              ? 'bg-red-500/10 border-red-500/50 text-red-500 glitch-status' 
              : 'bg-[#00dc82]/10 border-[#00dc82]/50 text-[#00dc82]'
          ]"
        >
          STATUS_CODE: {{ error.statusCode }}
        </div>
      </div>

      <div class="text-center">
        <div v-if="error.statusCode === 500">
          <h1 class="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Critical <span class="text-red-600">Fail</span>
          </h1>
          <p class="text-slate-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The system is experiencing an internal anomaly. Data is out of sync and darkness is beginning to take over our servers.
          </p>
        </div>

        <div v-else>
          <h1 class="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Lost in <span class="text-[#00dc82]">Space</span>
          </h1>
          <p class="text-slate-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The page you are looking for has moved to another dimension or simply does not exist.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            @click="handleError"
            class="group relative px-8 py-4 bg-[#00dc82] text-[#02040a] font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,220,130,0.3)] hover:shadow-[#00dc82]/50"
          >
            Back to Base
          </button>
          
          <button 
            v-if="error.statusCode === 500"
            class="px-8 py-4 bg-transparent border border-red-900/50 text-red-500 font-semibold rounded-xl hover:bg-red-500/10 transition-colors"
          >
            REPORT ANOMALI
          </button>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-[10px] font-mono uppercase tracking-widest text-slate-600">
          System: <span class="text-slate-400">Nuxt_Core_v3</span>
        </div>
        <div class="text-[10px] font-mono uppercase tracking-widest text-slate-600">
          Error_Log: <span :class="error.statusCode === 500 ? 'text-red-700' : 'text-[#00dc82]'">#{{ Math.random().toString(36).substr(2, 9) }}</span>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
  </div>
</template>

<style scoped>
/* Animasi tambahan yang tidak bisa dicover Tailwind murni */
.glass-card {
  box-shadow: 0 0 80px -20px rgba(0, 220, 130, 0.05);
}

@keyframes pulse-red {
  0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(220, 38, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}

.glitch-status {
  animation: pulse-red 2s infinite;
}
</style>