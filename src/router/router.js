import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import Projects from '../Pages/Projects.vue'
import Contact from '../Pages/Contact.vue'

Vue.use(VueRouter);

const routes = [
    {path : "/", name : "home", component : Home},
    {path : "/about", name : "about", component : About},
    {path : "/projects", name : "projects", component : Projects},
    {path : "/contact", name : "contact", component : Contact}
]

const router = new VueRouter({
    routes,
    mode : "history"
})

export default router;