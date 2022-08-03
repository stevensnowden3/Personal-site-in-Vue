<template>
  <div class="about">
    <h1 class="text-success text-center">This is an Feed page</h1>
    <a href="" class="btn btn-success text-center"> Click Me</a>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";
const auth = getAuth();
const router = useRouter();
const authListener = onAuthStateChanged(auth, (user) => {
  if (!user) {
    // not logged in
    alert("you must be logged in to view this. redirecting to the home page");
    router.push("/");
  }
});
onBeforeUnmount(() => {
  // clear up listener
  authListener();
});
</script>
