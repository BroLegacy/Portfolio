<script setup>
import { onMounted, onUnmounted } from 'vue';
import ParticlesBackground from "./ParticlesBackground.vue";
import { useMeta } from 'vue-meta'; // <-- Ajout pour vue-meta

// --- Props ---
defineProps({
  pageTitle: {
    type: String,
    default: "À Propos"
  },
  pageDescription: {
    type: String,
    default: "Découvrez mon parcours"
  }
});

// --- Configuration des meta tags pour cette page ---
useMeta(() => ({
  title: props.pageTitle,
  description: props.pageDescription,
  // Open Graph et Twitter Cards peuvent être ajoutés ici aussi si vous le souhaitez
}));

// --- Animations au défilement ---
let observer;

onMounted(() => {
  // Configurer l'Intersection Observer
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
  // Nettoyer l'observer pour éviter les fuites de mémoire
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <!-- SECTION HERO -->
  <div class="top">
    <particles-background/>
    <div class="title">
      <h1>{{ pageTitle }}</h1> <!-- Utilisation de pageTitle -->
      <h2>{{ pageDescription }}</h2>
    </div>
  </div>

  <main class="content-about">
    <!-- SECTION HISTOIRE -->
    <section class="story-section animate-on-scroll">
      <div class="story-image">
        <img src="/pdp.jpg" alt="Photo de Corantyn Vignon, développeur web freelance"> <!-- Alt text amélioré -->
      </div>
      <div class="story-text">
        <span class="section-subtitle">Mon Histoire</span>
        <h3 class="section-title">De la passion du code à la création d'expériences digitales.</h3>
        <p>
          Mon parcours est une aventure tissée de lignes de code et d'une curiosité insatiable. Dès mes débuts, j'ai été fasciné par la capacité du développement à transformer une simple idée en une solution fonctionnelle et élégante. En tant que <strong>développeur web freelance</strong>, je m'engage à créer des <strong>sites internet</strong> et des <strong>applications web</strong> qui répondent précisément aux besoins de mes clients.
        </p>
        <p>
          Chaque projet est pour moi une nouvelle énigme à résoudre, une opportunité d'apprendre et de repousser les limites de la créativité pour construire des interfaces intuitives et performantes. Je suis fier d'accompagner les entreprises de <strong>Chauny, Saint-Quentin, Compiègne</strong> et leurs environs dans leur transformation digitale.
        </p>
      </div>
    </section>

    <!-- SECTION TIMELINE PARCOURS -->
    <section class="timeline-section animate-on-scroll">
      <span class="section-subtitle">Mon Parcours</span>
      <h3 class="section-title">Les étapes clés de mon aventure de développeur web.</h3>
      <div class="timeline">
        <!-- Item 1 -->
        <div class="timeline-item">
          <div class="timeline-point">
            <h4>Formation Développeur Full-Stack & Mobile</h4>
            <span>Webstart, Paris (2023)</span>
          </div>
          <div class="timeline-content">
            <p>Un cursus intensif qui m'a apporté une double compétence en <strong>développement web</strong> et mobile, me permettant de concevoir des solutions complètes et multi-plateformes.</p>
          </div>
        </div>
        <!-- Item 2 -->
        <div class="timeline-item">
          <div class="timeline-point">
            <h4>Alternance chez Bobochic</h4>
            <span>Développeur Front-End, Paris (2022 - 2023)</span>
          </div>
          <div class="timeline-content">
            <p>Une expérience formatrice au cœur d'un acteur majeur de l'e-commerce. J'ai pu y développer des compétences solides en intégration et en création d'interfaces utilisateur réactives pour des <strong>sites e-commerce</strong>.</p>
          </div>
        </div>
        <!-- Item 3 -->
        <div class="timeline-item">
          <div class="timeline-point">
            <h4>Feid</h4>
            <span>Développeur Freelance (2023 - Présent)</span>
          </div>
          <div class="timeline-content">
            <p>Je mets aujourd'hui mon expertise au service de mes clients pour les accompagner dans la <strong>création de leurs outils digitaux</strong>, de la maquette à la mise en production, notamment pour la <strong>création de sites web à Chauny, Saint-Quentin, Compiègne</strong>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION HOBBIES -->
    <section class="hobbies-section animate-on-scroll">
      <span class="section-subtitle">Au-delà du code</span>
      <h3 class="section-title">Mes centres d'intérêt.</h3>
      <div class="hobbies-grid">
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16.5V14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.5"/><path d="M14 14h2a2 2 0 0 1 2 2v2.5"/><path d="M6 16.5H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.5"/><path d="M20 14.5V6a2 2 0 0 0-2-2h-1.5"/><circle cx="12" cy="14" r="2"/><path d="M12 12V6.5"/><path d="M12 4.5V2"/><path d="M12 22v-2.5"/></svg>
          </div>
          <h4>Automobile</h4>
          <p>Passionné par l'ingénierie et le design, je vois chaque voiture comme une œuvre d'art mécanique qui allie performance et esthétique.</p>
        </div>
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          </div>
          <h4>Technologie</h4>
          <p>Toujours à l'affût des dernières innovations, de l'IA à la VR, pour comprendre comment elles peuvent résoudre des problèmes complexes et inspirer le <strong>développement web</strong>.</p>
        </div>
        <div class="hobby-card">
          <div class="hobby-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 13-6-6-6 6h12v6h-12v-6Z"/><path d="m18 13-6-6-6 6"/></svg>
          </div>
          <h4>Jeux Vidéo</h4>
          <p>Un univers qui combine narration, design interactif et défis techniques. Une source d'inspiration inépuisable pour la gamification et l'UX dans la <strong>conception de sites web</strong>.</p>
        </div>
      </div>
    </section>

    <!-- BOUTON CTA -->
    <div class="cta-button-container animate-on-scroll">
      <router-link to="/contact" class="btn-main">
        Discutons de votre projet de site web
      </router-link>
    </div>
  </main>
</template>

<style scoped lang="scss">
// --- VARIABLES DE COULEUR ---
$primary-color: #000000;
$secondary-color: #FFFFFF;
$accent-color: #4A90E2;
$text-color: #333;
$light-gray: #f8f9fa;
$border-color: #e9ecef;

// --- STYLES GÉNÉRAUX ---
.content-about {
  max-width: 1100px;
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
  font-size: clamp(2.5rem, 6vw, 3rem); // Typographie fluide
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

// --- SECTION HISTOIRE ---
.story-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
  padding: 120px 0;

  .story-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .story-text p {
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    line-height: 1.8;
    color: $text-color;
    margin-bottom: 20px;
  }
}

// --- SECTION TIMELINE ---
.timeline-section {
  padding: 100px 0;

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 40px auto 0 auto;
    padding-left: 40px;

    &::before {
      content: '';
      position: absolute;
      left: 12px;
      top: 10px;
      bottom: 10px;
      width: 2px;
      background-color: $border-color;
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 50px;

    &::before {
      content: '';
      position: absolute;
      left: -37px;
      top: 8px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: $secondary-color;
      border: 3px solid $accent-color;
    }
  }

  .timeline-point {
    margin-bottom: 10px;
    h4 {
      font-family: 'League Gothic', sans-serif;
      font-size: 24px;
      color: $primary-color;
      margin: 0;
    }
    span {
      font-family: 'League Spartan', sans-serif;
      font-size: 14px;
      color: #777;
      font-weight: 600;
    }
  }

  .timeline-content p {
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: $text-color;
  }
}

// --- SECTION HOBBIES ---
.hobbies-section {
  padding: 100px 0;
  text-align: center;

  .hobbies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
  }

  .hobby-card {
    background: $secondary-color;
    border: 1px solid $border-color;
    border-radius: 10px;
    padding: 40px 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    }
  }

  .hobby-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: lighten($accent-color, 35%);
    margin-bottom: 20px;
    svg {
      width: 28px;
      height: 28px;
      stroke: $accent-color;
    }
  }

  h4 {
    font-family: 'League Gothic', sans-serif;
    font-size: 28px;
    color: $primary-color;
    margin-bottom: 10px;
  }

  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: $text-color;
  }
}

// --- BOUTON CTA ---
.cta-button-container {
  text-align: center;
  padding: 100px 0;
}

// --- RESPONSIVE ---
@media (max-width: 992px) {
  .story-section {
    grid-template-columns: 1fr;
    text-align: left; // Texte aligné à gauche pour une meilleure lisibilité
    .story-image {
      max-width: 400px; // Image un peu plus grande sur tablette
      margin: 0 auto 40px auto;
    }
  }

  .hobbies-grid {
    grid-template-columns: 1fr 1fr; // Passage à 2 colonnes sur tablette
  }
}

@media (max-width: 768px) {
  .story-section, .timeline-section, .hobbies-section, .cta-button-container {
    padding: 80px 0; // Espacements verticaux réduits sur mobile
  }

  .timeline {
    padding-left: 30px;
    &::before {
      left: 5px;
    }
    .timeline-item::before {
      left: -32px;
    }
  }

  .hobbies-grid {
    grid-template-columns: 1fr !important; // 1 colonne sur mobile
  }
}
</style>