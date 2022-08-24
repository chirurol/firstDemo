<template>
  <div style="display: flex;flex-flow: column">
    <span @click="HandleOnClick" :id="'DexItemPic'+item.name">
      <img :src="item.src" alt="???">
    </span>
    <span class="app_open_light" :style="{opacity : isAppLightOn ? 1 : 0}"></span>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "DexItem",
  props: [
    'item',
    'index'
  ],
  data: function () {
    return {
      state: false,
      isAppLightOn: false
    }
  },
  methods: {
    HandleOnClick () {
      if (!this.isAppLightOn) {
        $(`#DexItemPic${this.item.name}`).addClass('animate__animated animate__bounce');
      } else {
        ;
      }
      if (!this.state) {
        this.isAppLightOn = true;
      }
      this.item.OpenApp(this);
    }
  }
}
</script>

<style scoped>
img{
  width: 70px;
  height: 70px;
  position: relative;
  top: 5px;
}
.app_open_light{
  position: relative;
  left: 33px;
  bottom: 1px;
  border: 1px solid black;
  border-radius: 100%;
  background: black;
  width: 2px;
  height: 2px;
}
</style>