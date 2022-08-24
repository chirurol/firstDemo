<template>
  <div class="subMenu" :class="pickStyle">
    <div @mouseover="HandleMouseOver(1)" @mouseout="HandleMouseOver(-1)"
       @click.stop="chooseOption">
      <span v-if="isCheckedShown" style="position: fixed;">✓</span>
      <img v-if="item.logo!==''" :src="item.logo" :class="{ optName: select===true }" alt=""/>
      <span :class="{ optName: select===true }">{{ item.name }}</span>
      <span>
        <span class="keys" v-if="item.pickType!==8">{{ item.keys }}</span>
        <span class="arrow" v-else>></span>
      </span>
    </div>
  </div>
</template>

<script src="../../../method/bar/menu-item.js"></script>

<style scoped src="../../../style/bar/menu-item.css"></style>