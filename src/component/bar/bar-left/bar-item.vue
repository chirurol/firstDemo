<template>
  <span class="options" :class="{ pickedOpt: item.isPicked }"
        @click.stop="item.choose(1, that)" @mouseover.stop="item.choose(0, that)">
      {{ item.name }}
  </span>
</template>

<script>
export default {
  name: "BarItem",
  props: [
      'item',
      'index'
  ],
  data: function () {
    return {
      that: this
    }
  }
}
</script>

<style scoped src="../../../style/bar/bar-item.css"></style>