<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ParticlesBackground from "./ParticlesBackground.vue";

// --- Props ---
defineProps(['title', 'sub']);

// --- Données des projets ---
const projects = ref([
  {
    id: 1,
    title: 'Task Force Cerberus',
    category: 'Développement Web',
    description: 'Site complet pour une association d\'airsoft, avec gestion des parties, inscriptions en ligne et panel d\'administration.',
    imageUrl: '/tfc.png',
    link: 'https://sweet-paletas-024f85.netlify.app/',
    technologies: ['Vue.js', 'Supabase', 'SCSS']
  },
]);

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

  <main class="content-projets">
    <!-- SECTION GRILLE DES PROJETS -->
    <section class="projects-grid-section animate-on-scroll">
      <div class="projects-grid">
        <a
            v-for="project in projects"
            :key="project.id"
            class="project-card"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
        >
          <div class="project-image">
            <img :src="project.imageUrl" :alt="`Image du projet ${project.title}`">
            <div class="image-overlay"></div>
          </div>
          <div class="project-info">
            <div class="project-header">
              <h4>{{ project.title }}</h4>
              <span class="project-category">{{ project.category }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="project-footer">
              <div class="technologies">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
              <span class="project-link">Voir le projet &rarr;</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- SECTION CALL TO ACTION -->
    <section class="cta-section animate-on-scroll">
      <div class="cta-content">
        <h3>Une idée ? Un projet ?</h3>
        <p>Je suis toujours prêt à relever de nouveaux défis. Contactez-moi pour que nous puissions donner vie à votre vision.</p>
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
$accent-color: #4A90E2;
$text-color: #333;
$light-gray: #f8f9fa;
$border-color: #e9ecef;

// --- STYLES GÉNÉRAUX ---
.content-projets {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
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

// --- GRILLE DES PROJETS ---
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background: $secondary-color;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: $text-color;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;

  .project-image {
    position: relative;
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
  }

  .project-info {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    h4 {
      font-family: 'League Gothic', sans-serif;
      font-size: 28px;
      margin: 0;
    }

    .project-category {
      font-family: 'League Spartan', sans-serif;
      font-size: 12px;
      font-weight: 700;
      background-color: $light-gray;
      color: $text-color;
      padding: 4px 8px;
      border-radius: 5px;
      white-space: nowrap;
    }
  }

  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .project-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tech-tag {
      font-family: 'League Spartan', sans-serif;
      font-size: 12px;
      font-weight: 600;
      background-color: lighten($accent-color, 35%);
      color: darken($accent-color, 10%);
      padding: 3px 8px;
      border-radius: 5px;
    }
  }

  .project-link {
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    color: $accent-color;
    transition: color 0.3s ease;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    .project-image img {
      transform: scale(1.05);
    }
    .project-image .image-overlay {
      opacity: 1;
    }
    .project-link {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

// --- SECTION CTA ---
.cta-section {
  background: $light-gray;
  border-radius: 15px;
  padding: 80px 40px;
  text-align: center;
  margin-top: 100px;

  h3 {
    font-family: 'League Gothic', sans-serif;
    font-size: 42px;
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
@media (max-width: 768px) {
  .content-projets {
    padding: 60px 20px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .cta-section {
    padding: 60px 20px;
    h3 {
      font-size: 36px;
    }
  }
}
</style>