<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Lexical Grammar </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link">
              <router-link to="/about">About</router-link></a
            >
          </li>

          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link">
              <router-link to="/grammars">Resource</router-link></a
            >
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link">
              <router-link v to="/details">GrammarDetails</router-link></a
            >
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link">
              <router-link to="/register">Register</router-link></a
            >
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link">
              <router-link to="/login">Login</router-link></a
            >
          </li>
          <li @click="handleSignOut" v-if="isLoggedIn" class="nav-item">
            <a class="nav-link btn"> SignOut</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="isLoggedIn" to="/grammars">Resource</router-link> |
    <router-link v-if="isLoggedIn" to="/details">GrammarDetails</router-link>
    | <router-link to="/about">About</router-link> |
    <router-link v-if="isLoggedIn" to="/feed">Feed</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn" class="btn">
      SignOut
    </button>
    <span v-else>
      <router-link to="/register"> Register </router-link> |
      <router-link to="/login"> Login </router-link>
    </span>
  </nav> -->
  <router-view />
</template>

<script setup>
import NavBar from "@/components/NavBar";
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

components: {
  NavBar;
}
const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
nav a {
  color: black;
  text-decoration: none;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  cursor: pointer;
}
</style>
