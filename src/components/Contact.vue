<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ParticlesBackground from "./ParticlesBackground.vue";
import emailjs from 'emailjs-com';
import { useMeta } from 'vue-meta'; // <-- Ajout pour vue-meta

// --- Props ---
defineProps({
  pageTitle: {
    type: String,
    default: "Contactez-moi"
  },
  pageDescription: {
    type: String,
    default: "Devis gratuit"
  }
});

// --- Configuration des meta tags et JSON-LD pour cette page ---
useMeta(() => ({
  title: props.pageTitle,
  description: props.pageDescription,
  // Open Graph et Twitter Cards peuvent être ajoutés ici aussi si vous le souhaitez
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness", // Ou "Person" si vous préférez
        "name": "Corantyn Vignon - Développeur Web Freelance",
        "image": "URL_DE_VOTRE_LOGO_OU_PHOTO.jpg", // Remplacez par l'URL de votre logo/photo
        "url": "URL_DE_VOTRE_SITE.com", // Remplacez par l'URL de votre site
        "telephone": "+33604510113",
        "email": "contact.feid@gmail.com",
        "address": {
          "@type": "PostalAddress",
          // "streetAddress": "Votre Rue et Numéro", // Optionnel si vous ne voulez pas la donner
          "addressLocality": "Chauny", // Ville principale
          "addressRegion": "Hauts-de-France",
          // "postalCode": "Votre Code Postal", // Optionnel
          "addressCountry": "FR"
        },
        "areaServed": [ // Très important pour le SEO local sans adresse physique
          { "@type": "Place", "name": "Chauny" },
          { "@type": "Place", "name": "Saint-Quentin" },
          { "@type": "Place", "name": "Compiègne" },
          { "@type": "Place", "name": "Laon" },
          { "@type": "Place", "name": "Soissons" },
          { "@type": "Place", "name": "Aisne" },
          { "@type": "Place", "name": "Oise" }
        ],
        "sameAs": [ // Liens vers vos profils sociaux
          "https://www.instagram.com/corantyn.vnsl/",
          "https://github.com/BroLegacy",
          "https://www.linkedin.com/in/corantyn-vignon/"
        ],
        "description": "Développeur web freelance spécialisé en création de sites internet et applications web sur mesure pour les entreprises de Chauny, Saint-Quentin, Compiègne et leurs environs."
      }
    }
  ]
}));

// --- State du formulaire ---
const form = ref({
  name: '',
  email: '',
  message: ''
});
const errors = ref({});
const isLoading = ref(false);
const notification = ref({
  show: false,
  message: '',
  type: '' // 'success' or 'error'
});

// --- Validation ---
const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!form.value.name) {
    errors.value.name = 'Le nom est obligatoire.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email) {
    errors.value.email = "L'email est obligatoire.";
    isValid = false;
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = "L'email n'est pas valide.";
    isValid = false;
  }

  if (!form.value.message) {
    errors.value.message = 'Le message est obligatoire.';
    isValid = false;
  }
  return isValid;
};

// --- Affichage des notifications ---
const showNotification = (message, type) => {
  notification.value = { show: true, message, type };
  setTimeout(() => {
    notification.value.show = false;
  }, 5000); // La notification disparaît après 5 secondes
};

// --- Envoi de l'email ---
const sendEmail = () => {
  if (!validateForm() || isLoading.value) return;

  isLoading.value = true;

  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message
  };

  emailjs.send(
      'service_havmreo',      // Votre Service ID
      'template_pxswsa8',     // Votre Template ID
      templateParams,
      'qLgKAfN5Y8AIGPLlv'      // Votre Public Key (User ID)
  )
      .then(() => {
        showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
        form.value = { name: '', email: '', message: '' }; // Reset form
      })
      .catch((error) => {
        showNotification("Une erreur est survenue. Veuillez réessayer.", 'error');
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        isLoading.value = false;
      });
};


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
      <h1>{{ pageTitle }}</h1> <!-- Utilisation de pageTitle -->
      <h2>{{ pageDescription }}</h2>
    </div>
  </div>

  <main class="content-contact">
    <div class="contact-layout animate-on-scroll">
      <!-- Colonne d'information -->
      <div class="contact-info">
        <span class="section-subtitle">Discutons</span>
        <h3 class="section-title">Parlons de votre projet de création de site web.</h3>
        <p>
          Que vous ayez une idée précise ou juste une simple question, n'hésitez pas. Remplissez le formulaire ou utilisez mes coordonnées directes. Je suis toujours ravi de découvrir de nouveaux projets de <strong>création de site web</strong> ou de <strong>développement d'application</strong> dans la région de <strong>Chauny, Saint-Quentin, Compiègne</strong> et l'ensemble de l'<strong>Aisne</strong> et de l'<strong>Oise</strong>.
        </p>
        <ul class="info-list">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:contact.feid@gmail.com">contact.feid@gmail.com</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <a href="tel:+33604510113">06 04 51 01 13</a>
          </li>
        </ul>
        <div class="social-links">
          <a href="https://www.instagram.com/corantyn.vnsl/" target="_blank" rel="noopener noreferrer" title="Instagram de Corantyn Vignon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://github.com/BroLegacy" target="_blank" rel="noopener noreferrer" title="Profil GitHub de Corantyn Vignon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/corantyn-vignon/" target="_blank" rel="noopener noreferrer" title="Profil LinkedIn de Corantyn Vignon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>

      <!-- Colonne du formulaire -->
      <div class="contact-form">
        <form @submit.prevent="sendEmail" novalidate>
          <div class="form-group">
            <input type="text" id="name" v-model.trim="form.name" placeholder=" " required>
            <label for="name">Nom</label>
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model.trim="form.email" placeholder=" " required>
            <label for="email">Email</label>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <textarea id="message" v-model.trim="form.message" rows="5" placeholder=" " required></textarea>
            <label for="message">Votre message</label>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          <button type="submit" class="btn-main" :disabled="isLoading">
            <span v-if="!isLoading">Envoyer le message</span>
            <span v-else class="loader"></span>
          </button>
        </form>
      </div>
    </div>
  </main>

  <!-- Notification Toast -->
  <transition name="toast-fade">
    <div v-if="notification.show" class="notification-toast" :class="notification.type">
      {{ notification.message }}
    </div>
  </transition>
</template>

<style scoped lang="scss">
// --- VARIABLES ---
$primary-color: #000000;
$secondary-color: #FFFFFF;
$accent-color: #4A90E2;
$text-color: #333;
$light-gray: #f8f9fa;
$border-color: #e0e0e0;
$success-color: #28a745;
$error-color: #dc3545;

// --- STYLES GÉNÉRAUX ---
.content-contact {
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px;
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
  font-size: clamp(2.5rem, 6vw, 3rem);
  color: $primary-color;
  margin-bottom: 30px;
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
  border: none;
  cursor: pointer;
  width: 100%;
  min-height: 52px; // Hauteur fixe pour le bouton
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: lighten($primary-color, 15%);
    transform: translateY(-3px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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

// --- MISE EN PAGE ---
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: flex-start;
}

// --- COLONNE INFO ---
.contact-info {
  p {
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    line-height: 1.8;
    color: $text-color;
    margin-bottom: 30px;
  }

  .info-list {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    li {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      font-family: 'League Spartan', sans-serif;
      font-size: 16px;
      font-weight: 600;

      svg {
        width: 24px;
        height: 24px;
        color: $accent-color;
        flex-shrink: 0;
      }
      a {
        color: $text-color;
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover {
          color: $accent-color;
        }
      }
    }
  }

  .social-links {
    display: flex;
    gap: 20px;
    a {
      color: #888;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: $primary-color;
        transform: translateY(-3px);
      }
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
}

// --- FORMULAIRE ---
.contact-form {
  background: $secondary-color;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
}

.form-group {
  position: relative;
  margin-bottom: 35px;

  input, textarea {
    width: 100%;
    border: 2px solid $border-color;
    border-radius: 8px;
    padding: 14px;
    font-family: 'League Spartan', sans-serif;
    font-size: 16px;
    background: transparent; // Important pour le placeholder
    transition: border-color 0.3s ease;
    position: relative;
    z-index: 1;

    &:focus {
      outline: none;
      border-color: $accent-color;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  label {
    transform: none !important;
    position: absolute;
    top: 15px;
    left: 15px;
    font-family: 'League Spartan', sans-serif;
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 0;
  }

  // CORRECTION : Effet "Floating Label" amélioré
  input:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 12px;
    color: $accent-color;
    background: $secondary-color;
    padding: 0 5px;
    z-index: 2;
  }

  .error-message {
    color: $error-color;
    font-family: 'League Spartan', sans-serif;
    font-size: 13px;
    position: absolute;
    bottom: -20px;
    left: 0;
  }
}

// --- LOADER ---
.loader {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: $secondary-color;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// --- NOTIFICATION TOAST ---
.notification-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 25px;
  border-radius: 8px;
  color: $secondary-color;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  z-index: 1001;

  &.success { background-color: $success-color; }
  &.error { background-color: $error-color; }
}

.toast-fade-enter-active, .toast-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

// --- RESPONSIVE ---
@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .contact-info {
    text-align: center;
    .info-list, .social-links {
      justify-content: center;
    }
  }
}

@media (max-width: 768px) {
  .info-list{
    li{
      justify-content: center;
    }
  }
  .content-contact {
    padding: 80px 20px;
  }
  .contact-form {
    padding: 30px;
  }
  .section-title {
    font-size: 2.25rem; // Taille réduite pour mobile
  }
  .contact-info p {
    font-size: 16px; // Taille de police ajustée
  }
}
</style>