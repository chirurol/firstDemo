<template>
  <div id="menu" v-if="current_bar_index > -1" :key="current_bar_index"
       :style="{ left: left }">
    <template v-for="(item, index) in items">
      <menu-item :item="item" :index="index" :select="select"></menu-item>
    </template>
  </div>
</template>

<script src="../../../method/bar/menus.js"></script>

<style scoped src="../../../style/bar/menus.css"></style>