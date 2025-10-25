<script setup>
import { useMeta } from 'vue-meta';
import ParticlesBackground from "./ParticlesBackground.vue";

// --- Configuration des meta tags pour le SEO ---
useMeta(() => ({
  title: "404 - Page non trouvée",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
  robots: 'noindex, follow' // Important: on ne veut pas que les moteurs de recherche indexent cette page
}));
</script>

<template>
  <div class="not-found-container">
    <particles-background />
    <div class="content">
      <span class="error-code">404</span>
      <h1>Page non trouvée</h1>
      <p>Oups ! Il semblerait que la page que vous cherchez se soit égarée dans le cosmos du web.</p>
      <router-link to="/" class="btn-main">
        Retourner à l'accueil
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
// --- VARIABLES DE COULEUR ---
$primary-color: #000000;
$secondary-color: #FFFFFF;
$accent-color: #4A90E2;
$text-color: #333;

.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-color: $secondary-color; // Fond clair pour cette page
}

.content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.error-code {
  font-family: 'League Gothic', sans-serif;
  font-size: clamp(10rem, 30vw, 18rem); // Taille énorme et responsive
  font-weight: 700;
  color: #f0f0f0; // Très clair, presque invisible
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  user-select: none; // Empêche la sélection du texte
}

h1 {
  font-family: 'League Gothic', sans-serif;
  font-size: clamp(3rem, 8vw, 4.5rem);
  color: $primary-color;
  margin: 0 0 15px 0;
}

p {
  font-family: 'League Spartan', sans-serif;
  font-size: 18px;
  color: $text-color;
  line-height: 1.6;
  margin: 0 auto 40px auto;
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

// Responsive
@media (max-width: 768px) {
  p {
    font-size: 16px;
  }
}
</style>