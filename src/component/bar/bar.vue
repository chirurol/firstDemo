<template>
  <div id="bar" @mouseover="cancelMenuClick">
    <bar-left></bar-left>
    <bar-right></bar-right>
  </div>
</template>

<script>
import Vue from 'vue';
import BarLeft from './bar-left/bar-left.vue';
import BarRight from './bar-right/bar-right.vue';
import {cancelMenuClick} from "../../method/bar/bar-left";
Vue.component('bar-left', BarLeft);
Vue.component('bar-right', BarRight);
export default {
  name: "Bar",
  components: {
    BarLeft,
    BarRight
  },
  methods: {
    cancelMenuClick: function () {
      cancelMenuClick(this);
    }
  }
}
</script>

<style scoped>
#bar{
  width: 100%;
  height: 25px;
  background-color: whitesmoke;
  opacity: 0.6;
  padding-left: 5px;
  z-index: 9;
}
</style>