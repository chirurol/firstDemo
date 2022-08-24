<template>
  <div id="desktop">
    <div id="WindowContainer">
      <div v-for="item in windows">
        <window :current_app_name="item.name"></window>
      </div>
    </div>
  </div>
</template>

<script>
import Window from "../window/window.vue";
import Vue from "vue";
Vue.component('Window');
export default {
  name: "Desktop",
  components: {
    Window
  },
  // data: function () {
  //   return {
  //     windows: this.$store.state.windows,
  //   }
  // },
  computed: {
    windows: function () {
      return this.$store.state.windows;
    }
  }
}
</script>

<style scoped>
#desktop{
  position: fixed;
  top: 25px;
  bottom: 85px;
  left: 0;
  right: 0;
}
</style>