import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactPage from './pages/ContactPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
        },
        {
            path: '/project/:slug',
            name: 'projects.show',
            component: SingleProject,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: ErrorPage,
        }
    ]
});

export { router };