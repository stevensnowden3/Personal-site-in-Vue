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

    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
          <p class="fs-5">The universe of computing is incredible,The first time when I used a PC, it made me become more intrigued to see how<br>  things worked. I loved computing and since I was 12, my life changed when I started to learn computer programming.<br>   Am so passionate about solving computer problems and being part of the problem solving community.</p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Kwesiga Kato Stven</h4>
              <p><em>Kato is an Innovative, Focused, and quick learning Software Developer with various skills in computer science, programming, web development and data science</em></p>
              <p>
              <ul>
                <li>Mbarara, Uganda</li>
                <li>(+256) 781-667628</li>
                <li>kwesiga.kato.steven@gmail.com</li>
              </ul>
              </p>
            </div>
            

            <h3 class="resume-title">Education</h3>
            
            <div class="resume-item">
              <h4>Bachelor of Computer Science</h4>
              <h5>2018 - 2021</h5>
              <p><em>Mbarara University of Science an Technology, Uganda</em></p>
            <p>Took classes on Android software development, Computer Networks, C programming, Java, Object oriented programming, machine learning, Data science, Project management. Gained a lot of computer related skills and knowledge in computing.</p>
            </div>
            <div class="resume-item">
              <h4>Uganda Advanced Certificate of Education</h4>
              <h5>2015 - 2016</h5>
              <p><em>Ntungamo High School, Ntungamo, Uganda</em></p>
              <p>Leader for Computing club at school, won prizes on problem solving puzzles i.e sudoku and chess. Gained skills in using MS office software. Acted as teaching assistant for our ICT teacher</p>
            </div>
            <div class="resume-item">
              <h4>Uganda  Certificate of Education</h4>
              <h5>2011 - 2014</h5>
              <p><em>Standard High School Zzana, Wakiso, Uganda</em></p>
              <p>Gained leadership skills as Academic Prefect. Was a computer wizard who loved discussing with fellow students and getting solutions to puzzling challenges we faced in ICT classes.</p>
            </div>
            <div class="resume-item">
              <h4>Primary Leaving Examinations</h4>
              <h5>2003 - 2010</h5>
              <p><em>Katomi Primary School, Ntungamo,  Uganda</em></p>
              <p>Worn math contest award of the year 2009 and 2010</p>
            </div>
            
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title ms-3">Working Experience</h3>
            <div class="resume-item">
              <h4>Teaching | Tutorial Assistant</h4>
              <h5>2022 - Present</h5>
              <p><em>Mbarara University of Science and Technology, Uganda </em></p>
              <p>
              <ul>
                <li>Teaching assistant for data structures and algorithms.</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Lexicon | Resource Grammar Database Engineering</h4>
              <h5>2022 - Present</h5>
              <p><em>NLP PhD Research Project, Uganda </em></p>
              <p>
              <ul>
                <li>Data collection and cleaning of Runyankole-Rukiga Lexicon</li>
                <li>Setting up the database with relations linking words in Runyankole Language with their English Definitions</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Computer science Intern</h4>
              <h5>12/2020 – 2/2021</h5>
              <p><em>DigBit Technologies, Mbarara, Uganda </em></p>
              <p>
              <ul>
                <li>Developed and implemented a dairy management system including back end database storage system and dynamic web pages. Conducted usability tests, implementing enhancements to improve user experience</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Android Developer</h4>
              <h5> Jan 2022 - April 2022</h5>
              <p><em>The Vegan Society, Kampala Uganda </em></p>
              <p>
              <ul>
                <li>Built an Android application using Java and Google Firebase. </li>
                <li> Designed a user-friendly application using modern design techniques.</li>
                 <li> Identified performance issues and address them by re-designing database to save on usage costs.</li>
              </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Web Developer</h4>
              <h5> May 2022 - July 2022</h5>
              <p><em>University of Saint Joseph, Mbarara, Uganda </em></p>
              <p>
              <ul>
                <li>Designed and Implemented Website using Django Framework and MySQL database. </li>
              </ul>
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->

  </main><!-- End #main -->
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
