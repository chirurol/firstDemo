<template>
  <div class="window" :id="'Window_'+current_app_name">
    <div>
      <window-buttons :current_app_name="current_app_name"></window-buttons>
      <div v-if="current_app_name==='Video'">
        <app-video></app-video>
      </div>
    </div>
    <br/>
<!--    <div>-->
<!--      {{ current_app_name }}-->
<!--    </div>-->
  </div>
</template>

<script>
import Vue from "vue";
import WindowButtons from './window-buttons.vue';
import AppVideo from '../dmg/app-video.vue';
Vue.component('WindowButtons');
Vue.component('AppVideo');
export default {
  name: "Window",
  props: [
      'current_app_name'
  ],
  components: {
    WindowButtons,
    AppVideo,
  }
}
</script>

<style scoped>
.window{
  position: absolute;
  top: 0/*25px*/;
  bottom: 0/*85px*/;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding: 10px;
  background: whitesmoke;
  opacity: 0.8;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>