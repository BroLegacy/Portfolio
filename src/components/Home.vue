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
  </main>
</template>