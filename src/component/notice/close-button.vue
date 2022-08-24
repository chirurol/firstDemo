<template>
  <div class="close_container" :style="{top: top}">
    <img src="../../../media/close.png" alt="C" class="close">
  </div>
</template>

<script>
export default {
  name: "CloseButton",
  props: [
    'prefix',
    'index'
  ],
  computed: {
    top: function () {
      const e = document.getElementById(this.prefix + this.index);
      return e.offsetTop - 5 + 'px';
    }
  },
}
</script>

<style scoped>
.close_container{
  position: absolute;
  left: 0;
  width: 14px;
  height: 14px;
  padding: 2px;
  background: lightgray;
  /*border: 1px solid white;*/
  border-radius: 16px;
  text-align: center;
  align-self: center;
}
.close{
  width: 10px;
  height: 10px;
  position: relative;
  top: -2px;
  left: -1px;
}
</style>