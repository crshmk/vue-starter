var Vue = require('vue');
var App = require('./App.vue');

var router = require('./router');

new Vue({
  el: '#app',
  //store: store,
  router: router,
  render: h => h(App)
});
