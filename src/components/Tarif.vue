<script>
import ParticlesBackground from "./ParticlesBackground.vue";

export default {
  components: {ParticlesBackground},
  props: ['title', 'sub']
};
</script>

<template>
  <div class="top">
    <particles-background/>
    <div class="title">
      <h1>{{ title }}</h1>
      <h2>{{ sub }}</h2>
    </div>
  </div>
  <div class="content-tarif">
    <div class="text">
      <span>Mes Offres</span>
      <p>Les tarifs sont à titre indicatif, n'hésitez pas à <router-link to="/contact">me contacter</router-link> !</p>
    </div>
    <div class="scroll">
      <table>
        <thead>
        <tr>
          <th>Fonctionnalités :</th>
          <th>Single Page <br /><br /> <strong>500 €</strong><b> HT</b></th>
          <th>Site Vitrine <br /><br /> <strong>900 €</strong><b> HT</b></th>
          <th>Boutique E-Commerce <br /><br /> <strong>2500 €</strong><b> HT</b></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="feature">Site optimisé et personnalisé <br /> Responsive PC, tablette et mobile</td>
          <td class="price">✔️</td>
          <td class="price">✔️</td>
          <td class="price">✔️</td>
        </tr>
        <tr>
          <td class="feature">Nombre de Pages</td>
          <td class="price">1️</td>
          <td class="price">4️</td>
          <td class="price">10️</td>
        </tr>
        <tr>
          <td class="feature">Référencement Google optimisé</td>
          <td class="price">Simple️</td>
          <td class="price">Simple️</td>
          <td class="price">Complet️</td>
        </tr>
        <tr>
          <td class="feature">Maintenances et modifications</td>
          <td class="price">7 jours inclus gratuitement puis 100 € /mois</td>
          <td class="price">15 jours inclus gratuitement puis 100 € /mois</td>
          <td class="price">1 mois inclus gratuitement puis 100 € /mois</td>
        </tr>
        <tr>
          <td class="feature">Formulaire de contact</td>
          <td class="unavailable">❌</td>
          <td class="unavailable">✔️</td>
          <td>✔️</td>
        </tr>
        <tr>
          <td class="feature">Boutique et paiement en ligne</td>
          <td class="unavailable">❌</td>
          <td class="unavailable">❌</td>
          <td>✔️</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

