<template lang="html">
  <div class="navbar-top">
    <ul>
      <li v-for="link in links"><router-link :to="link.path">{{ link.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: 'navbar-top',
  components: {},
  computed: {},
  data: function() {
    return {
      links: [{name: 'home', path: '/'}]
    };
  },
  methods: {}
};
</script>

<style lang="css" scoped>
.navbar-top {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  background: #eee;
}
ul {
  padding-left: 50px;
}
li {
  display: inline-block;
  margin-right: 20px;
}
a {
  color: #121212;
}
</style>
