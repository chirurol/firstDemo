<template>
  <span class="rightMenu">
    <span @click.stop="showNotice">
      <bar-time></bar-time>
    </span>
    <template v-for="(item, index) in BarButtons" v-if="item.isShown">
      <bar-button :item="item" :index="index"></bar-button>
    </template>
  </span>
</template>

<script src="../../../method/bar/bar-right.js"></script>

<style scoped src="../../../style/bar/bar-right.css"></style>