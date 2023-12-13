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
  <main class="content-home">
    <div class="text">
      <div class="propos">
        <span>À-propos</span>
        <p>Je suis Corantyn, un créateur passionné qui évolue dans l'univers fascinant du développement. Mon parcours professionnel est une histoire tissée de lignes de code, de défis stimulants et d'une quête perpétuelle de connaissances. Ma curiosité insatiable m'a conduit à explorer les méandres des nouvelles technologies, à repousser les limites de la créativité et à embrasser chaque opportunité d'apprentissage.</p>
      </div>
      <div class="comp">
        <span>Mes Compétences</span>
        <div class="parent">
          <div class="div1 item">
            <img src="../assets/img/HTML.svg">
            <span>HTML</span>
          </div>
          <div class="div2 item">
            <img src="../assets/img/css.svg">
            <span>CSS</span>
          </div>
          <div class="div3 item">
            <img src="../assets/img/js.svg">
            <span>JavaScript</span>
          </div>
          <div class="div4 item">
            <img src="../assets/img/react.svg">
            <span>ReactJS</span>
          </div>
          <div class="div5 item">
            <img src="../assets/img/nodejs.svg">
            <span>NodeJS</span>
          </div>
          <div class="div6 item">
            <img src="../assets/img/figma.svg">
            <span>Figma</span>
          </div>
          <div class="div7 item">
            <img src="../assets/img/vue.svg">
            <span>Vue.js</span>
          </div>
          <div class="div8 item">
            <img src="../assets/img/phpstorm.svg">
            <span>PhpStorm</span>
          </div>
          <div class="div9 item">
            <img src="../assets/img/git.svg">
            <span>Git</span>
          </div>
          <div class="div10 item">
            <img src="../assets/img/npm.svg">
            <span>NPM</span>
          </div>
        </div>
      </div>
    </div>
    <div class="parent2">
      <a class="div1 item">
        <img src="../assets/img/portfolio.png">
        <div class="text2">
          <span>Portfolio</span>
          <p>Mon portfolio</p>
        </div>
      </a>
      <a class="div2 item" href="https://github.com/BroLegacy/TarkovToolkit" target="_blank">
        <img src="../assets/img/tarkov.png">
        <div class="text2">
          <span>TarkovToolkit</span>
          <p>Une application d'aide pour Tarkov</p>
        </div>
      </a>
      <a class="div3 item" href="https://github.com/BroLegacy/framwork" target="_blank">
        <img src="../assets/img/framework.png">
        <div class="text2">
          <span>Framework</span>
          <p>Un simple framwork php</p>
        </div>
      </a>
    </div>
    <div class="btn">
      <router-link to="/projets">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="black"/>
        </svg>
        Mes projets
      </router-link>
      <router-link to="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="black"/>
        </svg>
        Contactez-moi
      </router-link>
    </div>
  </main>
</template>