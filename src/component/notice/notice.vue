<template>
  <transition name="swipe"
              enter-active-class="animate__slideInRight"
              leave-active-class="animate__slideOutRight">
    <div id="notice" v-show="isShown" @click.stop=""
         class="animate__animated" style="animation-duration: 500ms">
      <template v-for="(item, index) in noticeItems">
        <notice-item :item="item" :index="index" :id="'notice_'+index"></notice-item>
      </template>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import NoticeItem from './notice-item.vue';
Vue.component('notice-item', NoticeItem);
export default {
  name: "Notice",
  components: {
    NoticeItem
  },
  data: function () {
    return {
      noticeItems: [],
    }
  },
  computed: {
    isShown: function () {
      //只能用计算属性
      return this.$store.state.notice_is_opened;
    }
  },
  created() {
    let obj = new NI('Music', 'I Did Something Bad', 'Taylor Swift -- reputation', '../../../media/app/Music.png', '../../../media/img/BigRedMachine.png', 99);
    this.noticeItems.push(obj);
    this.noticeItems.push(obj);
    this.noticeItems.push(new NI('Reminders', '点奶茶', '', '../../../media/app/Reminders.png'));
  }
}

class NI {
  constructor(appName, title, main, pic, icon, more, time) {
    [this.appName, this.title, this.main, this.pic='', this.icon='', this.more=0, this.time=new Date()] = [appName, title, main, pic, icon, more];
  }
  onclick() {
    console.log(this.appName + ' is clicked.');
  }
  close() {
    console.log(this.appName + ' is closed.');
  }
}

export function cancelNoticeShown (that, newVal) {
  that.$store.commit('switchNotice', newVal);
}
</script>

<style scoped>
#notice{
  position: absolute;
  right: 1%;
  top: 25px;
  bottom: 85px;
  width: 24%;
  z-index: 8;
  /*background: rgba(211, 211, 211, 0.3);*/
}
</style>