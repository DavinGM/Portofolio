<template>
  <div class="cursor-wrapper">
    <!-- Cursor Dot -->
    <div
      ref="cursorDot"
      class="cursor-dot"
      :class="{ 'is-hovering': isHovering }"
    />

    <!-- Spiral Rings -->
    <div
      ref="cursorSpiral"
      class="cursor-spiral"
      :class="{ 'is-hovering': isHovering }"
    >
      <div class="spiral-ring ring-1"></div>
      <div class="spiral-ring ring-2"></div>
      <div class="spiral-ring ring-3"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const cursorDot = ref(null)
const cursorSpiral = ref(null)
const isHovering = ref(false)

let mouseMoveHandler, hoverHandlers

const updateCursor = (e) => {
  // Animate cursor dot (faster)
  gsap.to(cursorDot.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out'
  })
  
  // Animate spiral (with delay for smooth effect)
  gsap.to(cursorSpiral.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: 'power2.out'
  })
}

const addHoverListeners = () => {
  const interactiveElements = document.querySelectorAll(
    'a, button, input, textarea, select, [role="button"], .hoverable, [onclick]'
  )
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => { isHovering.value = true })
    el.addEventListener('mouseleave', () => { isHovering.value = false })
  })
}

onMounted(() => {
  // Set initial position
  gsap.set([cursorDot.value, cursorSpiral.value], { 
    xPercent: -50, 
    yPercent: -50 
  })
  
  mouseMoveHandler = updateCursor
  
  document.addEventListener('mousemove', mouseMoveHandler)
  
  // Add hover listeners
  setTimeout(addHoverListeners, 500)
  
  // Hide default cursor
  document.body.style.cursor = 'none'
  
  // Add global cursor none style
  const style = document.createElement('style')
  style.innerHTML = '* { cursor: none !important; }'
  document.head.appendChild(style)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.body.style.cursor = 'auto'
})
</script>

<style scoped>
.cursor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10001;
  transition: background 0.3s ease, transform 0.3s ease;
}

.cursor-dot.is-hovering {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.5);
}

.cursor-spiral {
  position: fixed;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 10000;
}

.spiral-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ring-1 {
  width: 30px;
  height: 30px;
  animation: spiral-rotate-1 3s linear infinite;
}

.ring-2 {
  width: 45px;
  height: 45px;
  animation: spiral-rotate-2 4s linear infinite reverse;
}

.ring-3 {
  width: 60px;
  height: 60px;
  animation: spiral-rotate-3 5s linear infinite;
}

.cursor-spiral.is-hovering .spiral-ring {
  border-color: rgba(255, 255, 255, 0.4);
}

.cursor-spiral.is-hovering .ring-1 {
  width: 40px;
  height: 40px;
  border-width: 3px;
}

.cursor-spiral.is-hovering .ring-2 {
  width: 60px;
  height: 60px;
  border-width: 2px;
}

.cursor-spiral.is-hovering .ring-3 {
  width: 80px;
  height: 80px;
  border-width: 1px;
}

@keyframes spiral-rotate-1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spiral-rotate-2 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spiral-rotate-3 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Responsive - Hide on mobile/tablet */
@media (max-width: 1024px) {
  .cursor-wrapper {
    display: none;
  }
}
</style>