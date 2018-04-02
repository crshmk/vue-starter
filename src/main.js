var Vue = require('vue');
var App = require('./App.vue');

var router = require('./router');
var http = require('vue-axios-2');

Vue.use(http);

new Vue({
  el: '#app',
  //store: store,
  router: router,
  render: h => h(App)
});
