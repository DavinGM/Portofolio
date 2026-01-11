<template>
  <aside
    class="social-sidebar"
  >
    <nav class="social-nav">
      <a
        v-for="item in socials"
        :key="item.name"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link group"
        :aria-label="item.name"
      >
        <span class="social-text">
          {{ item.name }}
        </span>
      </a>
    </nav>
  </aside>
</template>

<script setup>
const socials = [
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'WhatsApp', url: 'https://wa.me/xxx' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
]
</script>

<style scoped>
/* Desktop styles - sidebar kiri */
.social-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 60;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  pointer-events: none;
}

.social-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  pointer-events: auto;
}

.social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 3rem;
}

.social-text {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.4);
  display: block;
  transform: rotate(-90deg);
  transform-origin: center;
  transition:
    color 0.3s ease,
    letter-spacing 0.3s ease,
    transform 0.3s ease;
}

.group:hover .social-text {
  color: #34d399;
  letter-spacing: 0.55em;
  transform: rotate(-90deg) translateX(2px);
}

/* Tablet styles - mulai adjust di layar medium */
@media (max-width: 1024px) {
  .social-sidebar {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .social-nav {
    gap: 4rem;
  }

  .social-text {
    font-size: 0.75rem;
  }
}

/* Mobile styles - pindah ke bawah */
@media (max-width: 768px) {
  .social-sidebar {
    left: auto;
    top: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    padding: 0;
    align-items: flex-end;
  }

  .social-nav {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0;
    padding: 1rem 1.5rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .social-link {
    height: auto;
    width: auto;
    flex: 1;
    max-width: 120px;
    padding: 0.5rem;
  }

  .social-text {
    transform: rotate(0deg);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-align: center;
  }

  .group:hover .social-text {
    transform: rotate(0deg) translateY(-2px);
    letter-spacing: 0.3em;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .social-nav {
    padding: 0.75rem 1rem;
    gap: 0;
  }

  .social-link {
    padding: 0.4rem;
  }

  .social-text {
    font-size: 0.625rem;
    letter-spacing: 0.15em;
  }

  .group:hover .social-text {
    letter-spacing: 0.25em;
  }
}
</style>