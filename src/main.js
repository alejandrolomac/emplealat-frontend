//import { compileTemplate } from '@vue/compiler-sfc'
import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App'
import router from './router'

//FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//Vue.config.productionTip = false

//Styles 
import "@/assets/css/glena.css";
import "@/assets/css/style.css";

createApp(App).use(router).mount('#app')
