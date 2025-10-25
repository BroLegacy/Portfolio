<script setup>
import { useMeta } from 'vue-meta';
import ParticlesBackground from "./ParticlesBackground.vue";

// --- Props pour le titre de la page ---
const pageTitle = "Mentions Légales";
const pageDescription = "Informations légales concernant le site de Corantyn Vignon.";

defineProps({
  title: {
    type: String,
    default: pageTitle
  },
  sub: {
    type: String,
    default: '' // Pas de sous-titre pour cette page
  }
});

// --- Configuration des meta tags pour le SEO ---
useMeta(() => ({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, follow' // On demande aux robots de ne pas indexer cette page, mais de suivre les liens
}));
</script>

<template>
  <!-- SECTION HERO -->
  <div class="top">
    <particles-background/>
    <div class="title">
      <h1>{{ pageTitle }}</h1>
    </div>
  </div>

  <main class="content-legal">
    <div class="legal-section">
      <h2>1. Éditeur du site</h2>
      <p>
        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>https://www.corantyn.com</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
      </p>
      <ul>
        <li><strong>Propriétaire du site :</strong> Corantyn Vignon - Entreprise Individuelle</li>
        <li><strong>Contact :</strong> <a href="mailto:contact.feid@gmail.com">contact.feid@gmail.com</a> | <a href="tel:+33604510113">06 04 51 01 13</a></li>
        <li><strong>Adresse :</strong> 13 rue louis sequeval, Quierzy 02300, France</li>
        <li><strong>Numéro de SIRET :</strong> 923585160</li>
        <li><strong>Directeur de la publication :</strong> Corantyn Vignon</li>
      </ul>
    </div>

    <div class="legal-section">
      <h2>2. Hébergeur</h2>
      <p>
        Ce site est hébergé par la société Netlify, Inc.
      </p>
      <ul>
        <li><strong>Société :</strong> Netlify, Inc.</li>
        <li><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, California 94107, USA</li>
        <li><strong>Contact :</strong> <a href="mailto:support@netlify.com">support@netlify.com</a></li>
      </ul>
    </div>

    <div class="legal-section">
      <h2>3. Propriété intellectuelle et contrefaçons</h2>
      <p>
        Corantyn Vignon est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Corantyn Vignon.
      </p>
      <p>
        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
      </p>
    </div>

    <div class="legal-section">
      <h2>4. Limitations de responsabilité</h2>
      <p>
        Corantyn Vignon ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.
      </p>
      <p>
        Corantyn Vignon décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur le site. Le site contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers ce site.
      </p>
    </div>

    <div class="legal-section">
      <h2>5. CNIL et gestion des données personnelles</h2>
      <p>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message au Directeur de la publication.
      </p>
      <p>
        Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre <router-link to="/politique-de-confidentialite">Politique de Confidentialité</router-link>.
      </p>
    </div>

    <div class="legal-section">
      <h2>6. Droit applicable et attribution de juridiction</h2>
      <p>
        Tout litige en relation avec l’utilisation du site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Saint-Quentin.
      </p>
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

.content-legal {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: $secondary-color;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.05);
  font-family: 'League Spartan', sans-serif;
  line-height: 1.7;
  color: $text-color;
}

.legal-section {
  margin-bottom: 40px;

  h2 {
    font-family: 'League Gothic', sans-serif;
    font-size: 28px;
    color: $primary-color;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid $accent-color;
    display: inline-block;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  ul {
    list-style-position: inside;
    padding-left: 10px;
    margin-top: 15px;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: $accent-color;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: darken($accent-color, 10%);
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 700;
    color: $primary-color;
  }
}

// Responsive
@media (max-width: 768px) {
  .content-legal {
    padding: 60px 15px;
  }

  .legal-section h2 {
    font-size: 24px;
  }

  .legal-section p {
    font-size: 15px;
  }
}
</style>