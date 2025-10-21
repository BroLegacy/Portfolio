import { createApp } from 'vue';
import '../src/assets/sass/main.scss';
import App from './App.vue';
import router from './router';
// Importation correcte pour vue-meta (version Vue 3)
import { createMetaManager } from 'vue-meta'; // <--- MODIFICATION ICI

const app = createApp(App);

app.use(router);
app.use(createMetaManager()); // <--- Cette ligne est correcte et suffisante
// app.use(VueMetaPlugin);       // <--- SUPPRIMEZ CETTE LIGNE

app.mount('#app');