<template>
  <span>
    <span>{{ time | formatDate }}</span>
  </span>
</template>

<script>
const week_day_type = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
export default {
  name: "BarTime",
  data: function (){
    return {
      current_time: '',
    }
  },
  computed: {
    time: function () {
      let that = this;
      that.timer = setInterval (function () {
        that.current_time = new Date();
      }, 1000);
      return that.current_time;
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value);
      let [month, day, week, hours, minutes] = [date.getMonth() + 1, date.getDate(), date.getDay(), date.getHours(), date.getMinutes()];
      // let seconds = padDate(date.getSeconds());
      let noon = "上午";
      if (hours > 12) {
        noon = "下午";
        hours -= 12;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      return month + '月' + day + '日 ' + week_day_type[week] + " " + noon + hours + ':' + minutes;
    }
  }
}
</script>

<style scoped>
span{
  font-size: 12px;
  font-weight: bold;
}
</style>