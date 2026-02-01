<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ParticlesBackground from "./ParticlesBackground.vue";
import { useMeta } from 'vue-meta'; // <-- Ajout pour vue-meta

// --- Props ---
// J'ai modifié les props pour qu'elles soient plus descriptives pour le SEO
defineProps({
  pageTitle: {
    type: String,
    default: "Corantyn"
  },
  pageDescription: {
    type: String,
    default: "Création de sites web sur mesure, refonte et développement d'applications web. Expert en Vue.js, React, Node.js. Contactez-moi pour votre projet à Chauny, Saint-Quentin, Compiègne et environs."
  }
});

// --- Configuration des meta tags pour cette page ---
useMeta(() => ({
  title: props.pageTitle,
  description: props.pageDescription,
  og: {
    title: props.pageTitle,
    description: props.pageDescription,
    image: 'URL_DE_VOTRE_IMAGE_DE_PARTAGE.jpg', // Remplacez par l'URL de votre image de partage
    url: 'URL_DE_VOTRE_SITE.com', // Remplacez par l'URL de votre site
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: props.pageTitle,
    description: props.pageDescription,
    image: 'URL_DE_VOTRE_IMAGE_DE_PARTAGE.jpg' // Remplacez par l'URL de votre image de partage
  }
}));


// --- Animation du sous-titre ---
const subText = ref("Développeur Web");
const texts = [
  "Codeur Insatiable",
  "Créateur Passionné",
  "Amateur de Technologies",
  "Explorateur du Web"
];
let textIndex = 0;
let intervalId;

const changeText = () => {
  const h2 = document.querySelector('.animated-h2');
  if (h2) {
    h2.style.opacity = 0;
    setTimeout(() => {
      textIndex = (textIndex + 1) % texts.length;
      subText.value = texts[textIndex];
      h2.style.opacity = 1;
    }, 500); // Temps pour le fade-out
  }
};

// --- Animations au défilement ---
let observer;

onMounted(() => {
  // Démarrer l'animation du texte
  intervalId = setInterval(changeText, 3000);

  // Configurer l'Intersection Observer pour les animations au scroll
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // L'animation se déclenche quand 10% de l'élément est visible
      }
  );

  // Observer tous les éléments avec la classe 'animate-on-scroll'
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  // Nettoyer l'intervalle et l'observer pour éviter les fuites de mémoire
  clearInterval(intervalId);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <!-- SECTION HERO -->
  <div class="top">
    <particles-background />
    <div class="title">
      <h1>{{ pageTitle }}</h1> <!-- Utilisation de pageTitle -->
      <h2 class="animated-h2">{{ subText }}</h2>
    </div>
    <div class="scroll-indicator">
      <span>Scroll</span>
      <div class="line"></div>
    </div>
  </div>

  <main class="content-home">
    <!-- SECTION À PROPOS -->
    <section class="about-section animate-on-scroll">
      <div class="about-image">
        <img src="/pdp.jpg" alt="Photo de Corantyn Vignon, développeur web freelance"> <!-- Alt text amélioré -->
      </div>
      <div class="about-text">
        <span class="section-subtitle">À propos</span>
        <h3 class="section-title">Un créateur passionné par le digital.</h3>
        <p>
          Je suis Corantyn, un <strong>développeur web freelance</strong> basé près de <strong>Chauny</strong>, intervenant également sur <strong>Saint-Quentin</strong> et <strong>Compiègne</strong>. Mon parcours est une histoire tissée de lignes de code, de défis stimulants et d'une quête perpétuelle de connaissances pour transformer des idées en expériences interactives. Je propose des services de <strong>création de sites web sur mesure</strong>, de <strong>refonte de sites internet</strong> et de développement d'applications web performantes.
        </p>
        <p>
          Ma curiosité insatiable me pousse à explorer les nouvelles technologies, à repousser les limites de la créativité et à embrasser chaque opportunité d'apprentissage pour offrir des solutions digitales innovantes aux entreprises et professionnels de l'<strong>Aisne</strong> et de l'<strong>Oise</strong>.
        </p>
      </div>
    </section>

    <!-- SECTION COMPÉTENCES -->
    <section class="skills-section animate-on-scroll">
      <span class="section-subtitle">Compétences</span>
      <h3 class="section-title">Ma boîte à outils de développeur.</h3>
      <div class="skills-grid">
        <!-- Catégorie Frontend -->
        <div class="skill-card">
          <h4 class="skill-category">Frontend</h4>
          <div class="skill-list">
            <div class="skill-item"><img src="../assets/img/html.svg" alt="Logo HTML5"><span>HTML5</span></div>
            <div class="skill-item"><img src="../assets/img/css.svg" alt="Logo CSS3 et Sass"><span>CSS3 & Sass</span></div>
            <div class="skill-item"><img src="../assets/img/js.svg" alt="Logo JavaScript"><span>JavaScript</span></div>
            <div class="skill-item"><img src="../assets/img/vue.svg" alt="Logo Vue.js"><span>Vue.js</span></div>
            <div class="skill-item"><img src="../assets/img/react.svg" alt="Logo React"><span>React</span></div>
          </div>
        </div>
        <!-- Catégorie Backend -->
        <div class="skill-card">
          <h4 class="skill-category">Backend</h4>
          <div class="skill-list">
            <div class="skill-item"><img src="../assets/img/nodejs.svg" alt="Logo Node.js"><span>Node.js</span></div>
            <div class="skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#8892BF" d="M128 0C98.3 0 72.33 11.53 53.53 30.33c-18.8 18.8-30.33 44.77-30.33 74.47h104.8V0zm0 256c29.7 0 55.67-11.53 74.47-30.33 18.8-18.8 30.33-44.77 30.33-74.47H128v104.8zM23.2 128c0-29.7 11.53-55.67 30.33-74.47C72.33 34.73 98.3 23.2 128 23.2v104.8H23.2zm209.6 0c0 29.7-11.53 55.67-30.33 74.47-18.8 18.8-44.77 30.33-74.47 30.33V128h104.8z"></path></svg>
              <span>PHP</span>
            </div>
            <div class="skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00758F" d="M12.012 23.988c-6.625 0-11.99-5.365-11.99-11.99S5.387.008 12.012.008c6.626 0 11.99 5.365 11.99 11.99s-5.364 11.99-11.99 11.99M8.72 6.988h2.03v8.91h-2.03zM14.72 15.898h-2.03v-4.455c0-.99-.446-1.485-1.336-1.485c-.89 0-1.336.495-1.336 1.485v4.455H7.99v-4.95c0-1.336.742-2.326 2.227-2.326c.99 0 1.634.396 2.03 1.188v.99h.05v-2.03h2.03v7.128h-.604z"></path></svg>
              <span>SQL</span>
            </div>
          </div>
        </div>
        <!-- Catégorie Outils -->
        <div class="skill-card">
          <h4 class="skill-category">Outils & Design</h4>
          <div class="skill-list">
            <div class="skill-item"><img src="../assets/img/git.svg" alt="Logo Git"><span>Git</span></div>
            <div class="skill-item"><img src="../assets/img/npm.svg" alt="Logo NPM"><span>NPM</span></div>
            <div class="skill-item"><img src="../assets/img/phpstorm.svg" alt="Logo PhpStorm"><span>PhpStorm</span></div>
            <div class="skill-item"><img src="../assets/img/figma.svg" alt="Logo Figma"><span>Figma</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION PROJETS -->
    <section class="projects-section animate-on-scroll">
      <span class="section-subtitle">Portfolio</span>
      <h3 class="section-title">Quelques-uns de mes projets.</h3>
      <div class="projects-grid">
        <a class="project-card" href="https://buvettetfc.netlify.app/" target="_blank">
          <img src="/tfc.png" alt="Création site web pour association d'airsoft Task Force Cerberus"> <!-- Alt text amélioré -->
          <div class="project-info">
            <h4>Task Force Cerberus</h4>
            <p>Site complet pour une association d'airsoft, avec gestion des parties, inscriptions en ligne et panel d'administration.</p>
            <span class="project-link">Voir le projet &rarr;</span>
          </div>
        </a>
        <a class="project-card" href="https://chezlouise.netlify.app/" target="_blank">
          <img src="/louise.png" alt="Création site web pour association d'airsoft Task Force Cerberus"> <!-- Alt text amélioré -->
          <div class="project-info">
            <h4>Chez Louise</h4>
            <p>Site vitrine pour une boulangerie, avec formulaire de contact.</p>
            <span class="project-link">Voir le projet &rarr;</span>
          </div>
        </a>
      </div>
      <div class="btn-container">
        <router-link to="/projets" class="btn-main">
          Tous mes projets
        </router-link>
      </div>
    </section>

    <!-- SECTION CALL TO ACTION -->
    <section class="cta-section animate-on-scroll">
      <div class="cta-content">
        <h3>Intéressé par mon profil ?</h3>
        <p>Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de votre projet de <strong>création de site web</strong> ou de <strong>développement d'application</strong> à <strong>Chauny, Saint-Quentin, Compiègne</strong>.</p>
        <router-link to="/contact" class="btn-main">
          Contactez-moi
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
// --- VARIABLES DE COULEUR ---
$primary-color: #000000;
$secondary-color: #FFFFFF;
$accent-color: #4A90E2; // Un bleu pour contraster
$text-color: #333;
$light-gray: #f8f9fa;

// --- STYLES GÉNÉRAUX ---
.content-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-subtitle {
  font-family: 'League Spartan', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: $accent-color;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 10px;
}

.section-title {
  font-family: 'League Gothic', sans-serif;
  // Typographie fluide pour un meilleur responsive
  font-size: clamp(2.5rem, 6vw, 3rem); // min, idéal, max
  color: $primary-color;
  margin-bottom: 40px;
  line-height: 1.2;
}

.btn-main {
  display: inline-block;
  background-color: $primary-color;
  color: $secondary-color;
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: lighten($primary-color, 15%);
    transform: translateY(-3px);
  }
}

// --- ANIMATIONS AU SCROLL ---
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// --- SECTION HERO (.top) ---
.top {
  /*
    Les styles pour .title, h1 et h2 sont gérés par les styles par défaut
    du navigateur ou les styles globaux, car il n'y a plus de clamp() ici.
    Vous pouvez ajouter des tailles fixes si nécessaire, comme ci-dessous.
  */
  .title {
    h1 {
      // font-size: 72px; /* Exemple de taille fixe */
    }
    h2 {
      // font-size: 48px; /* Exemple de taille fixe */
    }
  }

  .animated-h2 {
    transition: opacity 0.5s ease-in-out;
  }
  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: $secondary-color;
    font-family: 'League Spartan', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0.7;

    .line {
      width: 1px;
      height: 40px;
      background: $secondary-color;
      margin-top: 8px;
      animation: scroll-down 2s infinite;
    }
  }
}

@keyframes scroll-down {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

// --- SECTIONS DE CONTENU ---
.about-section, .skills-section, .projects-section {
  padding: 100px 0;
}

// --- SECTION À PROPOS ---
.about-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;

  .about-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .about-text p {
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    line-height: 1.8;
    color: $text-color;
    margin-bottom: 20px;
  }
}

// --- SECTION COMPÉTENCES ---
.skills-section {
  text-align: center;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 60px;
  }

  .skill-card {
    background: $secondary-color;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 30px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    }
  }

  .skill-category {
    font-family: 'League Gothic', sans-serif;
    font-size: 28px;
    margin-bottom: 25px;
    border-bottom: 2px solid $accent-color;
    padding-bottom: 10px;
    display: inline-block;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    font-weight: 600;

    img, svg {
      width: 24px;
      height: 24px;
    }
  }
}

// --- SECTION PROJETS ---
.projects-section {
  text-align: center;

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 60px;
  }

  .project-card {
    background: $secondary-color;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    color: $text-color;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .project-info {
      padding: 25px;
      text-align: left;
    }

    h4 {
      font-family: 'League Gothic', sans-serif;
      font-size: 28px;
      margin: 0 0 10px 0;
    }

    p {
      font-family: 'League Spartan', sans-serif;
      font-size: 16px;
      margin-bottom: 20px;
    }

    .project-link {
      font-family: 'League Spartan', sans-serif;
      font-weight: 700;
      color: $accent-color;
      transition: color 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      img {
        transform: scale(1.05);
      }
    }
  }

  .btn-container {
    margin-top: 60px;
  }
}

// --- SECTION CTA ---
.cta-section {
  background: $light-gray;
  border-radius: 15px;
  padding: 80px 40px;
  text-align: center;
  margin: 100px 0;

  h3 {
    font-family: 'League Gothic', sans-serif;
    font-size: clamp(2rem, 5vw, 2.625rem);
    color: $primary-color;
    margin-bottom: 15px;
  }

  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    color: $text-color;
    max-width: 600px;
    margin: 0 auto 30px auto;
  }
}

// --- RESPONSIVE ---
@media (max-width: 992px) {
  .about-section {
    grid-template-columns: 1fr;
    text-align: center;
    .about-image {
      max-width: 300px;
      margin: 0 auto 40px auto;
    }
  }
}

@media (max-width: 768px) {
  .content-home {
    padding: 0 15px;
  }

  .about-section, .skills-section, .projects-section {
    padding: 80px 0;
  }

  .cta-section {
    padding: 60px 20px;
    margin: 80px 0;
  }

  .about-text p, .skill-item span, .project-card p {
    font-size: 16px;
  }
}
</style>