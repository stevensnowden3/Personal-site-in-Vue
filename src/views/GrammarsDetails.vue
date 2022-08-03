
<template>
  <div class="about">
    <h3 class="text-dark mt-3 mb-5 text-center">
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
            <td>{{ tonne_of_lemma }}</td>
          </tr>

          <tr>
            <th scope="row">eng_defn</th>
            <td colspan="3">{{ eng_defn }}</td>
            <!-- <td>@twitter</td> -->
          </tr>
          <tr>
            <th scope="row">synonyms</th>
            <td colspan="3">{{ synonyms }}</td>
            <!-- <td>@twitter</td> -->
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-center">ObjectNo:{{ index_of_lemma }}</p>
    <div class="d-flex justify-content-center">
      <label @click="increaseIndex" for="exampleInputEmail1" class="form-label"
        >Index:(+)&nbsp;&nbsp;</label
      >
      <p class="col-6">
        <input
          type="text"
          placeholder="Index of leme"
          v-model="index_of_lemma"
          class="form-control"
        />
      </p>
    </div>

    <p v-if="errMsg" class="text-danger">{{ errMsg }}</p>
    <div class="text-center">
      <button @click="getLemma" class="btn rounded btn-primary text-center">
        <div
          v-if="isLoggedIn"
          class="spinner-border spinner-border-sm text-white"
          role="status"
        ></div>
        <span v-if="isLoggedIn" class="text-white"> Searching..</span>
        <span v-else class="text-white"> Submit</span>
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
const index_of_lemma = ref("");
const value_of_lemma = ref("");
const lemma_id = ref("");
const eng_defn = ref("");
const synonyms = ref("");

const isLoggedIn = ref(false);

const errMsg = ref(""); // ERROR MESSAGE
const router = useRouter(); // get a reference to our vue
const auth = getAuth(); //for path restriction

const getLemma = () => {
  isLoggedIn.value = true;

  const dbRef = Ref(getDatabase());

  get(child(dbRef, `${index_of_lemma.value}/`))
    .then((snapshot) => {
      isLoggedIn.value = false;
      if (snapshot.exists()) {
        tonne_of_lemma.value = snapshot.val().tonne;
        value_of_lemma.value = snapshot.val().lemma;
        lemma_id.value = snapshot.val().lemma_id;
        eng_defn.value = snapshot.val().eng_defn;
        synonyms.value = JSON.stringify(snapshot.val().synonyms, null, 2);
        console.log(snapshot.val());
      } else {
        errMsg.value = "No data available at index " + index_of_lemma.value;
        console.log("No data available");
      }
    })
    .catch((error) => {
      isLoggedIn.value = false;
      console.error(error);
    });
};

const increaseIndex = () => {
  index_of_lemma.value++;
};
// const UpdateLemma = () => {
//   const database = getDatabase();

//   set(Ref(database, "100/" + "lemma2"), "testeeeeUpdated")
//     .then(() => {
//       alert("stored ");
//     })

//     .catch((error) => {
//       alert("EErr ");
//     });
// };
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