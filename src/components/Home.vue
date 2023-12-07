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
        <div class="all-item">

        </div>
      </div>
    </div>
  </main>
</template>