<template lang="html">
  <div class="app">
    <navbar-top></navbar-top>
    <router-view></router-view>
  </div>
</template>

<script>
var NavbarTop = require('./components/global/NavbarTop.vue');

module.exports = {
  name: 'app',
  components: {
    'navbar-top': NavbarTop
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="css">
@font-face {
    font-family: 'hn';
    src: url(assets/fonts/HelveticaNeue.eot),
    url(assets/fonts/HelveticaNeue.woff) format('woff'), /* Modern Browsers */
    url(assets/fonts/HelveticaNeue.ttf) format('truetype'), /* Safari, Android, iOS */
    url(assets/fonts/HelveticaNeue.svg) format('svg');
 }

 *, *:before, *:after {
     box-sizing: border-box;
     outline: none;
 }

 *:focus {
     outline: 0;
 }

 html {
   -ms-text-size-adjust: 100%;
   -webkit-text-size-adjust: 100%;
 }

body {
  margin: 0;
  padding:0;
  font-family: 'hn', serif;
  letter-spacing: .1em;
  background: #fafafa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
  color: #fff;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 26px;
}

p {
  font-size: 14px;
  letter-spacing: .02em;
}

.page {
  margin-top: 70px;
  padding:50px;
}

.cf:before, .cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

/* <transition name="fade"> */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
