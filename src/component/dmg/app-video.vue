<template>
  <div class="video_container">
    <video-player ref="videoPlayer" class="video-player vjs-custom-skin" :playsinline="true" :options="playerOptions"></video-player>
  </div>
</template>

<script>
let videoSrc = '/media/video/Broke Girls 0103.mp4';
let videoImg = '/media/bg.jpg';
import Vue from 'vue';
import VideoPlayer from 'vue-video-player';
Vue.use(VideoPlayer);
export default {
  name: 'AppVideo',
  // components: {
  //   //VideoPlayer,//使用Vue.use()导入外部vue组件后，无需再使用components导入
  // },
  data() {
    return {
      playerOptions : {
        // playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
        autoplay : false, //如果true,浏览器准备好时开始回放。
        muted : false, // 默认情况下将会消除任何音频。
        loop : false, // 视频一结束就重新开始。
        preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language : 'zh-CN',
        // aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid : false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources : [ {
          type : "video/mp4",
          src : videoSrc//url地址
        } ],
        poster : videoImg, //你的封面地址
        fullscreen:{
          options: {navigationUI: 'hide'}
        },
        // width: document.documentElement.clientWidth,
        // notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // controlBar : {
        //   timeDivider : true,//当前时间和持续时间的分隔符
        //   durationDisplay : true,//显示持续时间
        //   remainingTimeDisplay : false,//是否显示剩余时间功能
        //   fullscreenToggle : true  //全屏按钮
        // },
        controls: true,//用户可以与之交互的控件
      },
    }
  },
};
</script>

<style scoped src="vue-video-player/src/custom-theme.css"></style>
<style scoped src="video.js/dist/video-js.css"></style>
<style scoped>
  /*.video_container{*/
  /*  position: absolute;*/
  /*  !*top: 0;*!*/
  /*  !*bottom: 0;*!*/
  /*  !*left: 0;*!*/
  /*  margin: 0;*/
  /*  !*width: 100%;*!*/
  /*  !*height: 100%;*!*/
  /*  !*padding-top: 0;*!*/
  /*}*/
  video-player{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*padding: 0;*/
    margin: 0;
    /*width: 100%;*/
    /*height: 100%;*/
  }
</style>