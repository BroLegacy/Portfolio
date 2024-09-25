<template>
  <div id="particles-js" class="particles-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  particlesJS.load('particles-js', 'particles-config.json', () => {
    console.log('callback - particles.js config loaded');
  });
});
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>