<template>
  <div class="cursor-follower"></div>
</template>

<script setup>
document.addEventListener('mousemove', (e) => {
  const follower = document.querySelector('.cursor-follower');
  follower.style.transform = `translate(${e.clientX}px, ${e.clientY - 10}px)`;
});
</script>