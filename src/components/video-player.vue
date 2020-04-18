<template>
  <div class="my-video-play">
    <video-player
      ref="videoPlayer"
      :key="key"
      :playsinline="true"
      :options="options"
    />
  </div>
</template>
<script>
import { videoPlayer } from "vue-video-player";
// import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
export default {
  components: { videoPlayer },
  props: {
    sources: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      key: 0,
      options: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        sources: this.sources,
        // poster:
        //   "//leoyep.oss-cn-shanghai.aliyuncs.com/pic/%E7%89%B9%E6%AE%8A%E4%BD%BF%E5%91%BD.jpg",
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      }
    };
  },
  watch: {
    sources: {
      deep: true,
      handler(c) {
        this.options.sources = c;
        this.$nextTick(() => {
          this.key++;
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.my-video-play {
  background: #000;
  color: #fff;
  &-title {
    padding: 30px 0 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
