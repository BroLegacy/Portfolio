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
  <main class="content-about">
    <div class="text">
      <div>
        <span>Mon Histoire</span>
        <p>Chaque parcours professionnel est une aventure unique, façonnée par des expériences, des défis et des moments marquants. Voici un aperçu de mon voyage jusqu'à aujourd'hui.<br><br>

          Mon histoire débute avec une passion précoce pour le développement. Dès le début, j'ai ressenti une connexion profonde avec l’informatique. Mes premiers pas dans le monde professionnel m'ont permis de découvrir l'essence du développement, forgeant ainsi les fondations de mon engagement futur.<br><br>

          Au fil des ans, j'ai eu le privilège d'apprendre aux côtés des intervenant de mon école (Webstart) et mes collègues. Ces expériences m'ont non seulement permis d'acquérir des compétences techniques approfondies, mais aussi de développer une compréhension plus large de mon domaine et de ses enjeux.<br><br>

          Aucun parcours n'est complet sans son lot de défis. J'ai rencontré des obstacles qui m'ont poussé à repousser mes limites, à affiner mes compétences et à développer une résilience face à l'adversité. Chaque défi a été une opportunité d'apprentissage, contribuant ainsi à ma croissance professionnelle et personnelle.</p>
      </div>
      <div>
        <span>Mes Hobbies et intérêts</span>
        <p>
          Bien au-delà de mon engagement professionnel, ma vie est ponctuée par des passions qui nourrissent ma créativité et stimulent ma curiosité. Découvrez un peu plus sur les aspects qui alimentent mon énergie en dehors du monde professionnel.<br><br>

          Mon amour pour l'automobile va bien au-delà de simples trajets d'un point A à un point B. Chaque voiture est une œuvre d'art mécanique, une fusion de design et de performance qui m'inspire au quotidien. Que ce soit en explorant les dernières innovations de l'industrie automobile ou en participant à des événements dédiés, je trouve une véritable source d'inspiration dans le monde des moteurs rugissants et des lignes élégantes.<br><br>

          Véritable fervent de la technologie, je suis constamment à l'affût des dernières avancées qui transforment notre manière de vivre et de travailler. De l'intelligence artificielle à la réalité virtuelle, chaque nouvelle innovation suscite mon enthousiasme et alimente ma passion pour comprendre comment la technologie peut résoudre des problèmes complexes et ouvrir de nouvelles perspectives.<br><br>

          Au fil des années, j'ai eu le privilège de fusionner mes intérêts en travaillant sur des projets passionnants au croisement de l'automobile et de la technologie. De la conception de systèmes embarqués innovants à l'exploration de solutions de mobilité intelligente, chaque opportunité de marier mes passions a été une aventure exaltante.<br><br>
          Explorez cette section pour en apprendre davantage sur la manière dont mes passions influencent mon approche professionnelle et sur les projets uniques où l'automobile et la technologie se rencontrent pour créer quelque chose d'extraordinaire.
        </p>
      </div>
    </div>
    <router-link to="/contact">
      Contactez-moi
    </router-link>
  </main>
</template>