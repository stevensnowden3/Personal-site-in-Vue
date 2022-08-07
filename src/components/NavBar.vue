<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div
      class="container-fluid d-flex justify-content-between align-items-center"
    >
      <h1 class="logo me-auto me-lg-0">
        <router-link
          :to="{ name: 'home' }"
          class="text-white text-monospace"
          style="text-decoration: none"
          >StevenKato</router-link
        >
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="text-white fs-5 text-monospace"
              >Home</router-link
            >
          </li>
          <li>
            <a
              ><router-link
                v
                :to="{ name: 'about' }"
                class="text-white fs-5 text-monospace"
                >About</router-link
              ></a
            >
          </li>
          <li>
            <a
              ><router-link
                v
                :to="{ name: 'resume' }"
                class="text-white fs-5 text-monospace"
                >Resume</router-link
              ></a
            >
          </li>
          <li>
            <a
              ><router-link
                v
                :to="{ name: 'whatido' }"
                class="text-white fs-5 text-monospace"
                >What I Do</router-link
              ></a
            >
          </li>

          <li>
            <a
              ><router-link
                v
                :to="{ name: 'contact' }"
                class="text-white fs-5 text-monospace"
                >Contact</router-link
              ></a
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->

      <div class="header-social-links">
        <a
          href="https://wa.me/256781667628"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-whatsapp"></i
        ></a>
        <a
          href="https://www.facebook.com/profile.php?id=100004184504691"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-facebook"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/kwesiga-kato-steven-b58557164/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i
        ></a>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<style>
router-link {
  color: green;
}
</style>