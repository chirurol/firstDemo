<template>
  <span>
    <img :src="item.icon"  alt=""/>
  </span>
</template>

<script>
export default {
  name: "BarButton",
  props: [
      'item',
      'index'
  ],
}
</script>

<style scoped>
img{
  width: 14px;
  height: 14px;
  border-radius: 7px;
  /* margin: 0 auto; */
}
</style>