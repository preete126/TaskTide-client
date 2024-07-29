import './assets/main.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { createApp } from 'vue'
import App from './App.vue'
import $AntD from "@ant-design/icons-vue"
import $router from "./routes"

let app = createApp(App)

app.config.globalProperties.$AntD =  $AntD
app.use($router)

app.mount('#app')
