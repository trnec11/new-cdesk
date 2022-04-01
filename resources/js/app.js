require('./bootstrap');

import { createApp } from "vue";
import NavBar from './components/NavBar'

createApp({
    components: {
        NavBar
    },
}).mount("#app");
