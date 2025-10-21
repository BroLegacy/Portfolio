import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import App from './App.vue';
import router from './router';
import '../src/assets/sass/main.scss';

// Crée l'application Vue
const app = createApp(App);

// Utilise le router
app.use(router);

// Utilise le gestionnaire de métadonnées
// C'est la bonne façon d'initialiser vue-meta pour Vue 3
app.use(createMetaManager());

// Monte l'application sur l'élément #app dans votre HTML
app.mount('#app');
