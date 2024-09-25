<script>
import ParticlesBackground from "./ParticlesBackground.vue";

export default {
  components: {ParticlesBackground},
  props: ['title', 'sub']
};
</script>

<template>
  <div class="top">
    <particles-background/>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="white"/>
          </svg>
          Envoyer
        </router-link>
      </div>
    </div>
  </main>
</template>