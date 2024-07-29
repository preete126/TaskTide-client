import {createRouter, createWebHashHistory} from "vue-router"
import HomePage from "./components/homePage.vue"
import SignUp from "./components/signUp.vue"
import Login from "./components/login.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/", component:SignUp},
        {path:"/home", component: HomePage},
        {path:"/login", component:Login}
    ]
})

export default router