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
  <main class="content-projets">
    <div class="parent">
      <a class="div1 item">
        <img src="../assets/img/portfolio.png">
        <div class="text">
          <span>Portfolio</span>
          <p>Mon portfolio</p>
        </div>
      </a>
      <a class="div2 item" href="https://github.com/BroLegacy/TarkovToolkit" target="_blank">
        <img src="../assets/img/tarkov.png">
        <div class="text">
          <span>TarkovToolkit</span>
          <p>Une application d'aide pour Tarkov</p>
        </div>
      </a>
      <a class="div3 item" href="https://github.com/BroLegacy/framwork" target="_blank">
        <img src="../assets/img/framework.png">
        <div class="text">
          <span>Framework</span>
          <p>Un simple framwork php</p>
        </div>
      </a>
      <a class="div4 item" href="https://github.com/BroLegacy/Mealpedia" target="_blank">
        <img src="../assets/img/mealpedia.png">
        <div class="text">
          <span>Mealpedia</span>
          <p>Une application de recette</p>
        </div>
      </a>
      <a class="div5 item" href="https://github.com/BroLegacy/demineur" target="_blank">
        <img src="../assets/img/demineur.png">
        <div class="text">
          <span>Démineur</span>
          <p>Un démineur en python</p>
        </div>
      </a>
      <a class="div6 item">
        <img src="../assets/img/gify.png">
        <div class="text">
          <span>Gify</span>
          <p>Un simple site de gif</p>
        </div>
      </a>
    </div>
    <div class="btn">
      <router-link to="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="black"/>
        </svg>
        Contactez-moi
      </router-link>
    </div>
  </main>
</template>