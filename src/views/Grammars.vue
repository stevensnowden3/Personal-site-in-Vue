
<template>
  <div class="about">
    <h3 class="text-success mt-3 mb-5 text-center">
      Runyankore-Rukiga Resource Grammmar
    </h3>
  </div>
  <div class="container">
    <div>
      <table v-if="lemma_id" class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">object</th>
            <th scope="col">lemma</th>
            <th scope="col">lemma_id</th>
            <th scope="col">tonne</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{ index_of_lemma }}</th>
            <td>{{ value_of_lemma }}</td>
            <td>{{ lemma_id }}</td>
            <td>{{ tonne_of_lemma1 }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex justify-content-center">
      <label @click="decreaseIndex" for="exampleInputEmail1" class="form-label"
        >Tonne:(-) &nbsp;&nbsp;</label
      >

      <p class="col-6">
        <!-- <label>Tone:</label> -->
        <input
          type="text"
          placeholder="Tonne of Lemma "
          v-model="tonne_of_lemma"
          class="form-control"
        />
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <label @click="increaseIndex" for="exampleInputEmail1" class="form-label"
        >Index: (+)&nbsp;&nbsp;</label
      >

      <p class="col-6">
        <!-- <label class="justify-content-start">Password:</label> -->
        <input
          type="number"
          placeholder="Index"
          v-model="index_of_lemma"
          class="form-control"
        />
      </p>
    </div>

    <p v-if="errMsg" class="text-danger">{{ errMsg }}</p>
    <div class="text-center">
      <button @click="getLemma" class="btn rounded btn-primary">
        <div
          v-if="isSubmitting"
          class="spinner-border spinner-border-sm text-white"
          role="status"
        ></div>
        <span v-if="isSubmitting" class="text-white"> Searching..</span>
        <span v-else class="text-white"> Next</span>
      </button>
      &nbsp;
      <button @click="UpdateLemma" class="btn rounded btn-primary">
        <div
          v-if="isUpdating"
          class="spinner-border spinner-border-sm text-white"
          role="status"
        ></div>
        <span v-if="isUpdating" class="text-white"> Saving..</span>
        <span v-else class="text-white"> Update</span>
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import {
  getDatabase,
  ref as Ref,
  set,
  onValue,
  child,
  get,
  update,
} from "firebase/database";

import { useRouter } from "vue-router"; // import router
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onBeforeUnmount } from "vue";
const database = getDatabase();

//get input from form
const tonne_of_lemma = ref("");
const tonne_of_lemma1 = ref("");
const index_of_lemma = ref("");
const value_of_lemma = ref("");
const lemma_id = ref("");

const isSubmitting = ref(false);
const isUpdating = ref(false);

const errMsg = ref(""); // ERROR MESSAGE
const router = useRouter(); // get a reference to our vue router
const auth = getAuth();
const getLemma = () => {
  isSubmitting.value = true;

  const dbRef = Ref(getDatabase());
  if (index_of_lemma.value == "") {
    isSubmitting.value = false;
    errMsg.value = "The Index of lemme is Empty ";
  } else {
    get(child(dbRef, `${index_of_lemma.value}/`))
      .then((snapshot) => {
        isSubmitting.value = false;
        if (snapshot.exists()) {
          value_of_lemma.value = snapshot.val().lemma;
          lemma_id.value = snapshot.val().lemma_id;
          tonne_of_lemma1.value = snapshot.val().tonne;
          // for input
          tonne_of_lemma.value = snapshot.val().lemma;
          console.log("data available  " + snapshot.val());
        } else {
          errMsg.value = "No data available at index " + index_of_lemma.value;
          console.log(snapshot.val());
          console.log("No data available");
        }
      })
      .catch((error) => {
        isSubmitting.value = false;
        console.error(error);
      });
  }
};

const UpdateLemma = () => {
  isUpdating.value = true;
  const database = getDatabase();
  if (tonne_of_lemma.value == "") {
    isUpdating.value = false;
    errMsg.value = "The tonne of lemme is Empty ";
  } else {
    set(
      Ref(database, `${index_of_lemma.value}/` + "tonne"),
      tonne_of_lemma.value
    )
      .then(() => {
        isUpdating.value = false;
        tonne_of_lemma.value = "";
        index_of_lemma.value++;
        console.log("Stored ");
      })

      .catch((error) => {
        isUpdating.value = false;
        console.log("Error During Updating Database ");
      });
  }
};
const increaseIndex = () => {
  index_of_lemma.value++;
};
const decreaseIndex = () => {
  index_of_lemma.value--;
};
// Restriction for only Login in users
const authListener = onAuthStateChanged(auth, (user) => {
  if (!user) {
    // not logged in
    alert(
      "You must be logged in Runyankole-Rukiga Resource Grammar Lexicon. redirecting to the home page"
    );
    router.push("/");
  }
});
onBeforeUnmount(() => {
  // clear up listener
  authListener();
});
// Restriction for only Login in users
</script>