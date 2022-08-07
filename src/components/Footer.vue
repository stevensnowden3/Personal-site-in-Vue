<template>
  <!-- ======= Footer ======= -->

  <footer id="footer">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a
            ><router-link
              v
              :to="{ name: 'home' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >Home</router-link
            ></a
          >
        </li>
        <li class="page-item">
          <a
            ><router-link
              v
              :to="{ name: 'about' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >1</router-link
            ></a
          >
        </li>
        <li class="page-item">
          <a
            ><router-link
              v
              :to="{ name: 'resume' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >2</router-link
            ></a
          >
        </li>
        <li class="page-item">
          <a
            ><router-link
              v
              :to="{ name: 'whatido' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >3</router-link
            ></a
          >
        </li>
        <li class="page-item">
          <a
            ><router-link
              v
              :to="{ name: 'contact' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >4</router-link
            ></a
          >
        </li>
        <li class="page-item">
          <a
            ><router-link
              v
              :to="{ name: 'resume' }"
              class="text-dark fs-5 text-monospace page-link bgfoot"
              >Next</router-link
            ></a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="copyright">
        <p class="fs-5">
          &copy; Copyright - {{ new Date().getFullYear() }}
          <strong
            ><span class="text-white fs-5"
              >&nbsp;&nbsp;&nbsp;Kwesiga Kato Steven&nbsp;&nbsp;&nbsp;</span
            ></strong
          >
          All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
  <!-- End  Footer -->
</template>



<style>
/* .bgfoot {
  background-color: darkred;
}
.bgfoot:hover {
  background-color: #7695dd;
} */
</style>