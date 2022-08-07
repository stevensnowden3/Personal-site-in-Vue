<template>
  <main id="main">
    <!-- nav summary -->
    <div class="text-center bgnav1">
      <ul class="nav showme mt-4">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"
            ><router-link v :to="{ name: 'about' }" class="text-white fs-4"
              >About</router-link
            ></a
          >
        </li>
        <li class="nav-item text-center">
          <a class="nav-link"
            ><router-link v :to="{ name: 'resume' }" class="text-white fs-4"
              >Resume</router-link
            ></a
          >
        </li>

        <li class="nav-item">
          <a class="nav-link"
            ><router-link v :to="{ name: 'contact' }" class="text-white fs-4"
              >Contact</router-link
            ></a
          >
        </li>
      </ul>
    </div>
    <!-- End of nave summary -->
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <p>
            “I'm an junior software developer who constantly seeks out
            innovative solutions to everyday problems. With my few years of
            experience, I've honed my analytical thinking and collaboration
            skills, and I love working with a team. Am passionate about computer
            programming, data science, data security, computer security, and
            computer networks."
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/about.png" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3 class="fs-1">Software Developer &amp; Data scientist</h3>
            <p class="fst-italic">
              I write django, and Vue. Am still exploring other technologies and
              frameworks that catch my interest! if you're looking for a
              developer to add to your team, I'd love to hear from you!
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Birthday:</strong> 31 Dec 1997
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Website:</strong> https://kwesiga-steven.web.app
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Phone:</strong> +256 7816 67628
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>City:</strong> City : Mbarara, Uganda
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-rounded-right"></i> <strong>Age:</strong> 25
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Degree:</strong> Bachelors
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Email:</strong> Kwesiga.kato.steven@gmail.com
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Kwesiga is an action-oriented and open-minded computer scientist
              with excellent problem solving skills. I love coding, solving new
              problems, and being a part of software development (Problem
              solving) community.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Skills</h2>
          <p>
            Over years I have accumulated various sets of skills that i believe
            are important for my career development as a software developer.
          </p>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <div class="progress bg-light">
              <span class="skill">Python <i class="val">100%</i></span>

              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  ms-2
                  progress-color
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%; background-color: #7695dd"
              >
                80%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill">Django <i class="val">100%</i></span>

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%; background-color: #7695dd"
              >
                100%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill">Vue Js <i class="val">100%</i></span>

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%; background-color: #7695dd"
              >
                70%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill">HTML <i class="val">100%</i></span>

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%; background-color: #7695dd"
              >
                100%
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="progress bg-light">
              <span class="skill"
                >Java & JavaScript<i class="val">100%</i></span
              >

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%; background-color: #7695dd"
              >
                80%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill">SQL <i class="val">100%</i></span>

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 100%; background-color: #7695dd"
              >
                100%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill">CSS <i class="val">100%</i></span>

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%; background-color: #7695dd"
              >
                90%
              </div>
            </div>
            <div class="progress bg-light">
              <span class="skill"
                >Android Development <i class="val">100%</i></span
              >

              <div
                class="
                  ms-2
                  progress-bar progress-bar-striped progress-bar-animated
                "
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 75%; background-color: #7695dd"
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Skills Section -->

    <!-- ======= Facts Section ======= -->
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Other Skills</h2>

          <p class="fs-2">
            Other skills AGILE, AWS, CYBER SECURITY, DOCKER, GIT, MONGODB, REST,
            REACT, PHP, C/C++, MACHINE LEARNING
          </p>
          <hr />
          <p class="fs-2 mt-4">
            Critical thinking | Analytical skills | Multitasking and ability to
            prioritize
          </p>
          <p class="fs-2">
            Fast Learner | Team work | Excellent communication skills | Problem
            solving
          </p>
        </div>
      </div>
    </section>

    <!-- ======= Testimonials Section ======= -->
    <!-- <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div
          class="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            End testimonial item

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            End testimonial item
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section> -->
    <!-- End Testimonials Section -->
  </main>
  <!-- End #main -->
</template>
<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.showme {
  display: none;
}
@media only screen and (max-width: 990px) {
  .showme {
    display: inline-flex;
  }
}
a {
  text-decoration: none;
}
.bgnav1 {
  background: darkred;
}
</style>
