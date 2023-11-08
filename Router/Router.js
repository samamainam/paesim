import { createWebHistory, createRouter } from 'vue-router';
import TopTab from "../src/components/TopTab.vue";
import PackagesList from "../src/components/PackagesList.vue";
import { countries } from './Countries';
import Home from "../src/components/Home.vue"
import OrderPage from "../src/components/OrderPage.vue"


const countryUrl = countries.slug;

const routes = [
    {
        name: "Home",
        path: "/home",
        component: Home,
    },
    {
        name: "TopTab",
        path: "/countries",
        component: TopTab,
    },
    {
        name: ":countries.name",
        path: "/packages/:countryUrl",
        component: PackagesList,
        props: true,
    },
    {
        name: "OrderPage",
        path: '/complete-order',
        component: OrderPage,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
