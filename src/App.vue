<script setup>
import Footer from './components/Footer.vue';
import Pointer from './components/Pointer.vue';
import { ref, onMounted } from 'vue';

const isPageLoaded = ref(false);
const welcomeMessage = ref("Corantyn");
const subMessage = ref("Vous souhaite la bienvenue !");
const displayedSubMessage = ref("");

const writeSubMessage = (message) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < message.length) {
      displayedSubMessage.value += message[index++];
    } else {
      clearInterval(interval);
    }
  }, 75); // Délai entre chaque lettre
};

onMounted(() => {
  setTimeout(() => {
    writeSubMessage(subMessage.value); // Commencer à écrire le sous-message
    setTimeout(() => {
      isPageLoaded.value = true; // Affiche la page après le message
    }, subMessage.value.length * 75 + 1000); // Délai pour laisser le sous-message s'afficher avant d'afficher la page
  }, 500); // Délai avant de commencer l'animation
});
</script>

<template>
  <!-- Animation de transition avec <transition> -->
  <transition name="fade-slide">
    <!-- Affiche le texte de bienvenue avant le contenu principal -->
    <div v-if="!isPageLoaded" class="welcome-message">
      <h1>{{ welcomeMessage }}</h1>
      <h2>{{ displayedSubMessage }}</h2>
    </div>
  </transition>
  <transition name="fade-slide">
    <!-- Cette div s'affiche seulement après le chargement de la page -->
    <div v-if="isPageLoaded" id="app" class="page-container">
      <router-view />
      <Footer />
    </div>
  </transition>
</template>

<style scoped>
/* Style pour le message de bienvenue */
.welcome-message {
  font-family: League Gothic, sans-serif;
  position: fixed;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrer le texte */
  color: black; /* Couleur du texte */
  font-size: 96px; /* Taille de la police */
  z-index: 1000; /* Au-dessus de tout le reste */
  text-align: center; /* Centre le texte */
  -webkit-user-select: none; /* Pour les navigateurs WebKit */
  -moz-user-select: none; /* Pour Firefox */
  -ms-user-select: none; /* Pour Internet Explorer */
  user-select: none; /* Pour les autres navigateurs */
  h2{
    font-family: League Spartan, sans-serif;
    font-size: 32px;
    letter-spacing: 11.52px;
  }
}

/* Animation d'entrée pour le message de bienvenue */
.fade-slide-enter-active {
  transition: opacity 1s ease, transform 1s ease; /* Définition des animations */
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px); /* Départ de l'animation (invisible et en haut) */
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0); /* Arrivée de l'animation (visible et en place) */
}

.fade-slide-leave-active {
  opacity: 1;
  transition: opacity 1s ease, transform 1s ease; /* Animation de sortie */
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Effet inverse lors de la sortie (en bas) */
}

/* Animation d'entrée pour la page principale */
.fade-slide-enter-active {
  transition: opacity 1s ease, transform 1s ease; /* Définition des animations */
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(50px); /* Départ de l'animation (invisible et en bas) */
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0); /* Arrivée de l'animation (visible et en place) */
}

.fade-slide-leave-active {
  opacity: 1;
  transition: opacity 1s ease, transform 1s ease; /* Animation de sortie */
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(50px); /* Effet inverse lors de la sortie */
}
</style>
