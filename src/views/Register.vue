<template>
  <div class="container">
    <h3 class="my-4 text-center">Log into your Account</h3>
    <div class="d-flex justify-content-center">
      <label for="exampleInputEmail1" class="form-label"
        >Email: &nbsp;&nbsp;</label
      >

      <p class="col-6">
        <!-- <label>Tone:</label> -->
        <input
          type="text"
          placeholder="Email"
          v-model="email"
          class="form-control"
        />
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <label for="exampleInputEmail1" class="form-label"
        >Passw: &nbsp;&nbsp;</label
      >

      <p class="col-6">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="form-control"
        />
      </p>
    </div>
    <p class="text-center" v-if="errMsg">{{ errMsg }}</p>
    <div class="text-center">
      <button @click="register" class="btn rounded btn-primary">
        <div
          v-if="isLoggedIn"
          class="spinner-border spinner-border-sm text-white"
          role="status"
        ></div>
        <span v-if="isLoggedIn" class="text-white"> Logining..</span>
        <span v-else class="text-white"> Register</span>
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const isLoggedIn = ref(false);

const router = useRouter(); // get a reference to our vue router

const register = () => {
  isLoggedIn.value = true;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      isLoggedIn.value = false;
      console.log("Successfully registered!");
      router.push("/"); // redirect to the feed
    })
    .catch((error) => {
      isLoggedIn.value = false;
      console.log(error.code);
      alert(error.message);
    });
};
</script>