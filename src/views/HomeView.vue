<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div
      class="container d-flex flex-column align-items-start"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h1 class="text-start">Kwesiga Kato Steven</h1>
      <h2>Hey, I'm a computer Scientist from Mbarara</h2>
      <h2 class="text-dark">
        Am a Junior Software Developer who constantly<br />
        seeks out innovative solutions to everyday problems.
      </h2>

      <a class="btn-about" style="text-decoration: none"
        ><router-link
          v
          :to="{ name: 'about' }"
          class="text-white"
          style="text-decoration: none"
          >About Kato</router-link
        ></a
      >
    </div>
    <div id="resumebtn">
      <router-link v :to="{ name: 'resume' }" class="btn text-white"
        >Resume</router-link
      >
    </div>
  </section>
  <!-- End Hero -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
a {
  /* color: #34b7a7; */
  text-decoration: none;
}
.bb {
  text-decoration: none;
}

@media (min-width: 900px) {
  #resumebtn {
    display: none;
  }
}

@media only screen and (max-width: 990px) {
  #resumebtn {
    position: fixed;
    left: 0%;
    bottom: 2%;
    z-index: 1000;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    filter: progid: dximagetransform.microsoft.basicimage(rotation=3);
    text-align: center;
    text-decoration: none;
    background: darkred;
  }
}
</style>
