<script>
export default {
  props: ['title', 'sub']
};
</script>

<template>
  <div class="top">
    <div class="title">
      <h1>{{ title }}</h1>
      <h2>{{ sub }}</h2>
    </div>
  </div>
  <main class="content-contact">
    <h1>Contact</h1>
  </main>
</template>