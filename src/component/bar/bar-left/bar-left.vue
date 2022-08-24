<template>
  <span>
    <template v-for="(item, index) in barItems">
      <bar-item :item="item" :index="index" :id="'bar_item_'+index"></bar-item>
    </template>
  </span>
</template>

<script src="../../../method/bar/bar-left.js"></script>

<style scoped>

</style>