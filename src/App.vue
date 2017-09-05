<template>
  <div id="app">
    <sk-background></sk-background>
    <div class="container">
      <main>
        <router-view class="view"></router-view>
      </main>
      <sk-footer></sk-footer>
    </div>
  </div>
</template>

<script>
  import skBackground from './components/Background.vue'
  import skFooter from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      skBackground,
      skFooter
    }
  }
</script>

<style>
  #app {
    height: 100%;
    min-height: 100%;
  }

  @keyframes zoomin {
    0% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    50% {
      transform: scale(1.3);
      -webkit-transform: scale(1.3);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  @keyframes cursor-blink {
    1%, 40% {
      opacity: 0
    }

    100%, 60% {
      opacity: 1
    }
  }

  html, body {
    height: 100%;
    min-height: 100%;
    font-family: 'Maven Pro', sans-serif;
    color: rgba(255, 255, 255, 0.75);
  }

  body {
    margin: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;

    transition-property: height;
    transition-duration: 2s;
  }

  /* General HTML styling */
  h1 {
    margin-top: 0;
    font-size: 1.2em;
  }

  a {
    color: inherit;
  }

  a:hover {
    color: rgba(255, 255, 255, 1);
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .logo {
    display: block;
    height: 120px;
    margin: 0 auto;
  }

  .separator {
    margin-left: 25px;
  }

  .logo-trans-75 {
    opacity: 0.75;
  }

  .container {
    display: flex;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
  }

  .container__top {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    width: 100%;
  }

  .container__top div:first-of-type {
    width: 100%;
  }

  .container__top .content {
    margin: 16px 0 16px 0;
    padding: 14px 20px 14px 20px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    flex: 1 0 0;
  }

  .container__bottom {
    display: flex;
    padding: 10px;
    text-align: center;
  }

  .container__bottom .icon {
    margin: 0 5px;
  }

  .container__bottom_left, .container__bottom_right {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-items: center;
    font-size: 1.7em;
  }

  .container__bottom_center {
    font-size: .8em;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
  }

  .contact-bar {
    margin: 0 0 25px 0;
    text-align: center;
    font-size: 2.5em;
    text-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }

  .contact-bar::after {
    display: block;
    margin: 20px 10% 0 10%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.75);
    content: '';
  }
</style>
