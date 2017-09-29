<template>
  <div class="content flip-container">
    <div class="flipper">
      <div class="front">
        <object data="../assets/logo.svg" type="image/svg+xml" class="logo"></object>
        <div class="inline-code animated">Stephan Köninger.</div>
        <div class="text-center bio">
          <small>
            <span class="job-title">Software Craftsman</span>
          </small>
        </div>
      </div>
      <div class="back">
        <div class="tech-category">
          <span class="tech-category__title">Web:</span>
          HTML, CSS, AngularJS, Redux, Bootstrap, Material Design, jQuery, mocha, chai.
        </div>
        <div class="tech-category">
          <span class="tech-category__title">Java:</span>
          Spring, Hibernate, JPA, JUnit.
        </div>
        <div class="tech-category">
          <span class="tech-category__title">Tools:</span>
          npm, Maven, Jenkins, SonarQube, Eclipse, IntelliJ / Webstorm.
        </div>
      </div>
    </div>
    <p class="text-center">
      <a href="http://blog.stekoe.de">Blog</a>
      |
      <a href="http://ocl.stekoe.de/">OCL.js</a>
    </p>
  </div>
</template>

<style scoped>
  .content {
    padding: 30px 20px 14px 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.5);
    width: 210px;
    height: 240px;
  }

  /* Cursor and w */
  .inline-code {
    margin-top: 30px;
    font-family: monospace;
    font-size: 1.3em;
    text-align: center;
    white-space: pre;
  }

  .inline-code.animated::after {
    content: '|';
    animation: cursor-blink .8s linear infinite;
  }

  /* FLIPPER */
  .flip-container {
    perspective: 1000px;
    -webkit-perspective: 1000px;
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }

  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }

  .front, .back {
    width: 210px;
    height: 200px;
  }

  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    height: 200px;
    position: relative;
  }

  .front, .back {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  .front {
    z-index: 2;
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(180deg);
  }

  /* // FLIPPER */

  /* Bio */
  .bio {
    margin-top: 0;
  }

  .bio .job-title {
    text-transform: uppercase;
  }

  .bio .tech-stack {
    font-style: italic;
    font-size: 90%;
  }

  .tech-category {
    padding-bottom: 7px;
  }

  .tech-category__title {
    font-weight: bold;
  }

  @media only screen
  and (max-width: 850px) {
    .container {
      width: 100%;
    }

    .container__bottom_left {
      justify-content: center;
    }

    .container__bottom_center, .container__bottom_right {
      display: none;
    }
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (orientation: landscape) {
    .inline-code {
      margin-top: 30px;
    }

    .logo {
      height: 80px;
    }

    .flip-container {
      height: 200px;
    }

    .flipper {
      height: 160px;
    }

    .front, .back {
      width: 210px;
      height: 160px;
    }
  }

  @media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (orientation: portrait) {
    .logo {
      height: 80px;
    }
  }
</style>

