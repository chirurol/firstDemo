<template>
  <div class="container"
       @mouseenter="HandleMouseOn(true)" @mouseleave="HandleMouseOn(false)">
<!--    mouseover 与 mouseenter:
        mouseover => 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。
        mouseenter => 只有在鼠标指针从元素外穿入被选元素（到元素内）时，才会触发 mouseenter 事件。-->
    <div v-if="isMouseOver" @click="HandleClose">
      <close-button :prefix="'notice_'" :index="this.index"></close-button>
    </div>
    <div class="title_container">
      <img :src="item.pic" alt="icon" class="logo">
      <span class="name">{{ item.appName }}</span>
      <span class="time">{{ timeLength | timeFilter }}</span>
    </div>
    <div class="main_container">
      <div>
        <div class="title">{{ item.title }}</div>
        <div>{{ item.main }}</div>
      </div>
      <span v-if="item.icon!==''" :key="this.index" style="margin-left: auto">
        <img :src="item.icon" alt="" class="pic">
      </span>
      <span v-show="item.icon===''&&isMouseOver" @click="HandleOnClick" style="margin-left: auto">
        <span class="button">详细信息</span>
      </span>
    </div>
    <div v-show="item.more>0" class="more">还有{{ item.more }}个通知</div>
  </div>
</template>

<script>
import CloseButton from './close-button.vue';
import Vue from "vue";
Vue.component('close-button', CloseButton);
export default {
  name: "NoticeItem",
  components: {
    CloseButton
  },
  props: [
      'item',
      'index'
  ],
  data: function () {
    return {
      isMouseOver: false
    }
  },
  computed: {
    timeLength: function () {
      let time = new Date();
      return time - this.item.time;
    }
  },
  filters: {
    timeFilter: function (value) {
      // let time = value / 1000;
      // // let minutes = seconds / 60;
      // if (time < 60) {
      //   return 'Now';
      // } else if (time < 3600) {
      //   return time/3600 + ' minute(s) ago';
      // } else if (time < 86400) {
      //   return time/86400 + ' hour(s) ago';
      // } else if (time < 604800) {
      //   return time/604800 + ' day(s) ago';
      // } else {
      //   return '1 week ago';
      // }
      return '现在';
    }
  },
  methods: {
    HandleMouseOn: function (isMouseOver) {
      this.isMouseOver = isMouseOver;
      console.log(isMouseOver?'true':'false');
    },
    HandleOnClick: function () {
      this.item.onclick();
      this.$store.commit('switchNotice');
    },
    HandleClose: function () {
      this.item.close();
    },
  }
}
</script>

<style scoped>
.container{
  /*width: 100%;*/
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid lightgray;
  background: rgba(211, 211, 211, 0.6);
  font-size: 14px;
  user-select: none;
}
.title_container{
  font-size: 12px;
  color: #8f8f8f;
}
.logo{
  width: 18px;
  height: 18px;
  /*align-content: center;*/
  /*line-height: 15px;*/
}
.name{

}
.time{
  float: right;
}
.main_container{
  width: 100%;
  color: white;
  display: flex;
}
.title{
  font-weight: bold;
}
.pic{
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.button{
  background: darkgray;
  min-width: 60px;
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
}
.more{
  margin-top: 2px;
  color: gray;
  font-size: 10px;
}
</style>