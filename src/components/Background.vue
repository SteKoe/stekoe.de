<template>
  <div class="bg">
    <div class="bg__mask"></div>
    <div class="bg__image" style="background-color: rgb(44, 62, 10);" v-bind:style="{ backgroundImage: backgroundImage }"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        backgroundImage: ['url(', require('../assets/bg/' + getBackground()), ')'].join('')
      }
    }
  }

  const randomBackgrounds = [
    '1.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
  ]

  function getBackground () {
    let item = sessionStorage.getItem('bg')
    if (item && randomBackgrounds.indexOf(item) !== -1) {
      return item
    } else {
      let background = getRandomBackground()
      sessionStorage.setItem('bg', background)
      return background
    }
  }

  function getRandomBackground () {
    return randomBackgrounds[Math.floor((Math.random() * 9999) % randomBackgrounds.length)]
  }
</script>

<style scoped>
  .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg__mask {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

    background-image: url('../assets/mask.png');
  }

  .bg__image {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

    animation-name: zoomin;
    animation-duration: 180s;
    animation-iteration-count: infinite;
  }
</style>
