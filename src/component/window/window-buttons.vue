<template>
  <span class="WindowButtonContainer">
    <span :id="'WindowButtonClose'+current_app_name" class="WindowButton WindowButtonClose"
          @mouseover="isCloseIconShown=true" @mouseout="isCloseIconShown=false" @click="close">
      <img v-show="isCloseIconShown" src="../../../media/icon/window_close.png" alt="" class="WindowButtonIcon"/>
    </span>
    <span :id="'WindowButtonMinimise'+current_app_name" class="WindowButton WindowButtonMinimise"
          @mouseover="isMinimiseIconShown=true" @mouseout="isMinimiseIconShown=false" @click="minimise">
      <img v-show="isMinimiseIconShown" src="../../../media/icon/window_minimum.png" alt="" class="WindowButtonIcon"/>
    </span>
    <span :id="'WindowButtonScale'+current_app_name" class="WindowButton WindowButtonScale"
          @mouseover="isScaleIconShown=true" @mouseout="isScaleIconShown=false" @click="scale">
      <img v-show="isScaleIconShown" src="../../../media/icon/window_full.png" alt="" class="WindowButtonIcon"/>
    </span>
  </span>
</template>

<script>
import $ from 'jquery';
export default {
  name: "WindowButtons",
  props: [
    'current_app_name'
  ],
  data: function () {
    return {
      isCloseIconShown: false,
      isMinimiseIconShown: false,
      isScaleIconShown: false,
    }
  },
  methods: {
    close () {
      $(`#Window_${this.current_app_name}`).hide();
    },
    minimise () {
      $(`#Window_${this.current_app_name}`).hide();
    },
    scale () {
      // $("#dex_body").hide();
    },
  }
}
</script>

<style scoped>
.WindowButton{
  float: left;
  min-width: 15px;
  min-height: 15px;
  border-radius: 100%;
  font-size: 5px;
  line-height: 5px;
  user-select: none;
  z-index: 8;
}
.WindowButtonClose{
  background: red;
  margin-right: 5px;
  opacity: 1;
}
.WindowButtonMinimise{
  background: yellow;
  margin-right: 5px;
}
.WindowButtonScale{
  background: lightgreen;
}
.WindowButtonIcon{
  width: 12px;
  height: 12px;
  margin: 1px;
}
</style>