<template>
  <div class="container my-5">
    <h3 class="text-center" style="margin-top: 200px">Create your Account</h3>
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
    <p class="text-center text-danger" v-if="errMsg">{{ errMsg }}</p>
    <div class="text-center">
      <button
        @click="register"
        class="btn btn-lg rounded"
        style="background: #7695dd"
      >
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
const errMsg = ref(); // ERROR MESSAGE

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
      errMsg.value = error.message;
      console.log(error.code);
      // alert(error.message);
    });
};
</script>