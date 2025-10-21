<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ParticlesBackground from "./ParticlesBackground.vue";

// --- Props ---
defineProps(['title', 'sub']);

// --- Logique pour la FAQ ---
const openFaq = ref(null);
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const faqs = [
  {
    question: "Qu'est-ce que l'hébergement et le nom de domaine ?",
    answer: "Le nom de domaine est l'adresse de votre site (ex: www.mon-site.fr) et l'hébergement est l'espace sur un serveur où les fichiers de votre site sont stockés. Ces deux éléments sont indispensables et leur coût annuel n'est généralement pas inclus dans la prestation de création."
  },
  {
    question: "Le site m'appartient-il à la fin de la prestation ?",
    answer: "Oui, absolument. Une fois la prestation entièrement réglée, vous êtes propriétaire de l'intégralité du code source et des fichiers de votre site. Je vous fournis tous les accès nécessaires."
  },
  {
    question: "Qu'est-ce que la maintenance inclut ?",
    answer: "La maintenance mensuelle couvre les mises à jour de sécurité, les sauvegardes régulières, la surveillance des performances et un support technique pour de petites modifications de contenu. C'est l'assurance que votre site reste performant et sécurisé dans le temps."
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer: "Oui, pour les projets plus importants, il est tout à fait possible de mettre en place un échéancier de paiement. Généralement, un acompte est demandé au début du projet, puis le solde est réparti sur une ou plusieurs mensualités."
  }
];

// --- Animations au défilement ---
let observer;
onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <!-- SECTION HERO -->
  <div class="top">
    <particles-background/>
    <div class="title">
      <h1>{{ title }}</h1>
      <h2>{{ sub }}</h2>
    </div>
  </div>

  <main class="content-tarifs">
    <!-- SECTION INTRO -->
    <section class="intro-section animate-on-scroll">
      <span class="section-subtitle">Mes Offres</span>
      <h3 class="section-title">Des solutions adaptées à chaque projet.</h3>
      <p>
        Chaque projet est unique. C'est pourquoi je vous propose des offres claires et modulables, conçues pour répondre précisément à vos besoins, que vous soyez un entrepreneur, une PME ou une association.
      </p>
    </section>

    <!-- SECTION CARTES DE PRIX -->
    <section class="pricing-section animate-on-scroll">
      <div class="pricing-grid">
        <!-- Carte 1: Single Page -->
        <div class="pricing-card">
          <div class="card-header">
            <h4>Single Page</h4>
            <p class="price">dès 500€ <span>HT</span></p>
            <p class="target">Idéal pour un lancement, un événement ou une présentation concise.</p>
          </div>
          <ul class="features-list">
            <li>✔️ 1 page unique et impactante</li>
            <li>✔️ Design personnalisé et moderne</li>
            <li>✔️ Responsive (PC, tablette, mobile)</li>
            <li>✔️ Optimisation pour le référencement (SEO)</li>
            <li>✔️ 7 jours de maintenance offerts</li>
          </ul>
          <router-link to="/contact" class="btn-secondary">Choisir cette offre</router-link>
        </div>

        <!-- Carte 2: Site Vitrine (Recommandé) -->
        <div class="pricing-card recommended">
          <div class="recommended-badge">Recommandé</div>
          <div class="card-header">
            <h4>Site Vitrine</h4>
            <p class="price">dès 900€ <span>HT</span></p>
            <p class="target">La solution parfaite pour présenter votre activité et vos services en détail.</p>
          </div>
          <ul class="features-list">
            <li>✔️ Jusqu'à 4 pages (Accueil, À propos, Services, Contact)</li>
            <li>✔️ Design sur-mesure et identité visuelle</li>
            <li>✔️ Formulaire de contact intégré</li>
            <li>✔️ Optimisation SEO avancée</li>
            <li>✔️ 15 jours de maintenance offerts</li>
          </ul>
          <router-link to="/contact" class="btn-main">Choisir cette offre</router-link>
        </div>

        <!-- Carte 3: Sur Mesure -->
        <div class="pricing-card">
          <div class="card-header">
            <h4>Sur Mesure</h4>
            <p class="price">Sur devis</p>
            <p class="target">Pour les projets complexes : e-commerce, application web, fonctionnalités spécifiques...</p>
          </div>
          <ul class="features-list">
            <li>✔️ Nombre de pages illimité</li>
            <li>✔️ Boutique et paiement en ligne</li>
            <li>✔️ Espace membre, API, etc.</li>
            <li>✔️ Stratégie SEO complète</li>
            <li>✔️ 1 mois de maintenance offert</li>
          </ul>
          <router-link to="/contact" class="btn-secondary">Demander un devis</router-link>
        </div>
      </div>
    </section>

    <!-- SECTION PROCESSUS -->
    <section class="process-section animate-on-scroll">
      <span class="section-subtitle">Ma Méthode</span>
      <h3 class="section-title">Comment se déroule un projet ?</h3>
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <h4>Découverte</h4>
          <p>Nous échangeons sur vos besoins, vos objectifs et vos attentes pour définir le cahier des charges.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h4>Conception</h4>
          <p>Je conçois les maquettes (UI/UX) de votre site pour que vous puissiez visualiser le résultat final avant le développement.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h4>Développement</h4>
          <p>Je transforme les maquettes en un site web fonctionnel, performant et optimisé pour tous les appareils.</p>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <h4>Lancement</h4>
          <p>Après votre validation, je déploie le site en ligne et vous forme à sa prise en main si nécessaire.</p>
        </div>
      </div>
    </section>

    <!-- SECTION FAQ -->
    <section class="faq-section animate-on-scroll">
      <span class="section-subtitle">Questions Fréquentes</span>
      <h3 class="section-title">Besoin de plus d'informations ?</h3>
      <div class="faq-container">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <span class="faq-icon" :class="{ 'is-open': openFaq === index }"></span>
          </button>
          <transition name="faq-answer">
            <div v-if="openFaq === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </section>
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
.content-tarifs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
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
  text-align: center;
}

.section-title {
  font-family: 'League Gothic', sans-serif;
  // Typographie fluide pour un meilleur responsive
  font-size: clamp(2.25rem, 5vw, 3rem); // min, idéal, max
  color: $primary-color;
  margin-bottom: 40px;
  line-height: 1.2;
  text-align: center;
}

.btn-main, .btn-secondary {
  display: inline-block;
  padding: 14px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

.btn-main {
  background-color: $primary-color;
  color: $secondary-color;
  border-color: $primary-color;
  &:hover {
    background-color: lighten($primary-color, 15%);
    border-color: lighten($primary-color, 15%);
    transform: translateY(-3px);
  }
}

.btn-secondary {
  background-color: transparent;
  color: $primary-color;
  border-color: $primary-color;
  &:hover {
    background-color: $primary-color;
    color: $secondary-color;
    transform: translateY(-3px);
  }
}

// --- ANIMATIONS ---
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// --- SECTION INTRO ---
.intro-section {
  padding-bottom: 60px;
  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: $text-color;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
}

// --- SECTION CARTES DE PRIX ---
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: stretch; // Aligne les cartes sur la même hauteur
}

.pricing-card {
  background: $secondary-color;
  border: 1px solid $border-color;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &.recommended {
    transform: scale(1.05);
    border: 2px solid $primary-color;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  &:not(.recommended):hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
  }

  .recommended-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: $primary-color;
    color: $secondary-color;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'League Spartan', sans-serif;
  }

  .card-header {
    text-align: center;
    margin-bottom: 30px;
    h4 {
      font-family: 'League Gothic', sans-serif;
      font-size: 32px;
      margin: 0 0 10px 0;
    }
    .price {
      font-family: 'League Gothic', sans-serif;
      font-size: 48px;
      color: $primary-color;
      margin: 0;
      line-height: 1;
      span {
        font-size: 18px;
        color: #777;
      }
    }
    .target {
      font-family: 'League Spartan', sans-serif;
      font-size: 15px;
      color: #555;
      margin-top: 15px;
      min-height: 40px;
    }
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    flex-grow: 1;
    li {
      font-family: 'League Spartan', sans-serif;
      font-size: 16px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}

// --- SECTION PROCESSUS ---
.process-section {
  padding: 120px 0;
  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 60px;
  }
  .step {
    text-align: center;
    .step-number {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: $primary-color;
      color: $secondary-color;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: 'League Gothic', sans-serif;
      font-size: 24px;
      margin-bottom: 20px;
    }
    h4 {
      font-family: 'League Gothic', sans-serif;
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      font-family: 'League Spartan', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }
  }
}

// --- SECTION FAQ ---
.faq-section {
  padding-bottom: 100px;
  .faq-container {
    max-width: 800px;
    margin: 60px auto 0 auto;
  }
  .faq-item {
    border-bottom: 1px solid $border-color;
  }
  .faq-question {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 25px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: $primary-color;
  }
  .faq-icon {
    width: 14px;
    height: 14px;
    position: relative;
    transition: transform 0.3s ease;
    flex-shrink: 0; // Empêche l'icône de se réduire
    margin-left: 15px;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 2px;
      background-color: $primary-color;
      transform: translate(-50%, -50%);
      transition: transform 0.3s ease;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
    &.is-open::after {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
  .faq-answer {
    overflow: hidden;
    transition: max-height 0.5s ease, padding 0.5s ease;
    p {
      font-family: 'League Spartan', sans-serif;
      font-size: 16px;
      line-height: 1.7;
      color: #555;
      padding: 0 0 25px 0;
      margin: 0;
    }
  }
  .faq-answer-enter-active, .faq-answer-leave-active {
    transition: all 0.4s ease;
    max-height: 200px;
  }
  .faq-answer-enter-from, .faq-answer-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
}

// --- RESPONSIVE ---
@media (max-width: 1100px) {
  .pricing-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

@media (max-width: 992px) {
  .pricing-grid {
    grid-template-columns: 1fr !important;
    gap: 40px;
  }
  .pricing-card.recommended {
    transform: scale(1);
  }
  .process-steps {
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 768px) {
  .pricing-grid {
    gap: 140px;
  }
  .content-tarifs {
    padding: 60px 20px;
  }
  .process-steps {
    grid-template-columns: 1fr !important;
    gap: 40px;
    position: relative;
    padding-left: 25px;

    // Ligne de la timeline verticale
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 25px;
      bottom: 25px;
      width: 2px;
      background-color: $border-color;
    }
  }
  .step {
    text-align: left;
    position: relative;
    padding-left: 40px;

    .step-number {
      position: absolute;
      left: -24px;
      top: 0;
      margin-bottom: 0;
    }
  }
}
</style>