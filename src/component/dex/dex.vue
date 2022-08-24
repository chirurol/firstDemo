<template>
  <div id="dex_body">
    <div id="dex">
      <template v-for="item in items">
        <dex-item :item="item"></dex-item>
      </template>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Vue from "vue";
import DexItem from './dex-item.vue';
Vue.component('dex-item', DexItem);
const picPath = '../../../media/app/';
class DI {
  constructor(name, isOpened = false) {
    [this.name, this.isOpened, this.src = picPath + this.name + '.png', this.index = DI.sum++] = [name, isOpened];
  }
  OpenApp (that) {
    if (this.isOpened) {
      //reOpen
    } else {
      that.$store.commit('openWindow', this);
      this.isOpened = true;
    }
    console.log("Open " + this.name);
  }
  CloseApp (that) {
    that.$store.commit('closeWindow', this);
    this.isOpened = false;
  }
}
DI.sum = 0;
const initDexItem = name => new DI(name);
const initDexItems = names => names.map((name) => initDexItem(name));
export default {
  name: "Dex",
  components: {
    DexItem,
  },
  data: function () {
    return {
      names: ['LaunchPad', 'Reminders', 'Photos', 'Safari', 'Messages', 'Mail', 'Video']
    }
  },
  computed: {
    items: function () {
      return initDexItems(this.names);
    }
  },
  created() {
    this.names.push('LaunchPad');
  }
}
</script>

<style scoped>
#dex_body{
  width: 100%;
  height: 85px;
  position: absolute;
  bottom: 0;
  z-index: 9;
}
#dex{
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  height: 80px;
  border-radius: 20px;
  background: rgba(211, 211, 211, 0.6);
  text-align: center;
  align-items: center;
  bottom: 5px;
  margin:0 auto;
  display: flex;
}
</style>