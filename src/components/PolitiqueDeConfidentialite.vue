<script setup>
import {useMeta} from 'vue-meta';
import ParticlesBackground from "./ParticlesBackground.vue";

// --- Props pour le titre de la page ---
const pageTitle = "Politique de Confidentialité";
const pageDescription = "Gestion de vos données personnelles sur le site de Corantyn Vignon.";

// --- Configuration des meta tags pour le SEO ---
// CORRECTION : useMeta est maintenant appelé avec une fonction
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
      <p>
        Cette politique de confidentialité décrit la manière dont vos données personnelles sont collectées, utilisées et
        partagées lorsque vous visitez ou interagissez avec le site <strong>https://www.corantyn.com</strong>
        (ci-après le "Site").
      </p>
    </div>

    <div class="legal-section">
      <h2>1. Collecte des données personnelles</h2>
      <p>
        La seule collecte de données personnelles effectuée sur ce site se fait lorsque vous utilisez le formulaire de
        contact. Les informations que nous collectons incluent :
      </p>
      <ul>
        <li>Votre nom</li>
        <li>Votre adresse e-mail</li>
        <li>Le contenu de votre message</li>
      </ul>
      <p>
        Ces informations sont collectées avec votre consentement explicite lorsque vous cliquez sur le bouton "Envoyer
        le message".
      </p>
    </div>

    <div class="legal-section">
      <h2>2. Utilisation de vos données personnelles</h2>
      <p>
        Nous utilisons les informations que vous nous fournissez via le formulaire de contact uniquement dans le but de
        :
      </p>
      <ul>
        <li>Répondre à votre demande de contact, de devis ou d'information.</li>
        <li>Communiquer avec vous dans le cadre d'une éventuelle relation professionnelle.</li>
      </ul>
      <p>
        Vos données personnelles ne sont en aucun cas vendues, louées ou partagées avec des tiers à des fins
        commerciales.
      </p>
    </div>

    <div class="legal-section">
      <h2>3. Sécurité des données</h2>
      <p>
        Les informations envoyées via le formulaire de contact sont transmises de manière sécurisée par e-mail et sont
        stockées dans une boîte de réception protégée. Des mesures de sécurité raisonnables sont prises pour protéger
        vos informations contre la perte, l'accès non autorisé, la divulgation ou l'altération.
      </p>
    </div>

    <div class="legal-section">
      <h2>4. Cookies</h2>
      <p>
        Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques essentiels au bon
        fonctionnement du site peuvent être utilisés. Aucune information personnelle n'est stockée dans ces cookies.
      </p>
    </div>

    <div class="legal-section">
      <h2>5. Vos droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés",
        vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul>
        <li><strong>Droit d'accès :</strong> Vous pouvez demander à recevoir une copie des données personnelles que nous
          détenons à votre sujet.
        </li>
        <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de toute information inexacte
          ou incomplète.
        </li>
        <li><strong>Droit à l'effacement ("droit à l'oubli") :</strong> Vous pouvez demander la suppression de vos
          données personnelles.
        </li>
      </ul>
      <p>
        Pour exercer ces droits, vous pouvez me contacter à l'adresse e-mail suivante : <a
          href="mailto:contact.feid@gmail.com">contact.feid@gmail.com</a>.
      </p>
    </div>

    <div class="legal-section">
      <h2>6. Modifications de la politique de confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications et
        clarifications prendront effet dès leur publication sur le site. Nous vous encourageons à consulter cette page
        régulièrement pour rester informé.
      </p>
      <p><em>Dernière mise à jour : 24/05/2024</em></p>
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

// Les styles sont identiques à ceux de MentionsLegales.vue pour la cohérence
.content-legal {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: $secondary-color;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
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