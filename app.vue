<template>
  <div>
    <bar></bar>
    <menus></menus>
    <notice></notice>
    <desktop></desktop>
    <dex></dex>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Bar from './src/component/bar/bar.vue';
import Menus from './src/component/bar/bar-left/menus.vue';
import Notice from './src/component/notice/notice.vue'
import Desktop from "./src/component/desktop/desktop.vue";
import Dex from "./src/component/dex/dex.vue";
Vue.component('Bar');
Vue.component('Menus');
Vue.component('Notice');
Vue.component('Desktop');
Vue.component('Dex');

export default {
  name: "App",
  components: {
    Bar,
    Menus,
    Notice,
    Desktop,
    Dex
  }
}

</script>

<style scoped>

</style>