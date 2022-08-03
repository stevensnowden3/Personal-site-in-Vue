import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import * as firebase from "firebase/app";


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQP64eaieYHLFNCcA4EQr98nb58EqNNjo",
  authDomain: "vue3athu.firebaseapp.com",
  projectId: "vue3athu",
 databaseURL: 'https://vue3athu-default-rtdb.firebaseio.com/',
  storageBucket: "vue3athu.appspot.com",
  messagingSenderId: "169241553993",
  appId: "1:169241553993:web:bf6ef5fc29081becfea398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app);




createApp(App).use(router).mount('#app')
