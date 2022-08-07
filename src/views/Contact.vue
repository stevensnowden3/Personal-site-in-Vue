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
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact Me</h2>
          <p>
            Looking for a Developer
            <span class="text-success fw-bold">|</span> Researcher
            <span class="text-success fw-bold">|</span> Intelligible
            <span class="text-success fw-bold">|</span> Focused-person to add to
            your team? I'd Love to hear from you!
          </p>
          <p>Send a message direct to me</p>
        </div>

        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Mbarara City, Uganda</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>kwesiga.kato.steven@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+256 781 667628</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <p class="text-center text-danger fs-4" v-if="errMsg">
              {{ errMsg }}
            </p>
            <p class="text-center text-success fs-3" v-if="sucMsg">
              {{ sucMsg }}
            </p>

            <div role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    v-model="senderName"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="text"
                    v-model="senderEmail"
                    class="form-control"
                    id="email"
                    placeholder=" Your Email or Address"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  v-model="subject"
                  class="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  v-model="messagebody"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div class="text-center">
                <button @click="sendEmail" type="submit">
                  <div
                    v-if="isSending"
                    class="spinner-border spinner-border-sm text-white"
                    role="status"
                  ></div>
                  <span v-if="isSending" class="text-white"> Sending...</span>
                  <span v-else class="text-white"> Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- End Contact Section -->
  </main>
  <!-- End #main -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import emailjs from "emailjs-com";
emailjs.init("zTx4_iEQd9MV9XT2a");
const senderName = ref("");
const senderEmail = ref("");
const subject = ref("");
const messagebody = ref("");
const isSending = ref("");
const errMsg = ref("");
const sucMsg = ref("");

const sendEmail = () => {
  sucMsg.value = "";
  errMsg.value = "";

  if (
    senderName.value == "" ||
    senderEmail.value == "" ||
    !messagebody.value ||
    !subject.value
  ) {
    sucMsg.value = "";
    errMsg.value = "Please fill in All text Fields: Cannot sent message";
  } else if (
    senderName.value &&
    senderEmail.value &&
    messagebody.value &&
    subject.value
  ) {
    var templateParams = {
      name: senderName.value,
      subject: subject.value,
      message: messagebody.value,
      email: senderEmail.value,
    };
    isSending.value = true;
    emailjs.send("service_7yey68d", "template_mvl68ns", templateParams).then(
      (response) => {
        errMsg.value = "";
        sucMsg.value = "Message sent successfully! Thanks for contacting Kato.";

        isSending.value = false;
        // console.log("SUCCESS!", response.status, response.text);
        senderName.value = "";
        subject.value = "";
        senderEmail.value = "";
        messagebody.value = "";
      },
      (error) => {
        errMsg.value = error;
        sucMsg.value = "";
        isSending.value = false;
      }
    );
  }
};
</script>



<style>
#bottom1 a {
  text-decoration: none;
}
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
</style>