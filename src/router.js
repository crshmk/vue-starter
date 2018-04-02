var Vue = require('vue');
var Router = require('vue-router');
Vue.use(Router);

var Home = require('./components/pages/Home.vue');

var router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home,
    }
  ]
});
module.exports = router;
