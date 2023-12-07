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
    <div class="parent">
      <div class="div1">
        <h3>Contactez-moi</h3>
      </div>
      <div class="div2 imp">
        <span>Nom</span>
        <input placeholder="Votre nom">
      </div>
      <div class="div3 imp">
        <span>Email</span>
        <input placeholder="email@example.com">
      </div>
      <div class="div4 imp">
        <span>Message</span>
        <input placeholder="Bonjour, mon nom est...">
      </div>
      <div class="div5">
        <router-link to="/contact">
          Envoyer
        </router-link>
      </div>
    </div>
  </main>
</template>