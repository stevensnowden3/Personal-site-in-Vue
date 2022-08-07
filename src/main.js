import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons';

// import * as firebase from "firebase/app";


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCblqUlvffewdQ2qZ1rolIH834WMLYroI0",
  authDomain: "kwesiga-steven.firebaseapp.com",
 databaseURL: 'https://kwesiga-steven-default-rtdb.firebaseio.com/',
  projectId: "kwesiga-steven",
  storageBucket: "kwesiga-steven.appspot.com",
  messagingSenderId: "400398567934",
  appId: "1:400398567934:web:dfe74340a3de241146d8af",
  measurementId: "G-H4P9T83L1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app);




createApp(App).use(router).mount('#app')
