import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Projets from './components/Projets.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Tarif from "./components/Tarif.vue";
import MentionsLegales from "./components/MentionsLegales.vue";
import PolitiqueDeConfidentialite from "./components/PolitiqueDeConfidentialite.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: {
            title: 'corantyn',
            sub: 'développeur - web'
        }
    },
    {
        path: '/projets',
        name: 'Projets',
        component: Projets,
        props: {
            title: 'MES PROJETS',
            sub: 'MADE WITH LOVE'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        props: {
            title: 'à-propos',
            sub: 'IT’S A-ME, MARIO!'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        props: {
            title: 'contactez-moi',
            sub: 'SAY HELLO TO ME'
        }
    },
    {
        path: '/tarifs',
        name: 'Tarif',
        component: Tarif,
        props: {
            title: 'tarifs',
            sub: 'SIMPLE, CLAIR, EFFICACE'
        }
    },
    {
        path: '/mentions-legales',
        name: 'MentionsLegales',
        component: MentionsLegales,
        props: {
            title: 'Mentions Legales',
            sub: 'SIMPLE, CLAIR, EFFICACE'
        }
    },
    {
        path: '/politique-de-confidentialite',
        name: 'PolitiqueDeConfidentialite',
        component: PolitiqueDeConfidentialite,
        props: {
            title: 'Politique De Confidentialite',
            sub: 'SIMPLE, CLAIR, EFFICACE'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;